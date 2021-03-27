const ora = require('ora')

const sInstance = ora({
  text: '加载中。。。',
  //  loading 样式
  spinner: 'material'
}).start()

setTimeout(() => {
  sInstance.color = 'green'
  sInstance.text = '你好'
  sInstance.spinner = 'earth'

  setTimeout(nextAnimate, 2000);
}, 2000);


function nextAnimate () {
  sInstance.text = 'pong-动画'
  sInstance.spinner = 'pong'

  setTimeout(() => {
    next2()
  }, 2000);
}

function next2 () {
  sInstance.text = 'shark -- 动画'
  sInstance.spinner = 'material'
  sInstance.interval = 200

  setTimeout(() => {
    sInstance.stop()
  }, 2000);
}
