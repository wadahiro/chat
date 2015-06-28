defmodule Chat.RoomChannel do
  use Phoenix.Channel
  require Logger

  @doc """
  Authorize socket to subscribe and broadcast events on this channel & topic

  Possible Return Values

  `{:ok, socket}` to authorize subscription for channel for requested topic

  `:ignore` to deny subscription/broadcast on this channel
  for the requested topic
  """
  def join("rooms:lobby", message, socket) do
    Logger.debug "> join room #{inspect message}"
    Process.flag(:trap_exit, true)
    :timer.send_interval(5000, :ping)

    send(self, {:after_join, message})

    {:ok, %{messages: "joined"}, socket}
  end

  # def join("rooms:" <> _private_subtopic, _message, _socket) do
  #   # {:error, %{reason: "unauthorized"}}
  #   # :ignore
  #   {:ok, %{}, socket}
  # end

  def handle_info({:after_join, msg}, socket) do
    Logger.debug "> after_join #{inspect msg}"
    broadcast! socket, "user:entered", %{user: msg["user"]}
    push socket, "join", %{status: "connected"}
    {:noreply, socket}
  end

  def handle_info(:ping, socket) do
    Logger.debug "> handle_info ping"
    push socket, "new:msg", %{user: "SYSTEM", body: "ping"}
    {:noreply, socket}
  end

  def handle_in("new:msg", msg, socket) do
    Logger.debug "> handle_in #{inspect msg}"
    broadcast! socket, "new:msg", %{user: msg["user"], body: msg["body"]}
    {:reply, {:ok, %{msg: msg["body"]}}, assign(socket, :user, msg["user"])}
  end

  def terminate(reason, socket) do
    Logger.debug"> leave #{inspect reason}"
    :ok
  end
end
