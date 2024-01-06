# 项目一极极极简版 --- JS包依赖分析工具
## 提要
项目中的JS代码的运行在Nodejs 这个JavaScript运行时的，所以请先确保你的电脑安装的Nodejs以及npm、yarn、pnpm等包管理工具之一。
## 安装
全局安装（不推荐）
``` shell
npm install -g @scoheart/cli-demo1

yarn add -g @scoheart/cli-demo1
```

项目安装（推荐）
``` shell
npm install @scoheart/cli-demo1

// or
yarn add @scoheart/cli-demo1
```
## 使用
注意: 需要在项目的root path下（根路径）使用，也就是package.json所在的目录中运行下面的指令

``` shell
npx scoheart

// or
yarn scoheart

// or 
pnpm scoheart
```

之后打开终端里提示的URL地址，就可以见到项目中的依赖关系图。
