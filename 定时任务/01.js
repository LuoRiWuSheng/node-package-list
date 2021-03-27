/**
 * 通配符语法--定时器
 */
const schedule = require('node-schedule')

/***
 * 秒 分 时 天 月 年
 */
const timeArr = [
  {
    regular: '30 * * * * *',
    desc: '每分钟的第30秒执行'
  },
  {
    regular: '30 1 * * * *',
    desc: '每小时的1分30秒触发'
  },
  {
    regular: '30 1 1 * * *',
    desc: '每天的凌晨1点1分30秒触发',
  },
  {
    regular: '30 1 1 1 * *',
    desc: '每月的1日凌晨1点'
  },
  {
    regular: '30 1 1 1 2016 *',
    desc: '2016年的1月1日1点1分30秒触发'
  },
  {
    regular: '30 1 1 * * 1',
    desc: '每周1的1点1分30秒触发'
  },
  {
    regular: '1-10 * * * * *',
    desc: '每分钟的1-10秒都会触发，其它通配符依次类推'
  }
]

// 每分钟的第30秒执行
var j = schedule.scheduleJob(timeArr[6].regular, function () {
  console.log('定时任务', new Date())
})

// 表达每2秒就调用一次  */2
let j2 = schedule.scheduleJob('*/2 * * * * *', function(fireDate) {
  console.log(`获取触发的时间--- ${fireDate}, 实际时间----${new Date()}`)
})

let d = new Date(2019, 8, 18, 9, 37, 1)
// 如果你想要在  2019-9-18 9： 37：1 执行一件事
// 在js中 0-11 0是1月，所以，上面你要9月做的事，小时应该传入8

let j3 = schedule.scheduleJob(d, function(time) {
  console.log('执行了， 执行时间', time)
})

