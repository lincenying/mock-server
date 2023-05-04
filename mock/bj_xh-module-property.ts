import { baseApi, getArray, getTwoArray } from './_api'

export default [
    {
        // 左上左
        url: `/${baseApi}/screen/asset/leftL`,
        method: 'post',
        response: (_request: RequestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    aldChartXAxis: [['1年', '2年', '3年', '4年', '5年以上'], '资产年限分布图表X轴', true],
                    aldChartValues: [getTwoArray(5, 2), '资产年限分布图表值（已分配、未分配）', true],
                    asdChartValues: [getArray(5), '资产状态分布图表值', true],
                    assetCount: ['@integer(10, 100)', '资产总数', true],
                    asdChartXAxis: [
                        ['idling闲置中', 'inusing使用中', 'repairing维修中', 'troubling故障中', 'unenabled未启用'],
                        '资产状态分布图表X轴',
                        true,
                    ],
                },
            }
        },
    },
    {
        // 左上左
        url: `/${baseApi}/screen/asset/leftRT`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            console.log('query.orderSeq :>> ', query.orderSeq)
            return {
                code: 200,
                message: 'ok',
                data: {
                    abdTop5: [
                        Array.from({ length: 5 }, () => ({
                            business_tag: '@ctitle(3, 5)',
                            count: '@integer(10, 100)',
                        })),
                        '资产业务分布TOP5',
                        true,
                    ],
                },
            }
        },
    },
    {
        // 左上左
        url: `/${baseApi}/screen/asset/leftRB`,
        method: 'post',
        response: (_request: RequestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    atdChartValues: [getArray(5), '资产类型分布图表值', true],
                    assetCount: ['@integer(10, 100)', '资产总数', true],
                    atdChartXAxis: [['安全设备', '存储设备', '机柜', '网络设备', '服务器'], '资产类型分布图表X轴', true],
                },
            }
        },
    },
    {
        // 左上左
        url: `/${baseApi}/screen/asset/mid`,
        method: 'post',
        response: (_request: RequestParams) => {
            const arr = ['星火链网', '业务支撑', '公共服务平台', '公共身份核验', '工业互联网与物联网标识', '互联网域名']
            const abd = arr.map((item) => {
                return {
                    using_rate: '@float(10, 100, 2, 2)',
                    bt: item,
                    inusing: '@integer(10, 100)',
                    count: '@integer(10, 100)',
                }
            })
            return {
                code: 200,
                message: 'ok',
                data: {
                    abd: [abd, '6大业务设备使用情况', true],
                    assetCount: [25, '资产总数', true],
                    maintenanceCount: [3, '合同总数', true],
                },
            }
        },
    },
    {
        // 左上左
        url: `/${baseApi}/screen/asset/right`,
        method: 'post',
        response: (_request: RequestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    ama12MChartXAxis: [Array.from({ length: 12 }, () => '@date("yyyy-MM")'), '资产维保到期预警图表X轴', true],
                    amsdChartXAxis: [['租赁类', '运维类', '维保类', '维修类'], '资产维保状态分布图表X轴', true],
                    hrarChartXAxis: [
                        ['repairing_rate维修中', 'unenabled_rate未启用', 'idling_rate闲置中', 'troubling_rate故障中', 'disposed_rate已报废'],
                        '高风险资产占比图表X轴',
                        true,
                    ],
                    amsdChartValues: [
                        Array.from({ length: 4 }, () => ({
                            overduing: '@integer(10, 100)',
                            other: '@integer(10, 100)',
                            servicing: '@integer(10, 100)',
                        })),
                        '资产维保状态分布图表值',
                        true,
                    ],
                    past6YasChartValues: [getArray(6), '过去6年资产新增情况图表值', true],
                    asmChartXAxis: [
                        [
                            'inusing使用中',
                            'repairing维修中',
                            'received已入库',
                            'disposed已下架',
                            'on_shelf上架中',
                            'off_shelf下架中',
                            'changing变更中',
                        ],
                        '资产生命周期管理图表X轴',
                        true,
                    ],
                    past6YasChartXAxis: [[2018, 2019, 2020, 2021, 2022, 2023], '过去6年资产新增情况图表X轴', true],
                    ama12MChartValues: [getTwoArray(12, 2), '资产维保到期预警图表值（当月到期、历史遗留）', true],
                    hrarChartValues: [getArray(5), '高风险资产占比图表值', true],
                    asmChartValues: [getArray(7), '资产生命周期管理图表值', true],
                },
            }
        },
    },
]
