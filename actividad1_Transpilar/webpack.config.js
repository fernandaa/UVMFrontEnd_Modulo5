//TS
// const path = require("path");

// module.exports = {
//   entry: "./src/index.ts",
//   devtool: "inline-source-map",
//   module: {
//     rules: 
//     [
//       { 
//         test: /\.tsx?$/i, 
//         use: ['ts-loader'], 
//         exclude: '/node-modules/'
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
// };












///PRACTICAS ANTERIORES
const path = require("path");
const yaml = require("yamljs");
const json5 = require("json5");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: 
    [
      { 
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'], 
      },
      { 
        test: /\.s[ac]ss$/i, 
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
      { 
        test: /\.(png|jpg)$/i, 
        type: 'asset/resource'
      },
      { 
        test: /\.csv$/i, 
        use: ['csv-loader'], 
      },
      { 
        test: /\.yaml$/i, 
        type: 'json', 
        parser:{
          parse: yaml.parse
        }
      },
      { 
        test: /\.json5$/i, 
        type: 'json', 
        parser:{
          parse: json5.parse
        }
      },
      // {
      //   test: /\.html$/i,
      //   use: ['html-loader'], 
      // },
      
    ],
  },
};
