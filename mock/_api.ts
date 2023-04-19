import pkg from 'mockjs'

const { Random } = pkg

export const baseApi = 'mock-api/imocScreenBjStarfire'

export function getArray(num: number, min = 1, max = 100) {
    return new Array(num).fill('').map(() => Random.integer(min, max))
}

export function getTwoArray(num1: number, num2: number, min = 1, max = 100) {
    return new Array(num1).fill('').map(() => {
        return new Array(num2).fill('').map(() => Random.integer(min, max))
    })
}

export function getArrayObj(obj: Obj, num: number) {
    return Array.from({ length: num }, () => obj)
}
