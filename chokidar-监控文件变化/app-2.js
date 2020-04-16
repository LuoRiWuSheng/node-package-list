const chokidar = require('chokidar')

/**
 * event返回的事件名有以下几种
 * 
 * - add        新增文件
 * - unlink     删除文件
 * - change     文件内容更改
 * - addDir     新增文件夹
 * - unlinkDir  删除文件夹
 * - all        指代以上所有事件 除了这几个事件 ready, raw, error
 * 
 * - ready
 * - raw
 * - error
 */

/**
 * 配置选项
 * 
 *  persistent: true, 与原生fs.watch一样,表示是否保护进程不退出持久监听，默认值为true
    ignoreInitial: false, 表示是否对增加文件或者增加文件夹的时候进行发送事件，默认值为false表示add/addDir会触发事件
    ignorePermissionErrors: false,
    interval: 100,
    binaryInterval: 300,
    disableGlobbing: false,
    enableBinaryInterval: true,
    useFsEvents: false,
    usePolling: false, 表示是否使用前面提到的fs.watchFile()进行轮询操作，由于轮询会导致cpu飙升，所以此选项通常在需要通过网络监视文件的时候才设置为true即使用fs.watchFile()，默认值为false
    atomic: true,
    followSymlinks: true,
    awaitWriteFinish: false
    persistent 所要忽略监听的文件或者文件夹
 */

let FSWatcherInstance = chokidar.watch('./test', {
  // 配置选项
  

}).on('all', (event, path)=> {
  console.log("event---",event, "path---", path)
})

console.log(FSWatcherInstance)