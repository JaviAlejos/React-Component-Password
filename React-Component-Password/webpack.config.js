const webpack=require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
const extractTextWebpackPlugin=require('extract-text-webpack-plugin')
const cssModules='modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports={
  resolve:{
    extensions:['.js','.jsx'], //extensiones de nuestro proyecto. Webpack vigilara todos los cambios en estos ficheros
     modules: [__dirname, 'node_modules']
  },

  entry:['/Users/javieralejos/Github/React-Component-Password/React-Component-Password/build/AppPassword.js'], //entrada de la aplicación

  output:{ //salida de la app
    filename:'AppPassword.js',
    path:'/Users/javieralejos/Github/React-Component-Password/React-Component-Password/lib', //ruta donde va a estar el fichero final
    publicPath:'/' //para el caso de utilizar un servidor de desarrollo
  },

  module:{
    loaders:[
      {test:/(\.js|jsx)$/, exclude:/node_modules/,loaders:'babel-loader' },
      { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}` },
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,loader: 'file-loader'}
    ]
  },

  devServer:{
    host:'0.0.0.0', //localhost
    port:8080,
    inline:true
  },

  plugins:[
  //  new htmlWebpackPlugin({template:'./src/assets/index.html'}),
    new extractTextWebpackPlugin({filename:'style.css', allChunks:true})
  ]
}
