module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  // 将构建好的文件输出到哪里
  outputDir: process.env.NODE_ENV === 'production' ? 'dist_pro' : 'dist_dev',

  devServer: {
    // host: 'localhost',
    port: 5060,
    open:true,
    before: app => { }
  }
}
