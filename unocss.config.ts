import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: [
        ['btn', 'px-8px py-1px rounded inline-block bg-hex-3aced5ff text-white text-13px cursor-pointer !outline-none hover:bg-hex-3aced5ee disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-hex-3aced5dd'],
        ['flex--c', 'flex items-center'],
        ['flex-cc', 'flex justify-center items-center'],
        ['flex-bc', 'flex justify-between items-center'],
        ['text-h3', 'text-34px text-orange-600 leading-45px'],
        ['text-h4', 'text-32px text-dark-200 leading-45px'],
        ['text-h5', 'text-28px text-dark-200 leading-45px'],
        ['text-h6', 'text-24px text-dark-200 leading-33px'],
        ['text-h6-b', 'text-24px text-dark-200 leading-33px font-500'],
        ['text-p', 'text-24px text-hex-999 leading-33px'],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            /* options */
        }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    safelist: 'svg-text1 svg-text2'.split(' '),
    rules: [],
})
