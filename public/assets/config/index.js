var config = {}

// ↓↓↓↓↓以下数据可改↓↓↓↓↓

// 本页面配置修改后, 需要刷新浏览器才能生效

// 定时刷新时间(单位: 秒)
// 刷新时间必须配置配置为数值型, 设置为0或不为数值型时将关闭定时刷新
config.timer = {
    // 封面
    index: 0,
    // 首页
    situation: 0,
    // 告警处理场景总览
    alarm: 0,
    // 资源管理总体态势分析
    resource: 0,
    // 资产管理总体态势趋势
    property: 0,
}
// 封面标题
config.indexTitle = '自定义封面标题'
// 首页标题
config.homeTitle = '自定义首页标题'
// 首页-安全监控跳转链接
config.safetyUrl = 'https://www.baidu.com/'
/*
 * 不使用配置数据时, 请将该行数据用"//"注释
 */
// ======== 资源总览 ========
config.count = 2300 // 设备总数
config.bandwidthCount = 1000 // 宽带总览
config.monitorRate = 68 // 监控覆盖率
config.bandwidthUseRate = 33 // 宽带利用率

// ======== 资源类型 ========
config.resourceChartXAxis = '服务器1|服务器2|服务器3' // 柱状图X轴文字, 多个数据中间用竖线隔开, 个数必须和下面的Y轴数据数量一直
config.resourceChartValues = '123|234|345' // 柱状图Y轴数据, 多个数据用竖线隔开, 个数必须和上面的X轴文字数量一直

// ======== 安防状态 ========
// 安全设备健康度
config.value7 = 0.5 // 水球百分比, 用小数的形式表示
config.normalSafetyDeviceCount = 2000 // 正常运行数量
config.alarmSafetyDeviceCount = 25 // 正在告警数量
// 今日告警数
config.value10 = 0.5 // 水球百分比, 用小数的形式表示
config.unRecoveredAlarmCount = 2000 // 未恢复告警数量
config.recoveredAlarmCount = 25 // 已恢复告警数量

// ↑↑↑↑↑以上数据可改↑↑↑↑↑

window.config = config
