# 以 Runtime 重新认知 JavaScript

## JavaScript 语言的执行方式

从语言的执行方式划分，我们可以将 JavaScript 划分为解释型语言，同时我们可以知道，解释型语言的执行需要解释器。通过解释器解释一行代码，执行一行代码。

## JavaScript Engine

Javascript 或者更正式的说 ECMAScript，仅仅是一种编程语言的规范，任何人都可以编写一个 javaScript 引擎来解析执行 JavaScript 代码。

下面是一些 JS 引擎：

- V8 (Google)
- JavaScriptCore (Apple)
- Chakra (Microsoft)
- SpiderMonkey (Mozilla)
- Hermes (Facebook)
- ……

## 编译构建一个 JS 引擎（Hermes 举例）

# Hermes 引擎

Hermes 是一个 Javascript 引擎，由 Facebook 开发，目前 Facebook 正在使用 Hermes 作为 React Native 的 Javascript 引擎。

## install

安装必要的依赖包

```shell
#centos/redhat
yum install cmake git ninja-build libicu-devel python zip readline-devel

#ubuntu/debian
apt install cmake git ninja-build libicu-dev python zip readline-devel

#archlinux
pacman -S cmake git ninja icu python zip readline

#macos
brew install cmake git ninja
```

## 克隆项目

```shell
git clone https://github.com/facebook/hermes.git
```

## 编译构建

- -S 指定源目录
- -B 指定构建目录
- -G 指定构建工具
- -DCMAKE_BUILD_TYPE=Release 指定构建类型

### 调试版本

```shell
cmake -S hermes -B build -G Ninja
cmake --build ./build
```

### 生产版本

```shell
cmake -S hermes -B build_release -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build ./build_release
```

## 运行

```shell
# 开启REPL
./build/bin/hermes

>> var a = 1; var b = 2; var c = a + b;
undefined
>> c;
3

#运行文件
./build/bin/hermes test.js

```

## JavaScirpt Runtime

但是大多数情况下，JavaScript 语言不仅仅是在独立的环境中执行，而是需要与一些外部的环境交互，以至于执行有用的程序。

下面是一些 JS 运行时

- Browser
  - 谷歌浏览器
  - 火狐浏览器
  - IE 浏览器
  - Edge 浏览器
  - 国产浏览器
- Nodejs
- Deno
- Bun
- ……

## 在 Runtime 基础上，划分 js 为两部分

- JS Engine
- Runtime 自身集成的 API

js 引擎用来解析基本的 js 语法特性，运行时提供的 API 用来帮助 js 实现更多的功能

### Browers

浏览器(以 Chrome 为例)这个 Runtime 就可以划分为：

- V8 引擎
- Web API(DOM、BOM)

### Nodejs

Nodejs 这个 Runtime 就可以划分为

- V8 引擎
- Node API(fs、http、path)

## 在 Runtime 中执行 JS 代码

### 启动交互式解释器 REPL

#### Browser

1. 右键鼠标，进入审查 inspect
2. F12

```javascript
>> console.log("hello world");
undefined
```

#### Nodejs

```shell
node
```

```javascript
>> console.log("hello world");
undefined
```

#### Deno

```shell
deno
```

```javascript
>> console.log("hello world");
undefined
```

#### Bun

需要下载交互式命令解释器

```shell
# install
bun repl

# start up
bun
```

```javascript
>> console.log("hello world");
undefined
```

### 执行单个 js 代码文件

#### Browser

通过 HTML 的一个标签 script 去引入 js 文件

```html
<script src="index.js"></script>
```

#### Nodejs

```shell
node index.js
```

#### Deno

```shell
deno run index.js
```

#### Bun

```shell
bun run index.js
```
