# 以Runtime重新认知JavaScript

## JavaScript语言的执行方式
从语言的执行方式划分，我们可以将JavaScript划分为解释型语言，同时我们可以知道，解释型语言的执行需要解释器。通过解释器解释一行代码，执行一行代码。

## JavaScript Engine
Javascript或者更正式的说ECMAScript，仅仅是一种编程语言的规范，任何人都可以编写一个javaScript引擎来解析执行JavaScript代码。

下面是一些JS引擎：
- V8 (Google)
- JavaScriptCore (Apple)
- Chakra (Microsoft)
- SpiderMonkey (Mozilla)

## JavaScirpt Runtime
但是大多数情况下，JavaScript语言不仅仅是在独立的环境中执行，而是需要与一些外部的环境交互，以至于执行有用的程序。

下面是一些JS运行时
- Browser
	- 谷歌浏览器    
	- 火狐浏览器    
	- IE浏览器             
	- Edge浏览器
	- 国产浏览器
- Nodejs 
- Deno
- Bun

## 在Runtime基础上，划分js为两部分
- JS引擎
- 运行时提供的API

js引擎用来解析基本的js语法特性，运行时提供的API用来帮助js实现更多的功能

### Browers
浏览器(以Chrome为例)这个Runtime就可以划分为：
- V8引擎
- Web API(DOM、BOM)

### Nodejs
Nodejs这个Runtime就可以划分为
- V8引擎
- Node API(fs、http、path)

## 在Runtime中执行JS代码
### 启动交互式解释器
#### Browser
1. 右键鼠标，进入审查inspect
2. F12
#### Nodejs
``` shell
node
```

``` javascript
console.log("hello world");
```
#### Deno
``` shell
deno
```

``` javascript
console.log("hello world");
```
#### Bun
貌似没有提供交互式命令解释器

### 执行单个js代码文件
#### Browser
通过HTML的一个标签 script 去引入js文件
``` html
<script src="index.js"></script>
```
#### Nodejs
``` shell
node index.js
```
#### Deno
``` shell
deno run index.js
```
#### Bun
``` shell
bun run index.js
```