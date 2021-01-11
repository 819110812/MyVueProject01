module.exports = {
    configureWebpack: {
        resolve:{
            extensions:[],
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    },
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }

    }
}
