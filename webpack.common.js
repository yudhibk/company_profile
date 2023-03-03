const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
 
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      id: 'Askara-CompanyProfile-PWA',
      name: 'PT Askara Internal - Company Profile',
      short_name: 'Askara',
      description: 'ASKARA Group established in 1995, a group company that focuses in industrial segment, equipment procurement & hospitality. One stop solution for automotive components, mechanical, electrical services, technical support, construction & landscaping for Office and Industry.',
      theme_color: '#091ABE',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: './index.html',
      publicPath: '/',
      icons: [
        {
          src: path.resolve('src/images/logo_askara/png/askara_x16.png'),
          type: 'image/png',
          sizes: '16x16',
          purpose: 'any'
        },
        {
          src: path.resolve('src/images/logo_askara/png/askara_x32.png'),
          type: 'image/png',
          sizes: '32x32',
          purpose: 'any'
        },
        {
          src: path.resolve('src/images/logo_askara/png/askara_x48.png'),
          type: 'image/png',
          sizes: '48x48',
          purpose: 'any'
        },
        {
          src: path.resolve('src/images/logo_askara/png/askara_x128.png'),
          type: 'image/png',
          sizes: '128x128',
          purpose: 'any'
        },
        {
          src: path.resolve('src/images/logo_askara/png/askara_x144.png'),
          type: 'image/png',
          sizes: '144x144',
          purpose: 'any'
        },
        {
          src: path.resolve('src/images/logo_askara/png/askara_x256.png'),
          type: 'image/png',
          sizes: '256x256',
          purpose: 'any'
        },
        {
          src: path.resolve('src/images/logo_askara/png/askara_x512.png'),
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any'
        },
        {
          src: path.resolve('src/images/logo_askara/maskable_png/askara_x16.png'),
          type: 'image/png',
          sizes: '16x16',
          purpose: 'maskable'
        },
        {
          src: path.resolve('src/images/logo_askara/maskable_png/askara_x32.png'),
          type: 'image/png',
          sizes: '32x32',
          purpose: 'maskable'
        },
        {
          src: path.resolve('src/images/logo_askara/maskable_png/askara_x48.png'),
          type: 'image/png',
          sizes: '48x48',
          purpose: 'maskable'
        },
        {
          src: path.resolve('src/images/logo_askara/maskable_png/askara_x128.png'),
          type: 'image/png',
          sizes: '128x128',
          purpose: 'maskable'
        },
        {
          src: path.resolve('src/images/logo_askara/maskable_png/askara_x144.png'),
          type: 'image/png',
          sizes: '144x144',
          purpose: 'maskable'
        },
        {
          src: path.resolve('src/images/logo_askara/maskable_png/askara_x256.png'),
          type: 'image/png',
          sizes: '256x256',
          purpose: 'maskable'
        },
        {
          src: path.resolve('src/images/logo_askara/maskable_png/askara_x512.png'),
          type: 'image/png',
          sizes: '512x512',
          purpose: 'maskable'
        }
      ]
    })
  ],
};