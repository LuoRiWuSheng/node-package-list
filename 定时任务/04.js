/***
 * 传入对象格式的日期
 */

const schedule = require('node-schedule')

// 表示每分钟的第2秒就会执行  等价于 * */2 * * * *
const c1 = schedule.scheduleJob({second: 2}, function(execTime) {
  console.log('执行时间---', execTime)
})

// 示例
// {hour: 16, minute: 11, dayOfWeek: 1} 每周的周一，下午4点11分，就触发


// 取消定时器
setTimeout(function() {
  console.log(c1)
  c1.cancel()
},5)