<template>
    <div flex>
        <div h-100vh p-10px overflow-auto>
            <div v-for="(item, index) in arrUrl" :key="index" flex="~ justify-between" mb-8px>
                <div mr-20px text-13px>{{ item.method }}: {{ item.url }}</div>
                <button btn @click="handleXhr(item)">请求</button>
            </div>
        </div>
        <!-- <pre flex-auto h-100vh overflow-auto ml-20px text-14px b="1px solid #ccc">{{ data }}</pre> -->
        <JsonViewer :value="data" :expanded="true" :expand-depth="4" sort flex-auto h-100vh overflow-auto ml-20px text-14px b="1px solid #ccc" theme="light" />
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { JsonViewer } from 'vue3-json-viewer'

import type { MockMethod } from '@lincy/vite-plugin-mock'
import type { AxiosResponse } from 'axios'

import { mockModules } from './mockProdServer'

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
