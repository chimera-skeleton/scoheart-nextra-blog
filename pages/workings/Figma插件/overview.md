# Overview
## Figma相关调研
阮一峰前辈的一篇文章中指出，Figma是由Rust编写的WebAssembly，其CTO还开发了新一代的 JavaScript Bundler —— Esbuild

[阮一峰文章](https://www.ruanyifeng.com/blog/2022/09/weekly-issue-224.html)

## 实现一个Figma插件
Figma插件主要的实现技术栈就是Web开发三件套
- HTML
- CSS
- JS

Figma对外开放了Plugins的众多API，可以通过JavaScript调用这些API，以实现对Figma画布等方面的一些操作

一些简单的Figma Plugins示例

[简单Figma插件 Github仓库示例](https://github.com/figma/plugin-samples)

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
D2C指的是Design To Code设计稿转代码，我们输入的上下文是Figma、Sketch、Photoshop、即时设计等这些UI设计软件的设计稿，输出的是Web网页（HTML、React/Vue）、移动端APP GUI（Android、IOS）、桌面端APP GUI（MacOS、Windows）等。

在我看来D2C的这些产品，从思想层面应该是为业务研发实现工程效率赋能，能让其专注于业务逻辑的实现，摆脱传统开发从UI还原再到业务逻辑实现的繁琐步骤。

### 研发思路
C2D2C：代码 --》 设计稿 --〉代码
Semi Design示例：Semi Design UI Kit --》 Figma 设计稿 --〉React（css/Tailwind/Emotion）、HTML + 
CSS

UI Kit：适应设计师的使用习惯，同时能更好适配导出的代码
Figma Plugin：帮助开发者更快的实现UI的代码实现，同时更好的适配设计稿的还原

### 使用思路（Semi Design的三大场景）
前提：基于已经开发完成的Figma D2C插件
- 直接：借助于Figma推出的Dev Mode，通过手动的CV来实现
- 间接：借助于lowcode平台，通过Figma插件导出JSON scheme，然后让lowcode平台消费JSON scheme从而实现
- 定制化：借助于AST插件来实现对Figma插件已经导出的数据结构进行加工改造，实现一些定制化的功能，更好的实现业务定制

### FigmaToCode
调研了一个star数量比较多的 D2C Figma Plugin —— FigmaToCode

[FigmaToCode Github仓库地址](https://github.com/bernaferrari/FigmaToCode)

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
[抖音团队的Semi D2C演进之路](https://juejin.cn/post/7267418854124699702)

## Figma dev mode
Fimga的开发模式还在测试阶段，这个开发模式帮助我们更好的审查画布中的UI元素
### 开启开发模式
1. 点击</>按钮切换
2. Shift + D快捷键切换
