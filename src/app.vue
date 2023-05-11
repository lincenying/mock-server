<template>
    <div flex>
        <div h-100vh p-10px overflow-auto>
            <template v-for="(item) in arrUrl" :key="item.file">
                <div mb-10px text-15px text-red font-600>{{ item.file }}</div>
                <div v-for="(sub_item, sub_index) in item.data" :key="sub_index" flex="~ justify-between" mb-4px>
                    <div mr-20px text-13px>{{ sub_item.method }}: {{ sub_item.url }}</div>
                    <button btn @click="handleXhr(sub_item)">请求</button>
                </div>
            </template>
        </div>
        <!-- <pre flex-auto h-100vh overflow-auto ml-20px text-14px b="1px solid #ccc">{{ data }}</pre> -->
        <JsonViewer :value="data || {}" :expanded="true" :expand-depth="5" sort flex-auto h-100vh overflow-auto m="l-20px" text-14px b-l="1px solid #ccc" theme="light" />
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { JsonViewer } from 'vue3-json-viewer'

import type { MockMethod } from '@lincy/vite-plugin-mock'
import type { AxiosResponse } from 'axios'

import { mockModules } from './mockProdServer'
import type { ObjModules } from './types'

const arrUrl = $ref<Array<ObjModules>>(mockModules)

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
