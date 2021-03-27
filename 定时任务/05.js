const schedule = require('node-schedule')

/**
 * 每2秒执行一次
 */
var time = 0;
// schedule.scheduleJob('*/2 * * * * *', function(execTime) {
//   console.log("执行次数",++time, '    --', execTime)
// })


schedule.scheduleJob('1-10/3 * * * * *', function(execTime) {
  console.log("执行次数",++time, '    --', execTime, new Date())
})


// 在范围后面接步长,例如 1-10/2 * * * * *  等价于 2,4,6,8,10 * * * * * 就是间隔2个执行一次,这个在秒这个单位的位置
// 表示，在0-59秒内，只会执行2，4，6，8，10 这几秒，其他时间，不会做任何事情
// */2 表示每2（秒，分，小时，天，周） 执行一次

// 斜杠后面接数字，表示要跳跃的间距  /2 每2个执行一次，  /10 每10为一个单位执行一次
