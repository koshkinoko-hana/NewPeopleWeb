module.exports = {
    distDir: 'build',
    trailingSlash: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/contacts': { page: '/contacts'},
            '/forms': { page: '/forms'},
            '/news': { page: '/news'},
        }
    },
    webpack(config, options){
        const { dir, defaultLoaders } = options
        config.resolve.extensions.push('.ts', '.tsx')
        config.module.rules.push({
            test: /\\.+(ts|tsx)$/,
            include: [dir],
            exclude: /node_modules/,
            use: [
                defaultLoaders.babel,
                { loader: 'ts-loader', options: { transpileOnly: true } }
            ]
        })
        return config
    }
}
