<template>
    <div style="display: flex">
        <div>
            <div v-for="(item, index) in arrUrl" :key="index">{{ item.method }}: {{ item.url }} <button @click="handleXhr(item)">请求</button></div>
        </div>
        <pre>{{ data }}</pre>
    </div>
</template>

<script setup lang="ts">
import type { AxiosResponse } from 'axios'
import axios from 'axios'

const modules1: Record<string, any> = import.meta.glob('../mock/*.ts', { eager: true })
const modules2: Record<string, any> = import.meta.glob('../mock/*.js', { eager: true })

const modules = {
    ...modules1,
    ...modules2,
}

interface ItemType {
    method: string
    url: string
    response: any
}

const _mockModules: Array<ItemType> = []
Object.keys(modules).forEach((key) => {
    if (key.includes('/_'))
        return

    _mockModules.push(...modules[key].default)
})

const arrUrl = $ref<Array<ItemType>>(_mockModules)

let data = $ref()

const instance = axios.create({
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
})

async function handleXhr(item: ItemType) {
    let xhr: any = null
    if (item.method === 'get')
        xhr = instance.get(item.url)
    else if (item.method === 'post')
        xhr = instance.post(item.url)

    const res: AxiosResponse = await xhr
    data = res.data
}
</script>
