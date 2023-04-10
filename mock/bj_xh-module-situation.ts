import { baseApi, getArray, getTwoArray } from './_api'
import type { requestParams } from './_mock.types'

export default [
    {
        // 左左
        url: `/${baseApi}/screen/home/leftL`,
        method: 'post',
        response: (request: requestParams) => {
            const query = request?.query
            console.log('query.id :>> ', query.id)
            return {
                code: 200,
                message: 'ok',
                data: {
                    acChartValues: [getTwoArray(11, 2), '告警图表（城市维度）值', true],
                    ticketInfo: [
                        {
                            request: {
                                unclosed: 0,
                                closed: 0,
                                closed_rate: '0.00',
                                value: '服务请求',
                            },
                            problem: {
                                unclosed: 0,
                                closed: 3,
                                closed_rate: '100.00',
                                value: '问题流程',
                            },
                            flow: {
                                unclosed: 0,
                                closed: 6,
                                closed_rate: '100.00',
                                value: '配置管理流程',
                            },
                            change: {
                                unclosed: 0,
                                closed: 10,
                                closed_rate: '100.00',
                                value: '变更管理',
                            },
                        },
                        '工单处理情况信息',
                        true,
                    ],
                    acChartXAxis: [
                        ['上海', '北京', '南京', '厦门', '广州', '成都', '柳州', '武汉', '沈阳', '济南', '重庆'],
                        '告警图表（城市维度）X轴',
                        true,
                    ],
                    abChartXAxis: [['互联网域名', '公共服务平台', '工业互联网与物联网标识', '星火链网'], '告警图表（业务维度）X轴', true],
                    abChartValues: [getTwoArray(4, 2), '告警图表（业务维度）值', true],
                },
            }
        },
    },
    {
        // 中间
        url: `/${baseApi}/screen/home/mid`,
        method: 'post',
        response: (_request: requestParams) => {
            const cityEnName
                = 'nanjing,riben,guangzhou,chengdu,beijing,chongqing,meiguo,nanfei,shenyang,wuhan,helan,shanghai,jinan,liuzhou,xiamen,baxi'.split(',')
            const cityCnName = '南京,日本,广州,成都,北京,重庆,美国,南非,沈阳,武汉,荷兰,上海,济南,柳州,厦门,巴西'.split(',')
            const baseObj = {
                ps_count: '@integer(10, 100)',
                fcv_count: '@integer(10, 100)',
                bandwidth_availability: '@float(10, 100, 2, 2)',
                cabinet_count: '@integer(10, 100)',
                fcv_availability: '@float(10, 100, 2, 2)',
                storage_count: '@integer(10, 100)',
                cabinet_availability: '@float(10, 100, 2, 2)',
                bandwidth_count: '@integer(10, 100)',
                ps_availability: '@float(10, 100, 2, 2)',
                business: '工业互联网与物联网标识,互联网域名,公共服务平台,星火链网',
            }
            const warnObj = {
                incident_open_time: '2023-02-23 16:44:39',
                alarm_title: '告警主机:172.17.14.5,告警标题: java进程异常',
                alarm_level: 1,
                alarm_description: '告警主机:172.17.14.5,告警信息:java进程监控:0',
            }
            const obj: Record<string, any> = {}
            cityEnName.forEach((item, index) => {
                let tmp = {
                    ...baseObj,
                    city_name: cityCnName[index],
                }
                if (index % 2 === 0) {
                    tmp = {
                        ...tmp,
                        ...warnObj,
                    }
                }
                obj[item] = tmp
            })
            return {
                code: 200,
                message: 'ok',
                data: {
                    pspPodCount: ['@integer(10, 100)', '公共服务平台节点数量', true],
                    monitoringCoverage: ['@float(0, 0, 2, 2)', '监控覆盖率', false],
                    bandwidth_availability: ['@float(0, 0, 2, 2)', '带宽利用率', false],
                    idnPodCount: ['@integer(10, 100)', '互联网域名节点数量', true],
                    bandwidth_count: ['@integer(10, 100)', '带宽总量', false],
                    domesticCount: ['@integer(10, 100)', '数据中心分布国内城市数量', true],
                    count: ['@integer(10, 100)', '设备总数', true],
                    abroadCount: ['@integer(10, 100)', '数据中心分布国外国家数量', true],
                    cityInfo: [obj, '各城市信息', true],
                    scnPodCount: ['@integer(10, 100)', '星火链网节点数量', true],
                    iolPodCount: ['@integer(10, 100)', '工业互联网与物联网标识节点数量', true],
                },
            }
        },
    },
    {
        // 中间
        url: `/${baseApi}/screen/home/leftR`,
        method: 'post',
        response: (_request: requestParams) => {
            const citys = ['all', 'beijing', 'shanghai', 'guangzhou', 'shenzhen', 'shenyang', 'chengdu', 'wuhan', 'nanjing']
            const citysObj: Record<string, any> = {}
            citys.forEach((item) => {
                citysObj[item] = {
                    vpn: '@integer(10, 100)',
                    fw: '@integer(10, 100)',
                    ids: '@integer(10, 100)',
                    count: '@integer(10, 100)',
                    alarm_ids: '@integer(10, 100)',
                    alarm_fw: '@integer(10, 100)',
                    value: '区域',
                    alarm_vpn: '@integer(10, 100)',
                }
            })
            return {
                code: 200,
                message: 'ok',
                data: {
                    normalSafeDeviceCount: ['@integer(10, 100)', '正常运行安全设备数量', true],
                    shChartValues: [getTwoArray(8, 3), '安全设备健康度图表（城市维度）值', false],
                    alarmSafeDeviceCount: ['@integer(10, 100)', '正在告警安全设备数量', true],
                    todaySafeDeviceAlarmCount: ['@integer(10, 100)', '今日安全设备告警数量', true],
                    todayHandledSafeDeviceAlarmCount: ['@integer(10, 100)', '今日安全设备已恢复告警数量', true],
                    todayUnhandledSafeDeviceAlarmCount: ['@integer(10, 100)', '今日安全设备未恢复告警数量', true],
                    safeDeviceHealth: ['@float(10, 100, 2, 2)', '主机健康度', false],
                    citySafeDeviceInfo: [citysObj, '各城市安全设备信息', true],
                    shChartXAxis: [['南京', '北京', '广州', '上海', '沈阳', '成都', '武汉', '四川'], '安全设备健康度图表（城市维度）X轴', false],
                },
            }
        },
    },
    {
        // 中间
        url: `/${baseApi}/screen/home/rightRTB`,
        method: 'post',
        response: (_request: requestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    btrChartValues: [getTwoArray(4, 3), '业务资源使用情况图表（业务维度）值（%）', true],
                    btrChartXAxis: [['星火链网', '公共服务平台', '互联网域名', '工业互联网与物联网标识'], '业务资源使用情况图表（业务维度）X轴', true],
                    cpu: ['@integer(1000, 9999)', 'CPU使用量', true],
                    cpuUsage: ['@float(10, 100, 2, 2)', 'CPU分配率（%）', true],
                    memory: [['@integer(1000, 9999)', 'GB'], '内存使用量', true],
                    memoryUsage: ['@float(10, 100, 2, 2)', '内存分配率（%）', true],
                    storage: [['@float(10, 100, 2, 2)', 'TB'], '存储使用量', true],
                    storageUsage: ['@float(10, 100, 2, 2)', '存储分配率（%）', true],
                    totalCpu: ['@integer(1000, 9999)', 'CPU总量', true],
                    totalMemory: [['@integer(1000, 9999)', 'TB'], '内存总量', true],
                    totalStorage: [['@integer(1000, 9999)', 'TB'], '存储总量', true],
                },
            }
        },
    },
    {
        // 中间
        url: `/${baseApi}/screen/home/rightRM`,
        method: 'post',
        response: (_request: requestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    resourceOfEarthTop3: [
                        [
                            {
                                cpu: '@integer(1000, 9999)',
                                memory: '@integer(1000, 9999)',
                                storage: '@integer(1000, 9999)',
                                totalCpu: '@integer(1000, 9999)',
                                totalMemory: '@integer(1000, 9999)',
                                totalStorage: '@integer(1000, 9999)',
                                usage: '@float(10, 100, 2, 2)',
                                nick_value: 'beijing',
                                value: '北京',
                            },
                            {
                                cpu: '@integer(1000, 9999)',
                                memory: '@integer(1000, 9999)',
                                storage: '@integer(1000, 9999)',
                                totalCpu: '@integer(1000, 9999)',
                                totalMemory: '@integer(1000, 9999)',
                                totalStorage: '@integer(1000, 9999)',
                                usage: '@float(10, 100, 2, 2)',
                                nick_value: 'wuhan',
                                value: '武汉',
                            },
                            {
                                cpu: '@integer(1000, 9999)',
                                memory: '@integer(1000, 9999)',
                                storage: '@integer(1000, 9999)',
                                totalCpu: '@integer(1000, 9999)',
                                totalMemory: '@integer(1000, 9999)',
                                totalStorage: '@integer(1000, 9999)',
                                usage: '@float(10, 100, 2, 2)',
                                nick_value: 'nanjing',
                                value: '南京',
                            },
                        ],
                        '区域资源使用排行',
                        true,
                    ],
                },
            }
        },
    },
    {
        // 中间
        url: `/${baseApi}/screen/home/rightL`,
        method: 'post',
        response: (_request: requestParams) => {
            const data = Array.from({ length: 9 }, () => {
                return ['服务器', '网络安全设备', '机柜', '存储及光纤', '带宽资源'].map((item) => {
                    return {
                        t: item,
                        inusing: '@integer(10, 99)',
                        troubling_rate: '@float(10, 100, 2, 2)',
                        count: '@integer(10, 99)',
                        inusing_rate: '@float(10, 100, 2, 2)',
                        troubling: '@integer(10, 99)',
                    }
                })
            })
            return {
                code: 200,
                message: 'ok',
                data: {
                    aursOfAreaChartXAxis: [
                        ['成都', '广州', '上海', '沈阳', '四川', '重庆', '武汉', '北京', '南京'],
                        '资产使用率/故障率（区域维度）图表X轴',
                        true,
                    ],
                    aursOfAreaChartValues: [data, '资产使用率/故障率（区域维度）图表值', true],
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
                    asmChartValues: [getArray(7), '资产生命周期管理图表值', true],
                },
            }
        },
    },
]
