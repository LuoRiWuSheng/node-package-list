## html-pdf

>   将html页面转换成pdf文件


```
// 安装
npm install -g html-pdf

// 在项目中使用

const fs = require("fs")
const pdf = require('html-pdf')
const path = require("path")
const html = fs.readFileSync(path.resolve(__dirname, "2.html"), "utf8")
let options = {
    format: "Letter"
}

// 第一种方式
pdf.create(html, options).toFile(path.resolve(__dirname, "build/2.pdf"), (err, res)=> {
    if(err) {
        return console.log(err)
    }

    console.dir(res)
})

// 第二种方式 转换成流
pdf.create(html).toStream((err, stream)=> {
    if(err) {
        return console.log("19--》", err)
    }
    stream.pipe(fs.createWriteStream(`./${new Date().getTime()}-.pdf`))
})

// 将读取的html转换成buffer
pdf.create(html).toBuffer((err, buffer)=> {
    if(err) return console.log("25行-->",err)

    console.log(27, Buffer.isBuffer(buffer));
    fs.writeFileSync("./new-11.txt", Buffer.from(buffer))
})
```

## 配置选项

查看当前目录下的 options.js文件

注意： 配置页眉、页脚、页码的说明需要查看phantomjs 包
[phantomjs](http://amirraminfar.com/phantomjs-node/#/./zh-cn/)

## [Nodejs中利用phantom把html转为pdf或图片格式](https://blog.csdn.net/younglao/article/details/77746039)
