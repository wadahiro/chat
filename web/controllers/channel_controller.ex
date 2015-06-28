defmodule Chat.ChannelController do
  use Chat.Web, :controller

  plug :action

  def index(conn, _params) do
    dummyJson = %{
      channels: [
        %{name: "test1"},
        %{name: "test2"},
        %{name: "test3"}
      ]
    }
    render conn, "index.json", channles: dummyJson
  end

  def show(conn, %{"id" => id}) do
    dummyJson = %{
      name: id,
      msgs: Enum.map(1..100, fn x -> %{id: "#{x}", name: "test1", msg: "#{x}.. abc"} end)
    }
    render conn, "show.json", channles: dummyJson
  end
end
