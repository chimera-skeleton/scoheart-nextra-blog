# Overview
## Figma相关调研
阮一峰前辈的一篇文章中指出，Figma是由Rust编写的WebAssembly，其CTO还开发了新一代的 JavaScript Bundler —— Esbuild

[阮一峰文章](https://www.ruanyifeng.com/blog/2022/09/weekly-issue-224.html)

## Figma dev mode
Fimga的开发模式还在测试阶段，这个开发模式帮助我们更好的审查画布中的UI元素

### 开启开发模式
1. 点击</>按钮切换
2. Shift + D快捷键切换

### 使用开发模式拓展
1. 可以将Figma图纸与Storybook链接
2. 可以加Figma图纸与github代码库链接，将设计链接到代码，以保持同步

### 使用Figma for VS code
Figma for VS Code 可让您导航和检查设计文件、与设计人员协作、跟踪设计更改并加快设计实施 - 所有这些都无需离开文本编辑器。通过消除将设计转化为代码所需的上下文切换和繁忙工作，提高开发人员的工作效率

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
C2D2C：代码 ==> 设计稿 ==> 代码
Semi Design：Semi Design UI Kit ==> Figma 设计稿 ==> React（css/Tailwind/Emotion）、HTML + CSS 

UI Kit：给设计师提供的开箱即用的设计稿
Figma Plugin：一方面应设计师的使用习惯，一方面帮助开发者更快的实现UI的代码实现，同时更好的适配设计稿的还原
Components Library：给开发者提供的开箱即用的Web前端UI组件库

### 使用思路（Semi Design的三大场景）
前提：
- Figma UI Kit
- Figma D2C插件

方法：
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
> 字节跳动的抖音前端团队的Semi Design亦有这样的功能, 调研中……

[抖音团队的Semi D2C演进之路](https://juejin.cn/post/7267418854124699702)
[Semi Design的质量保障 -- 组件库测试技术](https://medium.com/front-end-weekly/how-we-test-semi-design-component-libraries-64b854f63b65)

#### Semi Design的设计系统打造
> Web Components

优势：最原生的组件化开发方式，在打造组件库的方向上，是具备天然的优势的，可以担任lib的角色，被上层应用框架来消费
劣势：在当前阶段，无论是浏览器兼容性还是工具链路的支持，都不尽人意

最终方案：根据Semi Design给出的一些文档，他们最终的方案是F/A方案（体会他们的意思就是说Web Components迟早会走向成熟，没必要自己在完全构建出一套新的方案去做这件事情，那么当Web Components成熟之日，又可能需要重写一遍组件逻辑，这是没有必要的重复工作，所以现阶段就高度的去抽象逻辑，提供更好的跨框架支持）
- F：Foundation
- A：Adapter

F/A方案将一个组件划分为两个部分
- Foundation 包括最能代码组件的交互逻辑
- Adapter    一个接口，具有Foundation实现业务逻辑的所有方法，同时负责组件：DOM的结构、组件状态、事件处理
    - DOM
    - Components State
    - Event Handler

#### Semi Design的开发技术选型