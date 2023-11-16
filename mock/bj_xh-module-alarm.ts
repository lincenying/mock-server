import { getArray, getArrayObj, getTwoArray } from './_utils'
import { baseApi } from './_api'

function getVal(timeName: string) {
    let val
    if (timeName === 'WEEK')
        val = Array.from({ length: 7 }, () => '@date("MM-dd")')
    else if (timeName === 'MONTH')
        val = Array.from({ length: 30 }, () => '@date("MM-dd")')
    else if (timeName === 'YEAR')
        val = Array.from({ length: 13 }, () => '@date("yyyy-MM")')

    return val
}

type LenType = 'WEEK' | 'MONTH' | 'YEAR'

const len = {
    WEEK: 7,
    MONTH: 30,
    YEAR: 13,
}

export default [
    {
        // 左
        url: `/${baseApi}/screen/alarm/leftLT`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            const timeName = query.timeName || 'WEEK'

            return {
                code: 200,
                message: 'ok',
                data: {
                    alarmChartXAxis: [getVal(timeName), '告警图表X轴', true],
                    alarmChartValues: [getArray(len[timeName as LenType]), '告警图表值', true],
                },
            }
        },
    },
    {
        // 右
        url: `/${baseApi}/screen/alarm/leftLB`,
        method: 'post',
        response: (_request: RequestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    alarmChartXAxis: [
                        [
                            '172.17.10.12',
                            '172.17.10.10',
                            '172.17.10.21',
                            '172.17.10.13',
                            '172.17.4.5',
                            '172.18.18.200',
                            '172.16.12.3',
                            '172.16.12.4',
                            '172.19.3.1',
                            '172.20.3.1',
                        ],
                        '监控对象告警频发TOP10图表X轴',
                        true,
                    ],
                    alarmChartValues: [getArrayObj({
                        area: '@county()',
                        business_tag: '@ctitle(3, 5)',
                        count: '@integer(0, 100)',
                    }, 10), '监控对象告警频发TOP10图表值', true],
                },
            }
        },
    },
    {
        // 中
        url: `/${baseApi}/screen/alarm/mid`,
        method: 'post',
        response: (_request: RequestParams) => {
            const obj = {
                id: '92c93c74acf84503a708c47e53d1ce531676806554307',
                monitorObject: '172.19.5.50',
                alarmLevel: 1,
                alarmTitle: '告警主机:172.19.5.50,告警标题: 7004 端口异常',
                alarmDescription: '告警主机:172.19.5.50,告警信息:自动发现端口 7004:0',
                region: '-',
                status: 1,
                incidentOpenTime: '2023-02-19 19:35:00',
                incidentCloseTime: null,
                deletion: 0,
            }
            return {
                code: 200,
                message: 'ok',
                data: {
                    thisWeekAlarmCount: ['@integer(10, 100)', '本周告警', true],
                    alarmChartXAxis: [['互联网域名', '公共服务平台', '工业互联网与物联网标识', '星火链网'], '告警图表X轴', true],
                    alarmChartValues: [getTwoArray(4, 3), '告警图表值', true],
                    weekVariance: ['@integer(10, 100)', '本周告警较上周变化量', true],
                    thisMonthCompletedTicketRate: ['@float(10, 100, 2, 2)', '闭环率', true],
                    thisMonthSuspendTicketRate: ['@float(10, 100, 2, 2)', '待处理率', true],
                    alarms: [Array.from({ length: 6 }, () => obj), '近30天TOP20告警列表', true],
                    monthVariance: ['@integer(10, 100)', '本月告警较上月变化量', true],
                    thisMonthCompletedTicketCount: ['@integer(10, 100)', '本月已完成工单', true],
                    thisMonthAlarmCount: ['@integer(10, 100)', '本月告警', true],
                    thisMonthSuspendTicketCount: ['@integer(10, 100)', '本月待处理工单', true],
                },
            }
        },
    },
    {
        // 中
        url: `/${baseApi}/screen/alarm/rightLT`,
        method: 'post',
        response: (_request: RequestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    thisMonthProcessingTicketCount: ['@integer(0, 100)', '本月处理中工单数量', true],
                    thisMonthThreeTicketCount: ['@integer(0, 100)', '本月次要工单数量', true],
                    thisMonthCompletedTicketCount: ['@integer(0, 100)', '本月已完成工单数量', true],
                    thisMonthThreeTicketRate: ['@float(10, 100, 2, 2)', '本月次要工单占比', true],
                    thisMonthOneTicketCount: ['@integer(0, 100)', '本月紧急工单数量', true],
                    thisMonthSuspendTicketCount: ['@integer(0, 100)', '本月待处理工单数量', true],
                    thisMonthTwoTicketRate: ['@float(10, 100, 2, 2)', '本月重要工单占比', true],
                    thisMonthOneTicketRate: ['@float(10, 100, 2, 2)', '本月紧急工单占比', true],
                    thisMonthTwoTicketCount: ['@integer(0, 100)', '本月重要工单数量', true],
                },
            }
        },
    },
    {
        // 中
        url: `/${baseApi}/screen/alarm/rightLB`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            const timeName = query.timeName || 'WEEK'
            return {
                code: 200,
                message: 'ok',
                data: {
                    ticketChartValues: [getTwoArray(len[timeName as LenType], 3), '工单解决率趋势图表值', true],
                    ticketChartXAxis: [getVal(timeName), '工单解决率趋势趋势图表X轴', true],
                },
            }
        },
    },
    {
        // 中
        url: `/${baseApi}/screen/alarm/rightRT`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            const timeName = query.timeName || 'WEEK'
            return {
                code: 200,
                message: 'ok',
                data: {
                    ticketChartValues: [getTwoArray(len[timeName as LenType], 2), '工单发生趋势图表值', true],
                    ticketChartXAxis: [getVal(timeName), '工单发生趋势趋势图表X轴', true],
                },
            }
        },
    },
    {
        // 中
        url: `/${baseApi}/screen/alarm/rightRB`,
        method: 'post',
        response: (request: RequestParams) => {
            const query = request?.query
            const timeName = query.timeName || 'WEEK'
            return {
                code: 200,
                message: 'ok',
                data: {
                    ticketChartValues: [getTwoArray(len[timeName as LenType], 2), '工单处理及完成对比图表值', true],
                    ticketChartXAxis: [getVal(timeName), '工单处理及完成对比图表X轴', true],
                },
            }
        },
    },
    {
        // 中
        url: `/${baseApi}/screen/alarm/leftR`,
        method: 'post',
        response: (_request: RequestParams) => {
            return {
                code: 200,
                message: 'ok',
                data: {
                    networkDeviceAlarmCount: ['@integer(10, 100)', '安全设备告警总量', true],
                    businessAlarmChartValues: [getArray(3), '业务告警信息图表值', true],
                    networkDeviceAlarmChartXAxis: [['紧急', '重要', '次要'], '安全设备告警信息图表X轴', true],
                    networkDeviceAlarmChartValues: [getArray(3), '安全设备告警信息图表值', true],
                    businessAlarmCount: ['@integer(10, 100)', '业务告警总量', true],
                    businessAlarmChartXAxis: [['紧急', '重要', '次要'], '业务告警信息图表X轴', true],
                },
            }
        },
    },
]
