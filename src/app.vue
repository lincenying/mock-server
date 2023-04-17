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
import { mockModules } from './mockProdServer';
import { MockMethod } from 'vite-plugin-mock';

const arrUrl = $ref<Array<MockMethod>>(mockModules)

let data = $ref()

const instance = axios.create({
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
})

async function handleXhr(item: MockMethod) {
    let xhr: any = null
    if (item.method === 'get')
        xhr = instance.get(item.url)
    else if (item.method === 'post')
        xhr = instance.post(item.url)

    const res: AxiosResponse = await xhr
    data = res.data
}
</script>
