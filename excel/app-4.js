// 修改了 node-xlsx 的包
const nodeXlsx = require('./diy-lib/index');
const fs = require('fs')

function genXlsx (filePath, cols, data) {
  let d = [{
    // 指定excel中的工作簿名称
    name: "Sheet1",
    // 填充的数据，二维数组
    data: [
      // 第一行是表头
      cols,
      ...data
    ]
  }];

  // 根据数据和样式，生成二进制
  var buffer = nodeXlsx.build(d,
    {
      // !cols 指定列的宽度
      '!cols': [{ wch: 60 }, { wch: 20 }]
    }
  )

  // 同步写文件
  var result = fs.writeFileSync(filePath, buffer, { 'flag': 'w' });
  console.log("写文件的结果--》", result)
}

// 参考文件 纯前端利用 js-xlsx 之单元格样式(4) https://blog.csdn.net/weixin_33724046/article/details/89611397

// 指定单元格内容样式：四个方向的黑边框
let contentCellStyle = {
  // 边框
  border: {
    top: {
      style: "medium", color: {
        // 上边框设置为 绿色
        rgb: "FF228B22"
      }
    },
    bottom: {
      style: "medium", color: {
        // 下边框设置为 蓝色
        rgb: "FF0000FF"
      }
    },
    left: {
      style: "medium", color: {
        rgb: "FF0000FF"
      }
    },
    right: {
      style: "medium", color: {
        // 右边框设置为 红色
        rgb: "FFFF0000"
      }
    },
  },
  alignment: {
    horizontal: "center"
  },
  font: {
    // 橙色
    color: { rgb: "FFFF8C00" }
  }
};


// 指定标题单元格样式：加粗居中
let headerStyle = {
  fill: {
    // 设置背景颜色
    fgColor: { rgb: "FFFF69B4" }
  },
  font: {
    // 加粗
    bold: false,
    // 单元格字体颜色
    color: { rgb: "FFFFAA00" }
  },
  // 对齐方式
  alignment: {
    // 水平方向对齐
    horizontal: "center", // left, center, right
  }
}

// 表头数据以及样式
var colData = [
  {
    v: "表头1",
    s: headerStyle
  },
  {
    v: "表头2",
    s: headerStyle
  }
]

// 表格内容数据以及样式
var content = [
  [
    {
      v: 123,
      s: contentCellStyle
    },
    {
      v: 456,
      s: contentCellStyle
    }
  ]
]

genXlsx("./dist/设置表格颜色.xlsx", colData, content)