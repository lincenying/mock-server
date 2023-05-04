import type { MockMethod } from '@lincy/vite-plugin-mock'

export interface AnyArray {
    [index: number]: any
}

export type Fn = (...args: any[]) => void

export interface ObjModules {
    file: string
    data: MockMethod[]
}
