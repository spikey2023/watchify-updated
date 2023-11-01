const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from a .env file
const env = dotenv.config().parsed;


// DefinePlugin will replace process.env.REACT_APP_... with the actual values from the .env file
const definePlugin = new webpack.DefinePlugin({
  'process.env': JSON.stringify(env),
});

module.exports = {
  entry: ["./app/index.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "source-map",
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "",
            },
          },
        ],
      },
    ],
  },
  plugins: [definePlugin],
};
