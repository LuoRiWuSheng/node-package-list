const express = require("express")
const app = express()
const router = express.Router()
const cookieParser = require('cookie-parser')
const path = require("path")

app.use(express.static("public"))
// 设置cookie签名
app.use(cookieParser("miyao"))
app.use(router)

// 获取cookie
router.get("/get-cookie", (req, res)=> {
  // {a: "b"}
  // 未加密的签名
  console.log('Cookies: ', req.cookies)
  console.log("获取签名cookie-->",req.signedCookies)

  let {cookies, signedCookies} = req

  res.json({cookies, signedCookies})
})

// 设置cookie
router.get("/set-cookie", (req, res)=> {
  res.cookie("name", "zhangsan", {maxAge: 10000, httpOnly: true})
  res.cookie("age", "22", {maxAge: 10000, httpOnly: true, signed: true})

  res.json(req.cookies)
})

app.listen(3000, ()=> {
  console.log('listen on 3000 port')
})
