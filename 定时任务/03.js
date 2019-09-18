/**
 * 通过指定规则，在指定的事件， 执行事件
 */

 const schedule = require('node-schedule')

 // 指定一个规则
 const rule = new schedule.RecurrenceRule()
/**
 * rule: {
    recurs: true,
    year: null,
    month: null,
    date: null,
    dayOfWeek: null,
    hour: null,
    minute: null,
    second: 0
 }
 */
//rule.second = 2;

// 这个规则，可以接收一个数组，表示一个范围, 会在每分钟的0, 4,5,6秒执行
rule.second = [0, new schedule.Range(4, 6)]

// 调用定时接口
schedule.scheduleJob(rule, function(execTime) {
  console.log('查看执行时间', execTime)
})

