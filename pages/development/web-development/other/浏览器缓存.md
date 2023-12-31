# 浏览器缓存  

## 服务器缓存指令/强制缓存
强制缓存是通过在 HTTP 响应头中设置缓存指令来实现的。服务器可以在响应头中设置 Cache-Control 或 Expires 字段，来告诉浏览器在一段时间内不需要重新请求该资源，而是直接使用缓存中的副本。

### Expires
可以指定缓存的过期时间，但是基本上已经属于一个过时了的字段。

nodejs部分代码演示：
``` js
http.createServer((req, res) => {
    res.setHeader("Expires", new Date(new Date().getTime() + 1000 * 10).toGMTString())
}).listen(3000)
```

这表示十秒之内，再次请求某个文件，则不会向服务器发送网络请求，而是直接从本地的缓存中去找。但是十秒钟之后，再次请求这个文件的话，则会继续向服务器发起请求。

### Cache-Control 字段
- public 表示服务器资源是公开的
- private 表示服务器资源是私有的
- no-cache 告诉客户端可以缓存这个资源，但是不能直接使用，每次都要进行协商缓存
- no-store 不缓存，每次都要重新拿
- max-age 表示最大缓存时间

nodejs部分代码演示：
``` js
http.createServer((req, res) => {
    res.setHeader("Cache-Control", "max-age=10");
}).listen(3000)
```

同上，不过Cache-Control该字段可能会对于老的浏览器有兼容性问题（不过这个兼容性现在看来可以忽略），如果同时存在 Expires和Cache-Control的话，那么Cache-Control的优先级更高。

## 客户端缓存指令/协商缓存
协商缓存是一种更灵活的缓存策略。当浏览器发起请求时，服务器会检查资源是否发生了变化。如果资源没有变化，服务器会返回一个特殊的响应码，告诉浏览器直接使用缓存，这称为“304 Not Modified”响应。

### Last-Modified/If-Modified-Since
这种方式是按照时间来协商的。根据资源的修改时间，来判断是否需要更新资源。

Last-Modified是服务端设置的响应头，表示资源最后更新的时间。

If-Modified-Since是客户端设置的请求头，表示资源的上次获取时间。

nodejs部分代码演示：
``` js
http.createServer((req, res) => {
    const { ctime } = fs.statSync(filename, () => { })
    res.setHeader("Last-Modified", ctime.toGMTString());
}).listen(3000)
```
我们利用fs模块的stat读取资源的修改时间作为Last-Modified字段的值。然后客户端会直接匹配它和If-Modified-Since字段，如果Last-Modified的时间更早，或者等于If-Modified-Since字段，则表示资源没有更新，不需要重新请求，直接从缓存中价值；反之，则表示资源已经更新，需要重新请求。

同时我们还可以让服务端响应304状态码和空响应体，来表示资源不需要更新。
``` js
http.createServer((req, res) => {
    const { ctime } = fs.statSync(filename, () => { })

	if(req.headers["if-modified-since"] == ctime.toGMTString()) {
		return (res.statusCode = 304) && res.end()
	}

    res.setHeader("Last-Modified", ctime.toGMTString());

}).listen(3000)

```
### ETag/If-None-Match
这种方式是按照标识符来协商的。根据资源的唯一标识符，来确定是否需要更新资源。

ETag是是服务端设置的响应头，表示资源状态的唯一标识符，可以利用hash。

If-None-Match是客户端发送的请求头，表示资源期望的唯一标识符是什么。

nodejs部分代码演示：
``` js
http.createServer((req, res) => {
    const hash = require('crypto').createHash('md5').update(content).digest('hex')
    res.setHeader("ETag", hash)
    if(req.headers["if-none-match"] == hash) {
        return (res.statusCode = 304) && res.end()
    }
}).listen(3000)
```
这里利用了crypto模块生成了hash作为ETag字段的值，客户端会匹配ETag和If-None-Match的值，如果相同就无需从新向服务器请求资源，从本地缓存获取；如果不同，就向服务器发送资源请求。

## 工程化与缓存
将打包后的js、css文件名中加入hash值，html不做缓存，但是js、css可以设置很长时间的缓存，而由于项目更新后，js、css的引用文件名的hash发生变化，会使缓存不命中，重新从服务器加载再缓存。

# 同源政策

## JSONP

## CORS