// 设定开始时间，结束时间
const schedule = require('node-schedule')

// 开始时间
let startTime = new Date().getTime();
// 结束时间
let endTime = new Date(startTime).getTime() + 10000

schedule.scheduleJob({
  start: startTime,
  end: endTime,
  rule: '*/3 * * * * *'
}, function(executime) {
  console.log('执行时间--》', executime)
})

// 上面表达的意思是，在程序启动后，10就会结束，然后这个执行的规则是 按照rule进行执行的
// 在设定开始时间和结束时间，在这个范围内，回调函数执行多少次，是通过rule去控制的
// 上面是每3秒执行一次回调函数， 所以，10秒内，只会执行3次

// 注意： 如果开始时间和结束时间，传值，不是时间格式，或者错误，这个scheduleJob是不会抛出异常，
// 那么回调回调函数将永远按照rule规则执行下去
