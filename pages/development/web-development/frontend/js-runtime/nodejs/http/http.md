# http 模块

使用 nodejs 处理 http 请求和响应

## 创建 HTTP 服务器

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

## 总览

见微知著，其实不管是前端传递数据，还是后端接收数据，如果基于 HTTP 协议那么都只有三个地方

- start-line
- field-line
- message-body

### 与 start-line 相关的数据

这部分数据传递通常被人们划分为两种

- 查询参数 query parameters
- 路径参数 path parameters

### 与 field-line 相关的数据

这部分携带在请求头中，通常只是头信息，不做数据传递

### 与 message-body 相关的数据

这部分数据都是基于 MIME type 进行传递的，比如常见的

- application/json
- multipart/form-data
- multipart/x-www-form-urlencoded

下面的测试都用传递一个人的个人信息的数据测试

```
# 将下面这个人的个人信息通过不同的MIME type传递测试
Person
- name “shuhao”
- age 23
```

#### 解析 applicaiton/json

```js
const http = require('http');

http
  .createServer((req, res) => {
    req.on('data', (chunk) => {
      console.log(JSON.parse(chunk.toString()));
    });
    res.end();
  })
  .listen(8080);

// 输出： { name: 'shuhao', age: 23 }
```

#### 解析 multipart/form-data

原生处理较为复杂，建议借助第三方库处理，这里不做具体代码演示：可用的第三方库有

- formidable
- multer
- busboy

#### 解析 multipart/x-www-form-urlencoded

```js
const http = require('http');
const querystring = require('querystring');
http
  .createServer((req, res) => {
    req.on('data', (chunk) => {
      console.log(parseFormURLlencoded(chunk.toString()));
    });
    res.end();
  })
  .listen(8080);

function parseFormURLlencoded(data) {
  return querystring.parse(data);
}

// 输出： [Object: null prototype] { name: 'shuhao', age: '23' }
```
