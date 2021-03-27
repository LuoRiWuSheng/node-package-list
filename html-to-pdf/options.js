// 下面的单位没有特别注明，都是在这里进行自行选择 mm, cm, in, px
var options = {
    "directory": "/temp", // 文件输出目录
    "height": "XXX单位",
    width: "XXX单位",
    // 宽高可以不设置，直接设置 formart 就是纸张的大小
    format: "单位有 A3, A4, A5, Legal, Letter, Tabloid" ,
    "orientation": "portrait- 纵向； landscape-横向", // portrait or landscape


    // 关于页面的设置
    border: "0", // 默认为0， 单位同上
    // 要设置边框，就像下面一样设置一个对象
    border: {
        left: "XX",
        right: "XX",
        bottom: "XXX",
        top: "XX"
    },
    // 
    paginationOffset: 1, // 从第几页开始导成pdf，也就是跳页数
    "header": { // 设置页眉
        "height": "45mm",
        "contents": '<div style="text-align: center;">页眉内容</div>'
      },
      "footer": { // 设置页脚
        "height": "28mm",
        "contents": {
          first: 'Cover page', // 页脚的内容是 cover page
          2: 'Second page', // 第二页开始 使用页脚
          default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
          last: 'Last Page'
        }
      },

}

// 更详细的设置页眉 页脚 需要参考 phantomjs 包