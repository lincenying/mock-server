import { Random } from 'mockjs'

export const getArray = (num: number, min = 1, max = 100) => {
    return new Array(num).fill('').map(() => Random.integer(min, max))
}

export const getTwoArray = (num1: number, num2: number, min = 1, max = 100) => {
    return new Array(num1).fill('').map(() => {
        return new Array(num2).fill('').map(() => Random.integer(min, max))
    })
}
