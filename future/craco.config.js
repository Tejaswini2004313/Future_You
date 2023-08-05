const CracoFallbackPlugin = require('@craco/craco');
const crypto = require.resolve('crypto-browserify');
const stream = require.resolve('stream-browserify');
const util = require.resolve('util/');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                crypto,
                stream,
                util,
            };
            return webpackConfig;
        },
    },
};
