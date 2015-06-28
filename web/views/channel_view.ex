defmodule Chat.ChannelView do
  use Chat.Web, :view

  def render("index.json", %{channles: channles}) do
    channles
  end

  def render("show.json", %{channles: channles}) do
    channles
  end
end
