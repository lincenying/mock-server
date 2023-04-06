import { baseApi } from './_api'
import type { requestParams } from './_mock.types'
import { getArray, getTwoArray } from '@/utils'

export default [
    {
        // 左
        url: `/${baseApi}/screen/cover/left`,
        method: 'post',
        response: (request: requestParams) => {
            const query = request?.query
            console.log('query.id :>> ', query.id)
            return {
                code: 200,
                message: 'ok',
                data: {
                    count: ['@integer(10, 100)', '设备总数', true],
                    resourceChartValues: [getArray(7), '资源类型图表值', true],
                    resourceChartXAxis: [['服务器', '存储设备', '网络设备', '安全设备', '机柜'], '资源类型图表X轴', true],
                    bandwidthAvailability: ['@integer(10, 100)', '带宽利用率', false],
                    monitorCoverage: ['@integer(10, 100)', '监控覆盖率', true],
                    bandwidthSize: ['@integer(10, 100)', '带宽总量', false],
                },
            }
        },
    },
    {
        // 右
        url: `/${baseApi}/screen/cover/right`,
        method: 'post',
        response: (_request: requestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    alarmChartValues: [getTwoArray(4, 3), '告警图表值', true],
                    alarmChartXAxis: [['互联网域名', '公共服务平台', '工业互联网与物联网标识', '星火链网'], '告警图表X轴', true],
                    alarmSafetyDeviceCount: ['@integer(10, 100)', '正在告警安全设备数量', false],
                    handledAlarmCount: ['@integer(10, 100)', '已恢复告警', true],
                    monthVariance: ['@integer(10, 100)', '本月告警较上月变化量', true],
                    normalSafetyDeviceCount: ['@integer(10, 100)', '正常运行安全设备数量', false],
                    recoveredAlarmCount: ['@integer(10, 100)', '已恢复告警数量', false],
                    safetyDeviceHealthyRate: ['@float(0, 99, 2, 2)', '安全设备健康度', false],
                    thisMonthAlarmCount: ['@integer(10, 100)', '本月告警', true],
                    thisMonthCompletedTicketCount: ['@integer(10, 100)', '本月已完成工单', true],
                    thisMonthCompletedTicketRate: ['@float(10, 100, 2, 2)', '闭环率', true],
                    thisMonthSuspendTicketCount: ['@integer(10, 100)', '本月待处理工单', true],
                    thisMonthSuspendTicketRate: ['@float(10, 100, 2, 2)', '待处理率', true],
                    thisWeekAlarmCount: ['@integer(10, 100)', '本周告警', true],
                    todayAlarmCount: ['@integer(10, 100)', '今天告警数量', false],
                    todayUnhandledAlarmRate: ['@float(0, 99, 2, 2)', '今日告警数', true],
                    unhandledAlarmCount: ['@integer(10, 100)', '未恢复告警', true],
                    unRecoveredAlarmCount: ['@integer(10, 100)', '未恢复告警数量', false],
                    weekVariance: ['@integer(10, 100)', '本周告警较上周变化量', true],
                },
            }
        },
    },
    {
        // 中
        url: `/${baseApi}/screen/cover/mid`,
        method: 'post',
        response: (_request: requestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    cityInfo: [
                        {
                            shanghai: {
                                ps_count: 0,
                                bandwidth_availability: 0,
                                business: '工业互联网与物联网标识,互联网域名,星火链网',
                                incident_open_time: '2022-09-26 14:29:36',
                                alarm_title: '告警主机:172.21.10.11,告警标题: dmserver进程异常',
                                alarm_level: 1,
                                monitor_object: '172.21.10.11',
                                city_name: '南京',
                                nd_count: 0,
                                cabinet_count: 0,
                                cabinet_availability: 0,
                                sld_count: 0,
                                bandwidth_count: 0,
                                alarm_description: '告警主机:172.21.10.11,告警信息:dmserver进程监控:0',
                                ps_availability: 0,
                                nd_availability: 0,
                                status: 1,
                            },
                            beijing: {
                                business: '互联网域名,工业互联网与物联网标识,星火链网',
                                city_name: '北京',
                                incident_open_time: '2023-02-07 06:23:05',
                                alarm_title: '日志易Agent失联状态监控',
                                ps_count: 0,
                                alarm_description: 'ciName:172.17.10.21已失联518.65小时,status:Running,os:linux,请及时关注。',
                                alarm_level: 2,
                                monitor_object: '172.17.10.21',
                                status: 1,
                            },
                            jinan: {
                                city_name: '济南',
                                ps_count: 0,
                            },
                            liuzhou: {
                                city_name: '柳州',
                                ps_count: 0,
                            },
                            xiamen: {
                                city_name: '厦门',
                                ps_count: 0,
                            },
                        },
                        '各城市信息',
                        true,
                    ],
                    idnPodCount: ['@integer(10, 100)', '互联网域名节点数量', true],
                    scnPodCount: ['@integer(10, 100)', '星火链网节点数量', true],
                    domesticCount: ['@integer(10, 100)', '数据中心分布国内城市数量', true],
                    iolPodCount: ['@integer(10, 100)', '工业互联网与物联网标识节点数量', true],
                },
            }
        },
    },
]
