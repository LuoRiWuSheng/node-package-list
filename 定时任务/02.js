const schedule = require('node-schedule')


// 在未来某个时间使用当前的数据
var a = 'today'
var d2 = new Date(2019, 8, 18, 10,25,1)

var j4 = schedule.scheduleJob(d2, function(y, execTime) {
  console.log(a)

  // 通过bind， 我们将之前的a的值拿到了，在回调函数中，可以获取到 传入的值（旧值）
  // 第二个参数就是执行时间
  console.log(y)
  console.log(execTime)
  // 执行完以后，这段程序就退出了，说明这种是一次性的，只会执行一次，应该跟传入的日期是有关的，仅仅执行一次
}.bind(null, a))
a = '改变后的值'