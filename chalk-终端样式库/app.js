const chalk = require('chalk')

let log = console.log

log(chalk.red("红色log--字体颜色"))

log(chalk.bgBlue('蓝色背景'))

log(chalk.bold('文字加粗'))

log(chalk.blue('name', 'age', 'job', '传多个参数'))

// ES6 多行文本
log(
  // 多行文本将保留缩进格式
  chalk.blue(`
  name: Rogan
  age: ${25}
  job: ${ 'IT'}
  ES6： 保留换行符
  `)
)

log(chalk.keyword("orange")(' keyword ')) // 关键字
log(chalk.rgb(100, 100, 100)(' rgb ', '可以直接传入rgb颜色值')) // rgb
log(chalk.hex('#ffffff')(' hex ', '也支持传入透明度')) // hex

// 样式组合
log(` colors: ${chalk.blue('blue')}, ${chalk.red('red', "这条log是拼接的颜色")} `) // 拼接


log(chalk.blue.bold("Title，链式调用，设置蓝色和加粗")) // 链式组合

log( chalk.bgYellow(` error: ${chalk.red(" chalk is undefined ， 嵌套使用，外层套背景颜色，内层套文字颜色")} `) ) // 嵌套

log(chalk.red.bold.underline("抱歉，这个api过时了，哈哈哈哈，添加一个删除线"))

// 参考博客  https://www.jianshu.com/p/7093c189a2b5