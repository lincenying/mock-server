import path from 'node:path'

import { loadEnv } from 'vite'

import vuePlugin from '@vitejs/plugin-vue'

import { viteMockServe } from 'vite-plugin-mock'

import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    const localMock = true
    const prodMock = false

    const config = {
        plugins: [
            VueMacros({
                plugins: {
                    vue: vuePlugin({
                        template: {
                            compilerOptions: {
                                isCustomElement: tag => ['def'].includes(tag),
                            },
                        },
                    }),
                },
            }),
            viteMockServe({
                mockPath: 'mock',
                localEnabled: command === 'serve' && localMock,
                prodEnabled: command !== 'serve' && prodMock,
                injectCode: `
                  import { setupProdMockServer } from './mockProdServer';
                  setupProdMockServer();
                `,
                injectFile: 'src/index.ts',
                logger: true,
            }),
        ],
        resolve: {
            alias: {
                '@': path.join(__dirname, './src'),
            },
        },

        base: './',
        build: {
            target: 'es2018',
            minify: true,
            assetsInlineLimit: 4096,
            chunkSizeWarningLimit: 1000,
            outDir: 'dist',
            rollupOptions: {
                input: {
                    main: path.resolve(__dirname, 'index.html'),
                },
                external: /\.\/assets.*/,
            },
        },
        server: {
            port: 9988,
            proxy: {
                '/imocScreenBjStarfire': {
                    target: 'http://127.0.0.1:9988',
                    changeOrigin: true,
                    rewrite: path => path.replace(new RegExp('^/imocScreenBjStarfire'), '/mock-api'),
                },
                // '/imocScreenBjStarfire': {
                //     target: 'http://192.168.1.170:8080',
                //     changeOrigin: true,
                //     rewrite: path => path.replace(new RegExp(`^/imocScreenBjStarfire`), '/imocScreenBjStarfire')
                // }
            },
        },
    }
    return config
}
