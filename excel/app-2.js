// 高级模式--配置单元格宽度，自定义主题
const fs = require("fs")
const xlsx = require("node-xlsx")

const data = [
  [1, 2, 3],
  [true, false, undefined, 'sheetjs'],
  ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
  ['baz', null, 'qux']
]

// 配置选项
const option = {
  '!cols':
    [{ wch: 6 },
    { wch: 7 },
    { wch: 10 },
    { wch: 20 }]
};

// 生成文件
const buffer = xlsx.build(
  [
    {
      name: "自定义选项",
      data
    }
  ],
  option);


  // 写文件
fs.writeFile("./dist/2.xlsx", buffer, (err)=> {
  if(err) return

  console.log("文件写入成功")
})