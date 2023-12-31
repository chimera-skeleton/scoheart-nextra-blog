# Rendering Patterns

## The 3 Web Applications

### 1. Static Site

zero-server 架构，所有的页面都是「静态的」。在客户端每次请求不同的 url 时候，返回完整的 html 文件（以及其携带的 css、js）。

「静态的」：指所有的「页面」都是预先生成好的完整结构的「html 文件」。

| client                        | server                  |
| ----------------------------- | ----------------------- |
| request (browser network) --> |                         |
|                               | <-- (xxx.html) response |
|                               |                         |
| pasre (\<html>) ......        |                         |
| pasre (\<script>) ......      |                         |
| request (xxx.js) -->          |                         |
|                               | <-- (xxx.js) response   |

### 2. Dynamic Site / Multi Page Application

zero-client 架构，所有的页面都是「动态的」。在客户端每次请求不同的 url 时候，在服务端动态生成 html 文件。

「动态的」：指所有的「页面」都是在每一次客户端请求的时候，由服务端特定于此请求、动态拼接字符串而生成的「html 字符串」

| client                        | server                     |
| ----------------------------- | -------------------------- |
| request (browser network) --> |                            |
|                               | toString (html)            |
|                               | <-- (html string) response |
|                               |                            |
| pasre (\<html>) ......        |                            |
| pasre (\<script>) ......      |                            |
| request (xxx.js) -->          |                            |
|                               | <-- (xxx.js) response      |

### Single Page Application

这种网站是 client-server 架构，最开始接受请求后，服务器返回一个 html 页面，然后通过 javascript 渲染出页面，然后通过浏览器渲染。

### Client side rendering

- 获取一个 只有一个 div 的 html 页面
- 获取js 文件
  - 渲染UI
  - 发送数据请求

## 相关

### 文章

| article            | link                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| Rendering Patterns | https://mburakerman.github.io/blog/web-rendering-patterns                                              |
|                    | https://dev.to/this-is-learning/patterns-for-building-javascript-websites-in-2022-5a93?ref=neonpie.xyz |

### 短语
