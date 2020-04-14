const xlsx = require("node-xlsx")
const fs = require('fs')

// 解析文件流
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/dist/模版.xlsx`))

// 是一个JSON，里面有表格的数据
console.log(workSheetsFromBuffer)

// 将数据解析出来，我们创建的excel文件，默认有3个工作簿
console.log(workSheetsFromBuffer[0].data)

// 填充数据
// 表格的数据，都是二维结构， 一个数组，就是一行数据
const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ["foo", "bar", new Date(), "0.3"], ['baz', null, 'qux']]
var buffer = xlsx.build([
  {
    // 自定义工作簿的名称
    name: 'mysheetName',
    data
  }
])

// 将流写成文件
fs.writeFile(__dirname+"/dist/1.xlsx", buffer, (err)=> {
  if(err) {
    console.log(err)
    return
  }
  console.log("写入成功")
})