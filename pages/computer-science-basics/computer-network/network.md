# 网络概述
## 什么是网络
网络 = 结点 + 链路 就是说网络由节点和链路组成

### 结点 Node
- 交换机、路由器、主机等网络设备

### 链路 Link
- 网线、光纤等传输媒体

## 互连网 internet
互联网就是一个个的网络互联在一起，也叫做网络的网络。
Network of Networks

## 因特网 Internet
最大的互联网

## 万维网 World Wide Web
因特网中的一项服务

万维网（World Wide Web），通常简称为Web，是互联网上的一种信息服务系统。它由一系列互联的超文本文档（HyperText Documents）组成，这些文档通过互联网上的超文本链接（HyperLinks）相互关联，形成了一个庞大的全球信息网络。

### 统一资源定位符 URL
URL是Uniform Resource Locator（统一资源定位符）的缩写，它是用于标识和定位互联网上资源（如网页、图片、视频等）的地址。URL由多个部分组成，包括协议（例如HTTP、HTTPS、FTP等）、主机名（域名或IP地址）、端口号（可选）、路径、查询参数和片段标识等。URL是在浏览器中输入或点击的地址，使用户可以访问和定位特定的资源。

``` https
https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#section1
```

其中，`https`是协议，`www.example.com`是主机名，`8080`是端口号，`/path/to/resource`是资源的路径，`param1=value1&param2=value2`是查询参数，`section1`是片段标识。

### 超文本标记语言 HTML
HTML是HyperText Markup Language（超文本标记语言）的缩写，是一种用于创建网页的标记语言。HTML使用标记（标签）来描述网页的结构和内容，包括标题、段落、列表、链接、图像等。网页浏览器解析HTML代码并将其呈现为用户可视的网页。HTML是互联网上网页的基础构建块，它和CSS（层叠样式表）一起被用于实现网页的外观和布局。

``` html
<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

### 超文本传输协议 HTTP
HTTP是HyperText Transfer Protocol（超文本传输协议）的缩写，是用于在计算机网络上传输超文本和其他资源的协议。HTTP是客户端-服务器协议，客户端（通常是Web浏览器）向服务器发送HTTP请求，服务器返回HTTP响应。它是构建在TCP/IP协议之上的应用层协议，用于在互联网上传输网页、图像、视频、文件等资源。

