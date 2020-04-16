// 监控文件变化
const chokidar = require('chokidar')

// 这个库主要是围绕node的以下的API进行封装，达到高效易用
// fs.watch / fs.watchFile / FSEvents

// 为什么不用原生的fs.watch监控文件

/**
 * 1、原生node的fs在MacOS上不会返回文件名
 * 2、在MocOS的编辑器上没有友好提示，不会提示事件名，比如在MacOs的sublime中
 * 3、原生node经常会触发2次事件
 * 4、会触发多次改变，比如文件重命名
 * 5、不提供递归监视文件树的简单方法。
 */

 // 为什么不用 fs.watchFile呢？
 /**
  * 1、事件处理方面做的不好
  * 2、不提供递归监控
  * 3、比较耗CPU
  */

// Chokidar 解决了上面所有的问题
// 这个包被用在很多的生产场景， webpack，PM2, vscode编辑器，gulp,等
//chokidar仅仅使用了 fs.watch和fs.watchFile, 它规范化接收到的事件，通常通过获取文件统计信息和/或目录内容来检查真实性。

chokidar.watch('.').on('all', (event, path)=> {
  console.log(event)
  console.log(path)
})

// 在test 下面将 1.txt改名
// log是下面这样的
/* 
add
test\2222.txt
先添加，新增文件

unlink
test\1.txt
再删除旧文件
 */
