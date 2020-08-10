module.exports = {

    // build先ディレクトリ
    outputDir: 'docs',
    // 静的ファイル公開設定
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vuetify-training'
        : '/'
    ,
    "transpileDependencies": [
        "vuetify"
    ]
}