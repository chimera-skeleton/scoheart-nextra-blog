Http是无状态的，所以需要 client-side storage

客户端存储 client-side storage
Cookie
Web Storage API
- localStorage
- sessionStorage
IndexedDB
## cookies
cookie内容
- key
- value
- domain
	- 默认设置的域名不会匹配子域  设置了才会匹配子域（端口无关）
- path
	- 会匹配基路径
- expire/max-age
- size
- httpOnly
	- 设置为真后，只用于发送服务器 document.cookie无法访问这个cookie
- secure
	- 具有 Secure 属性的 cookie 仅通过 HTTPS 协议通过加密请求发送到服务器
- sameSite

每次请求都会默认附带所有满足条件的Cookie
- expire/max-age：是否过期

- domain匹配 默认不会匹配子域  设置了才会匹配子域
- path会匹配基路径

- secure：如果为true则必须为 https传输 ，反之，都可以

服务端如何通过相应头设置cookie
``` js
// by koa
ctx.set("set-cookie", "token=11111")
ctx.cookie.set("token", "11111", {
	
})
```

``` js
// by http
const app = http.createServer((req, res) => {
	res.setHeader("set-cookie", "token=1; b=2; c=3")
	res.end("hello")
})
```
## localStorage

## sessionStorage

## IndexedDB

## session

## 加密算法

## jwt
JSON Web Token
https://jwt.io/
### headers

### payload

### signature


## csrf攻击

## xss攻击

