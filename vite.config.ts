import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import { viteMockServe } from '@lincy/vite-plugin-mock'
import VueMacros from 'unplugin-vue-macros'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    const localMock = true

    const config = {
        plugins: [
            VueMacros.vite({
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
                enable: command === 'serve' && localMock,
                logger: true,
            }),
            UnoCSS({
                /* options */
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
                // '/imocScreenBjStarfire': {
                //     target: 'http://127.0.0.1:9988',
                //     changeOrigin: true,
                //     rewrite: path => path.replace(/^\/imocScreenBjStarfire/, '/mock-api'),
                // },
                // '/imocScreenBjStarfire': {
                //     target: 'http://192.168.1.170:8080',
                //     changeOrigin: true,
                //     rewrite: path => path.replace(new RegExp(`^/imocScreenBjStarfire`), '/imocScreenBjStarfire')
                // }
            },
        },
    }
    return config
})
