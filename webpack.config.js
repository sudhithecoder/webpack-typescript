const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode:'development',
    plugins:[new MiniCssExtractPlugin()],
    module:{
        rules:[
            {
                test: /\.s([ac]|c)ss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    }
}