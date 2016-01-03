module.exports = {
  entry: "./web/static/js/server_render.js",
  output: {
    path: "./priv/server",
    filename: "js/main.js",
    library: "myComponent",
    libraryTarget: "commonjs2"
  },
  module: {
    noParse: /\.elm$/,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack'
      },
    ]
  },
  resolve: {
    alias: {
      phoenix_html:
        __dirname + "/deps/phoenix_html/web/static/js/phoenix_html.js",
      phoenix:
        __dirname + "./deps/phoenix/web/static/js/phoenix.js"
    }
  }
};
