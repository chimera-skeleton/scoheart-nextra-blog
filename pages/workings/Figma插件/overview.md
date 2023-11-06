# 概述
## Figma相关调研
阮一峰前辈的一篇文章中指出，Figma是由Rust编写的WebAssembly，其CTO还开发了新一代的 JavaScript Bundler —— Esbuild

https://www.ruanyifeng.com/blog/2022/09/weekly-issue-224.html

## 实现一个Figma插件
Figma插件主要的实现技术栈就是Web开发三件套
- HTML
- CSS
- JS

Figma对外开放了Plugins的众多API，可以通过JavaScript调用这些API，以实现对Figma画布等方面的一些操作

一些简单的Figma Plugins示例

https://github.com/figma/plugin-samples

## 插件开发工程化解决方案
随着前端项目日益庞大，对于大前端工程化体系中，出现了一系列的工程解决方案：
- 代码规范化工具
- 转译工具
- 任务流构建工具
- 模块化打包工具
- 测试工具
- monorepo工具
- 开发服务器工具 Bundleless Mode……

## D2C
D2C指的是Design To Code设计稿转代码，我们输入的上下文是Figma、Sketch、Photoshop、即使设计等这些UI设计软件的设计稿，输出的是Web网页（HTML、React/Vue）、移动端APP GUI（Android、IOS）、桌面端APP GUI（MacOS、Windows）等。

在我看来D2C的这些产品，从思想层面应该是为业务研发实现工程效率赋能，能让其专注于业务逻辑的实现，摆脱传统开发从UI还原再到业务逻辑实现的繁琐步骤。

### FigmaToCode
调研了一个star数量比较多的 D2C Figma Plugin —— FigmaToCode

https://github.com/bernaferrari/FigmaToCode

其开发技术栈选型以及工程化解决方案大致如下：
- 采用TypeScript语言实现
- React构建Figma Plugin User interface
- eslint + prettier 实现代码格式处理与代码质量审查
- 采用pnpm包管理器处理依赖管理
- pnpm workspace实现monorepo代码仓库管理
- Turborepo实现项目打包与构建
- jest实现代码测试

### Semi Design
字节跳动的抖音前端团队的Semi Design亦有这样的功能

详细情况还在调研中……