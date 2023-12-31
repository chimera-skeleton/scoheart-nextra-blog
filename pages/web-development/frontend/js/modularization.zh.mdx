import { FileTree } from 'nextra/components';

# JavaScript 的模块化开发

## What is javascript module

例如实现一个 web 的计算器，我们需要划分不同模块

- 主运行模块
- 加法模块
- 减法模块

---

> **_模块化方案的演进过程如下_**

## IIFE

> immediately invoked function expression --> 立即执行函数

### 什么是立即执行函数？

```js
// 1
(function () {
  console.log('I am a IIFE');
})()(
  // 2
  (function () {
    console.log('I am a IIFE');
  })()
);

// 3
~(function () {
  console.log('I am a IIFE');
})();
```

## Namespace

> 命名空间

## Closures

> 闭包

## CommonJS

Nodejs 这个 runtime 的横空出世，带来了 Nodejs 自己的模块化解决方案，CommonJS 是一种模块化规范，用于在服务器端和本地环境中实现模块化编程。它主要用于 Node.js 环境。

<FileTree>
  <FileTree.Folder name="src" defaultOpen>
    <FileTree.File name="mian.js" />
    <FileTree.File name="module1.js" />
    <FileTree.Folder name="nested" defaultOpen>
      <FileTree.File name="module2.js" />
    </FileTree.Folder>
  </FileTree.Folder>
  <FileTree.Folder name="lib" defaultOpen>
    <FileTree.File name="module3.js" />
  </FileTree.Folder>
</FileTree>

### 导入模块

在`commonjs`中，导入一个模块需要使用`require`函数

```js
// src/main.js
const m1 = require('./module1');
const m2 = require('./nested/module2');
const lib = require('../lib/module3');
```

### 导出模块

在`commonjs`中，导出一个模块需要使用`module.exports`或者`exports`对象

```js
// src/module1.js
module.exports = {
  name: 'module1',
  age: 12,
};
```

```js
// src/nested/module2.js
exports.name = 'module2';
exports.age = 22;
```

```js
// lib/module3.js
module.exports.name = 'module3';
module.exports.age = 18;
```

### 原理解析

`commonjs`的实现原理大致符合下面的代码逻辑

```js
(function (module) {
  module.exports = {};
  var exports = module.exports;
  // ........

  return module.exports;
})();
```

所以在导出的时候，如果使用不规范，则可能会发生一些错误，下面是不规范的用例

1. 直接将`exports`赋值为一个对象
2. 将`module.exports`赋值为一个新对象后，还使用`exports.xxx`或者`module.exports.xxx`添加内容

### 拓展

#### 原理联想

那么同时，其实这个原理解析也可以通过 java 中的栈内存，和堆内存的内存图来解释，当然只是类比，具体能否适用，还得需要知道 js 的内存环境

#### commonjs 特征

- 每次加载模块之前都会运行该代码
- 多处用到同样的模块，不会重复加载，有缓存机制
- 同步加载，必须要根据路径加载完文件且执行完毕文件中的代码才完成导入，再执行后面的代码。在服务端 nodejs 环境中从磁盘读取文件速度快，但是如果在浏览器环境中是不适用的，因为浏览器需要发起请求，从服务器中请求 js 文件，而如果这种大量的请求操作都是同步执行的话，会严重影响网页交互体验。所以需要异步的方式。

---

> **_那么 Browser Runtime 才是主流的 JavaScript Runtime，所以社区形成了一些可行的针对于 Browser Runtime 的模块化方案，他们都遵循下面两点_**

- 异步加载
- 模块代码直接放在函数中

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。

CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

上述两种规范是服务于 JavaScript 的模块化开发，目前两种都能实现浏览器端的模块化开发的目的，不同之处是 CMD 是懒执行,AMD 是预执行。
区别：

对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.

CMD 推崇依赖就近，AMD 推崇依赖前置。

## AMD

> Asynchronous Module Definition 异步模块定义

AMD 也是一种模块化规范，用于在浏览器环境中实现异步加载模块。它主要由 RequireJS 等库来支持。

- RequireJS

```js
define(['a'], function (a) {
  function fn() {
    a();
  }

  return {
    fn: fn,
  };
});
```

## [CMD](https://github.com/cmdjs/specification/blob/master/draft/module.md)

> Common Module Definition 公共模块定义

CMD 也是一种模块化规范，类似于 AMD，但它更强调按需加载模块。SeaJS 是一个支持 CMD 的库。

- SeaJS

## UMD

> Universal Module Definition 通用模块定义

UMD 是一种通用的模块化规范，旨在兼容 CommonJS 和 AMD，并且可以在浏览器和 Node.js 环境中使用。

## ESM

ECMAScript Modules

ESM 是 ECMAScript（JavaScript）的官方模块化规范，从 ES6/ES2015 开始引入。它支持静态导入和导出，并成为 JavaScript 开发中的主要模块化标准。

### 使用 ESM 的前提

- script 标签上添加一个属性 type 属性值为 module
- 打开 HTML 文件的时候，不可以使用 file

### ESM 的使用

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
在每一个 js 模块中只能用一次

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

导入 default

```
import module from '.....js'
```

导入 named

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
