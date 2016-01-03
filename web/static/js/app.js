import "phoenix_html"
import Elm from '../elm/Todo.elm'
Elm.embed(Elm.Todo, document.getElementById('elm-main'), APP_DATA);
