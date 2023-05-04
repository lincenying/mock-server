import type { MockMethod } from '@lincy/vite-plugin-mock'

// @ts-expect-error 1111
import { createProdMockServer } from '@lincy/vite-plugin-mock/client'
import type { ObjModules } from './types'

const modules1: Record<string, any> = import.meta.glob('../mock/*.js', { eager: true })
const modules2: Record<string, any> = import.meta.glob('../mock/*.ts', { eager: true })

const modules = {
    ...modules1,
    ...modules2,
}

const arrModules: Array<MockMethod> = []
const objModules: Array<ObjModules> = []
Object.keys(modules).forEach((key) => {
    if (key.includes('/_'))
        return

    arrModules.push(...modules[key].default)
    objModules.push({
        file: key.split('/').pop() || '',
        data: modules[key].default,
    })
})

export const mockModules = objModules

export function setupProdMockServer() {
    createProdMockServer(arrModules)
}
