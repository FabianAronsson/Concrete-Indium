module.exports = {
    module: {
      rules: [
        //specific rules for sass
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: { //for scss
                  indentedSyntax: true,
                  // sass-loader version >= 8
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
          ]
        }
      ]
    },
  }