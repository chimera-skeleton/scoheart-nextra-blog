# HTTP Message Format - HTTP 报文格式

> IETF 相关文档

[RFC 7230](https://www.rfc-editor.org/rfc/rfc7230) 已经过时

[RFC 9112](https://www.rfc-editor.org/rfc/rfc9112) 最新

---

HTTP 报文的格式分为四大块：

- 起始行（start-line）
- 头部属性行 (field-line)
- 空行 (empty line)
- 可选的消息体 (message-body)

```
HTTP-message = start-line CRLF
               *( field-line CRLF )
               CRLF
               [ message-body ]
```

同时 HTTP 报文分为请求报文和响应报文，请求报文由客户端发送给服务器，响应报文由服务器发送给客户端。这两种报文通过起始行来区分：

- 请求报文：请求行（request-line）
- 响应报文：状态行（status-line）

```
start-line = request-line / status-line
```

## start-line 起始行

### requset-line 请求行

请求行由三部分组成：

- 方法（method）
- 请求目标（request-target）
- 协议版本（HTTP-version）

```
request-line   = method SP request-target SP HTTP-version
```

例如下面其中的 `GET / HTTP/1.1` 分别表示请求方法为 `GET`，请求目标为 `/`，协议版本为 `HTTP/1.1`。

```http
GET / HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7
Cache-Control: no-cache
Connection: keep-alive
```

### status-line 状态行

状态行由三部分组成：

- 协议版本（HTTP-version）
- 状态码（status-code）
- 原因短语（reason-phrase）

```
status-line = HTTP-version SP status-code SP [ reason-phrase ]
```

例如下面其中的 `HTTP/1.1 200 OK` 分别表示协议版本为 `HTTP/1.1`，状态码为 `200`，原因短语为 `OK`。

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Encoding: gzip
```

## field-line 头部属性行

头部属性行由两部分组成：

- 头部字段名（field-name）
- 头部字段值（field-value）

```
field-line   = field-name ":" OWS field-value OWS
```

例如下面其中的 `Connection: keep-alive` 分别表示头部字段名为 `Connection`，头部字段值为 `keep-alive`。

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Encoding: gzip
```

## empty line 空行

空行表示 HTTP 报文头部属性行的结束，同时空行也是 HTTP 报文消息体的开始。

## message-body 消息体

消息体是可选的，如果 HTTP 报文包含消息体，那么在空行之后就是消息体。

例如下面中的 `Hello World!` 就是消息体。

```http
HTTP/1.1 200 OK
Date: Sun, 31 Dec 2023 19:53:19 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 12

Hello World!
```
