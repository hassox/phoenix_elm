defmodule PhoenixElm.PageController do
  use PhoenixElm.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
