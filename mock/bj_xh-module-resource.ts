import { baseApi, getTwoArray } from './_api'

export default [
    {
        // 左上左
        url: `/${baseApi}/screen/resource/leftTL`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            console.log('query.businessTag :>> ', query.businessTag)
            console.log('query.resType :>> ', query.resType)
            return {
                code: 200,
                message: 'ok',
                data: {
                    vrChartXAxis: [
                        ['北京', '成都', '重庆', '广州', '济南', '柳州', '南京', '上海', '沈阳', '武汉', '厦门'],
                        '虚拟资源使用率图表（城市维度）X轴',
                        true,
                    ],
                    vrChartValues: [getTwoArray(11, 3), '虚拟资源使用率图表（城市维度）值', true],
                },
            }
        },
    },
    {
        // 左上右
        url: `/${baseApi}/screen/resource/leftTR`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            console.log('query.businessTag :>> ', query.businessTag)
            console.log('query.resType :>> ', query.resType)
            return {
                code: 200,
                message: 'ok',
                data: {
                    vrChartXAxis: [
                        ['北京', '成都', '重庆', '广州', '济南', '柳州', '南京', '上海', '沈阳', '武汉', '厦门'],
                        '虚拟资源使用率图表（城市维度）X轴',
                        true,
                    ],
                    vrChartValues: [getTwoArray(11, 3), '虚拟资源使用率图表（城市维度）值', true],
                },
            }
        },
    },
    {
        // 左下
        url: `/${baseApi}/screen/resource/leftB`,
        method: 'post',
        response: (_request: RequestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    virtualResource: [
                        {
                            count: '@integer(10, 100)',
                            cpu_usage_rate: '@integer(10, 100)',
                            cpu: '@integer(10, 1100)',
                            datastore_usage_rate: '@integer(10, 100)',
                            datastore: ['@integer(10, 1100)', 'TB'],
                            mem_usage_rate: '@integer(10, 100)',
                            memory: ['@integer(10, 11100)', 'TB'],
                            total_cpu: '@integer(10, 10000)',
                            total_datastore: ['@integer(10, 11100)', 'TB'],
                            total_memory: ['@integer(10, 11100)', 'TB'],
                        },
                        '虚拟资源',
                        true,
                    ],
                    physicalResource: [
                        {
                            total_cpu: '@integer(10, 10000)',
                            datastore_usage_rate: '@integer(10, 100)',
                            memory: ['@integer(10, 11100)', 'TB'],
                            total_memory: ['@integer(10, 11100)', 'TB'],
                            datastore: ['@integer(10, 1100)', 'TB'],
                            mem_usage_rate: '@integer(10, 100)',
                            cpu_usage_rate: '@integer(10, 100)',
                            count: '@integer(10, 100)',
                            cpu: '@integer(10, 1100)',
                            total_datastore: ['@integer(10, 11100)', 'TB'],
                        },
                        '物理资源',
                        true,
                    ],
                },
            }
        },
    },
    {
        // 右上左
        url: `/${baseApi}/screen/resource/rightTL`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            console.log('query.businessTag :>> ', query.businessTag)
            return {
                code: 200,
                message: 'ok',
                data: {
                    resourceQoqChartXAxis: [Array.from({ length: 12 }, () => '@date("MM-dd")'), '资源环比图表X轴', true],
                    resourceQoqChartValues: [
                        Array.from({ length: 12 }, () => {
                            return {
                                yhb_memory_usage: '@float(0, 100, 2, 2)',
                                yhb_cpu_usage: '@float(0, 100, 2, 2)',
                                yhb_disk_usage: '@float(0, 100, 2, 2)',
                            }
                        }),
                        '资源环比图表值',
                        true,
                    ],
                },
            }
        },
    },
    {
        // 右上右
        url: `/${baseApi}/screen/resource/rightTR`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            console.log('query.businessTag :>> ', query.businessTag)
            console.log('query.metType :>> ', query.metType)
            return {
                code: 200,
                message: 'ok',
                data: {
                    resourceYoyChartXAxis: [Array.from({ length: 12 }, () => '@date("MM-dd")'), '资源同比图表X轴', true],
                    resourceYoyChartValues: [
                        Array.from({ length: 12 }, () => {
                            return {
                                avg: '@float(0, 100, 2, 2)',
                                ytb: '@float(0, 100, 2, 2)',
                                ytb_avg: '@float(0, 100, 2, 2)',
                            }
                        }),
                        '资源同比图表值',
                        true,
                    ],
                },
            }
        },
    },
    {
        // 右下
        url: `/${baseApi}/screen/resource/rightB`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            console.log('query.resType :>> ', query.resType)
            console.log('query.metType :>> ', query.metType)
            console.log('query.orderSeq :>> ', query.orderSeq)
            return {
                code: 200,
                message: 'ok',
                data: {
                    resourceMetricInfo: [
                        [
                            {
                                avg_value: '@float(0, 100, 2, 2)',
                                monitor_object: '@cword(3, 10)',
                            },
                            {
                                avg_value: '@float(0, 100, 2, 2)',
                                monitor_object: '@cword(3, 10)',
                            },
                            {
                                avg_value: '@float(0, 100, 2, 2)',
                                monitor_object: '@cword(3, 10)',
                            },
                        ],
                        '资源指标总览',
                        true,
                    ],
                },
            }
        },
    },
]
