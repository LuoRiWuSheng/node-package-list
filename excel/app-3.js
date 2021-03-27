// 单元格合并
const xlsx = require("node-xlsx")
const fs = require("fs")

const data = [
  [1, 2, 3],
  [true, false, null, 'sheetjs'],
  ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
  ['baz', null, 'qux']
];

const range0 = {
  // s表示起始单元格，e表示结束单元格
  s: { c: 0, r: 0 }, // 0,0 是第一个坐标 A1单元格
  e: { c: 0, r: 3 } // 0,3 是结束坐标 A4单元格
}; // A1:A4

const range1 = {
  s: {c: 2, r: 2}, // C3单元格
  e: {c: 2, r: 7} // C6单元格
}

// 要合并几个，这里的数组，就配置几个， 合并后的单元格，值采用 起始单元格的值
// range0采用A1, 
// range1 取C3的值
const options = { '!merges': [range0, range1] };


var buffer = xlsx.build([{ name: "mySheetName", data: data }], options);

// 写文件
fs.writeFile("./dist/3.xlsx", buffer, (err) => {
  if (err) return

  console.log("文件写入成功")
})