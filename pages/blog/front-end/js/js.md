# 重新认知JavaScript

## 执行方式

解释型语言 --> 解释器

## JS Runtime

- browser
- nodejs
- deno
- bun

## 如何去执行一句代码

- browser

控制台里面直接输入代码

- nodejs

进入到node环境，直接输入代码

## 如何去执行单个js代码文件

- nodejs

``` shell
node index.js
```

- browser

通过HTML的一个标签 script 去引入js文件



## 在Runtime基础上，划分js为三部分

- ECMAscript
- 内置的API
- 外置的APi、外部库



## js module    模块化

分模块开发

实现一个web的计算器

- 加法
- 减法

加法独立成一个模块 减法独立成一个模块

### 原始的模块化开发

通过script标签引入不同模块

- 顺序的问题
- 变量作用域的

### 命名空间

### IIFE 立即执行函数 && 闭包



### 在ES6之前的模块化方案

对于nodejs这个runtime

nodejs 集成了一套自己的模块化解决方案

#### CommonJS

- require
- module.export



还有一个重要的runtime --- browser

社区提供的一些模块化解决方案

#### AMD

#### CMD

#### UMD

umd可以兼容两个runtime

- nodejs
- browser



### ES6开辟了全新的模块化方案

ECMAscript Module









