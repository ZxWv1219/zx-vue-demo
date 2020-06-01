const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = requrie('webpack-merge')
const baseConfig = requrie('./base.config.js')

module.exports = WebpackMerge(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
})