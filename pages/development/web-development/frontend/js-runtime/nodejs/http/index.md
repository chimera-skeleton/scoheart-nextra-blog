# http 模块

使用 nodejs 处理 http 请求和响应

## 创建 http 服务器

```js
const http = require('http');
http.createServer((req, res) => {}).listen(8080);
```

## 处理请求报文

### 获取请求报文 start-line (request-line)

```js
const http = require('http');

http
  .createServer(function (req, res) {
    const requestLine = [req.method, req.url, 'HTTP/' + req.httpVersion].join(
      ' '
    );
    console.log(requestLine);
  })
  .listen(8080);
```

### 获取请求报文 field-line

```js
const http = require('http');

http
  .createServer(function (req, res) {
    console.log(req.headers);
  })
  .listen(8080);
```

### 获取请求报文 message-body

#### 基于 readable 事件

```js
const http = require('http');

http
  .createServer(function (req, res) {
    req.on('readable', () => {
      let chunk;
      // 使用循环读取所有可用的数据块
      while ((chunk = req.read()) !== null) {
        console.log(chunk.toString());
      }
    });
  })
  .listen(8080);
```

#### 基于 data 事件

```js
const http = require('http');

http
  .createServer(function (req, res) {
    req.on('data', (chunk) => {
      console.log(chunk.toString());
    });
  })
  .listen(8080);
```

## 创建响应报文

### 创建响应报文 start-line (status-line)

```js
// 方法一
const http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, 'OK');
    res.end();
  })
  .listen(8080);

// 方法二
const http = require('http');

http
  .createServer(function (req, res) {
    res.statusCode = 404;
    res.statusMessage = 'NOT FOUND';
    res.end();
  })
  .listen(8080);
```

### 创建响应报文 field-line

```js
// 方法一
const http = require('http');

http
  .createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end();
  })
  .listen(8080);

// 方法二
const http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
    });
    res.end();
  })
  .listen(8080);

// 方法三
const http = require('http');

http
  .createServer(function (req, res) {
    res.appendHeader('Access-Control-Allow-Origin', '*');
    res.appendHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.end();
  })
  .listen(8080);
```

### 创建响应报文 message-body

#### 流式响应

```js
const http = require('http');

http
  .createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
  })
  .listen(8080);
```

#### 最终响应

```js
const http = require('http');

http
  .createServer(function (req, res) {
    res.end('Hello World!');
  })
  .listen(8080);
```
