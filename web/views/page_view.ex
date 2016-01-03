defmodule PhoenixElm.PageView do
  use PhoenixElm.Web, :view

  def render("index.html", options) do
    data = %{ getStorage: nil }

    opts = %{
      path: "./priv/server/js/main.js",
      component: "Todo",
      render: "embed",
      id: "elm-main",
      data: data,
    }

    result = PhoenixElm.ElmIo.json_call!(opts)

    render "single_page.html", html: result["html"], data: data
  end
end
