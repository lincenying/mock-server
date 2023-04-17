import { MockMethod } from 'vite-plugin-mock'
// @ts-ignore
import { createProdMockServer } from 'vite-plugin-mock/client'

const modules1: Record<string, any> = import.meta.glob('../mock/*.js', { eager: true })
const modules2: Record<string, any> = import.meta.glob('../mock/*.ts', { eager: true })

const modules = {
    ...modules1,
    ...modules2,
}

const _mockModules: Array<MockMethod> = []
Object.keys(modules).forEach((key) => {
    if (key.includes('/_'))
        return

    _mockModules.push(...modules[key].default)
})

export const mockModules = _mockModules

export function setupProdMockServer() {
    createProdMockServer(_mockModules)
}
