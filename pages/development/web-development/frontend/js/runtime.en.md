# 以Runtime重新认知JavaScript

## JavaScript语言的执行方式
解释型语言 --> 解释器

## JS Runtime 运行环境 解释器
- Browser
	- 谷歌浏览器    V8
	- 火狐浏览器    SpiderMonkey
	- IE浏览器             
	- Edge浏览器
	- 国产浏览器
- Nodejs 
	- V8
- Deno
- Bun

## 启动交互式解释器
### Browser
1. 右键鼠标，进入审查inspect
2. F12
### Nodejs
``` shell
node
```

``` javascript

console.log("hello world");
```
### Deno
``` shell
deno
```

``` javascript
console.log("hello world");
```
### Bun
貌似没有提供交互式命令解释器

## 执行单个js代码文件
### Browser
通过HTML的一个标签 script 去引入js文件
``` html
<script src="index.js"></script>
```
### Nodejs
``` shell
node index.js
```
### Deno
``` shell
deno run index.js
```
### Bun
``` shell
bun run index.js
```

## 在Runtime基础上，划分js为三部分
- ECMAscript
- 运行环境提供的API
	- Browser APIs
		- DOM API
		- BOM API
	- Nodejs APIs
		- fs模块
		- http模块
		- path模块
- 外部的第三方库
	- axios
	- lodash
	- jquery


