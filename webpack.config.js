var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Controls: 'app/components/Controls.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};


// '__dirname' gives us path to the current folder. its a variable in nodejs
// by default it gives the path of the whichever directory we're in.
// here it gives us the path of HelloReact folder
// babel-loader is used to convert the JSX code into ES-5
// --> in the 'loaders' we are telling Babel-loader to take all the files
// parse them through react and run them thru es2015

// when we add new aliases we need to run webpack -w once again.
