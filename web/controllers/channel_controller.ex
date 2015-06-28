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
      msgs: [
        %{id: "1", name: "test1", msg: "abc"},
        %{id: "2", name: "test2", msg: "def"},
        %{id: "3", name: "test3", msg: "ghi"}
      ]
    }
    render conn, "show.json", channles: dummyJson
  end
end
