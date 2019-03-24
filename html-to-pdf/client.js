const fs = require("fs")
const pdf = require('html-pdf')
const path = require("path")
const html = fs.readFileSync(path.resolve(__dirname, "22.png"), "utf8")
let options = {
    format: "Letter",
    "header": {
        "height": "45mm",
        "contents": '<div style="text-align: center;">页眉</div>'
    },
    "footer": {
        "height": "28mm",
        "contents": {
            first: '封面', // 页脚名字  封面
            2: 'Second page', // Any page number is working. 1-based index
            "contents": '<span style="color: #444;">第{{page}}</span>/<span>{{pages}}页</span>',
            //default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}页</span>', // fallback value
            last: '最后一页'
        }
    },
    "type": "png",
    "quality": "80"
}

pdf.create(html, options).toFile(path.resolve(__dirname, "build/2.pdf"), (err, res) => {
    if (err) {
        return console.log(err)
    }

    console.dir(res)
})

pdf.create(html).toStream((err, stream) => {
    if (err) {
        return console.log("19--》", err)
    }
    stream.pipe(fs.createWriteStream(`./${new Date().getTime()}-.pdf`))
})

pdf.create(html).toBuffer((err, buffer) => {
    if (err) return console.log("25行-->", err)

    console.log(27, Buffer.isBuffer(buffer));
    fs.writeFileSync("./new-11.txt", Buffer.from(buffer))
})