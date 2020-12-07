module.exports={
    publicPath:'/miaomiao',
    // 开发配置
    devServer:{
        proxy:{
            // http://39.97.33.178/api/aalist
            // 地址已经不能用了
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}