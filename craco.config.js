const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // 656565
                        modifyVars: { '@primary-color': '#000000' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};