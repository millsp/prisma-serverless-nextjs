const {ESBuildMinifyPlugin} = require('esbuild-loader');

function useEsbuildLoader(webpack, config, options) {
    const loader = config.module.rules.find((rule) => rule.test && rule.test.test('.ts'));

    if (loader) {
        loader.use.loader = 'esbuild-loader';
        loader.use.options = options;
        config.plugins.push(
            new webpack.ProvidePlugin({
                React: 'react',
            }),
        );
    }
}

function minifyWithEsbuild(config, target) {
    config.optimization = {
        minimizer: [new ESBuildMinifyPlugin({target})],
        minimize: true,
    };
}

module.exports = {
    future: {
        webpack5: false, // TODO binary not found
    },
    webpack: (config, {webpack, dev, isServer}) => {
        useEsbuildLoader(webpack, config, {
            loader: 'tsx',
            target: 'es2015',
        });

        if (!dev) {
            minifyWithEsbuild(config, 'es2015');
        }

        if (isServer) {
            config.externals.push('_http_common');
        }

        return config;
    },
    target: 'serverless',
};
