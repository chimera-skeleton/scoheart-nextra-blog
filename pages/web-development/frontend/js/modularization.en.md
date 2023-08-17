# JavaScript的模块化开发

## What is javascript module
例如实现一个web的计算器，我们需要划分不同模块
- 主运行模块
- 加法模块
- 减法模块

<hr>

模块化方案的演进过程
## IIFE
> 立即执行函数
## Namespace
> 命名空间

## Closures
> 闭包

## CommonJS
Nodejs这个runtime的横空出世，带来了Nodejs自己的模块化解决方案，CommonJS是一种模块化规范，用于在服务器端和本地环境中实现模块化编程。它主要用于Node.js环境。
- require 模块导入
- module.exports 模块导出

<hr>

> 那么Browser Runtime才是主流的JavaScript Runtime，所以社区形成了一些可行的针对于Browser Runtime的模块化方案

## AMD
> Asynchronous Module Definition 异步模块定义

AMD也是一种模块化规范，用于在浏览器环境中实现异步加载模块。它主要由RequireJS等库来支持。
- RequireJS

## [CMD](https://github.com/cmdjs/specification/blob/master/draft/module.md)
> Common Module Definition 通用模块定义

CMD也是一种模块化规范，类似于AMD，但它更强调按需加载模块。SeaJS是一个支持CMD的库。
- SeaJS

## UMD
> Universal Module Definition 通用模块定义

UMD是一种通用的模块化规范，旨在兼容CommonJS和AMD，并且可以在浏览器和Node.js环境中使用。

## ESM
ECMAScript Modules

ESM是ECMAScript（JavaScript）的官方模块化规范，从ES6/ES2015开始引入。它支持静态导入和导出，并成为JavaScript开发中的主要模块化标准。

### 使用ESM的前提
- script标签上添加一个属性 type 属性值为 module
- 打开HTML文件的时候，不可以使用file

### ESM的使用
一个文件就是一个模块

如何导入一个模块
- import

如何导出模块中的变量、函数……
- export

### 导出方式
named export
```
export var a = 1111

export function fn() {

}

export var obj = {

}

```

default export
在每一个js模块中只能用一次
```
let str = 'scoheart';

export default str;
```

### 导入方式
导入所有的东西
- named export
- default export
```
import * as Module from '......js'
```

导入default
```
import module from '.....js'
```

导入named
```
import {name1, name2} from '.....js'
```


## 总结
用什么样的模块化导出 
在导入的时候就要安装一样的模块化规范导入

### Commonjs
```
module.exports = {

}
```

```
const a = require("")
```

### ESM
```
export default Vue;
```

```
import Vue from "xx.js"
```

### amd\\cmd
```
define()

require()
```
### umd
IIFE + Closures

```
globalThis

globalThis.Vue

console.log(Vue)
```