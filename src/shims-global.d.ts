/* eslint-disable no-unused-vars */

declare type Nullable<T> = T | null
declare type NonNullable<T> = T extends null | undefined ? never : T

declare interface requestParams {
    method: string
    body: any
    headers?: { authorization?: string }
    query: any
}
