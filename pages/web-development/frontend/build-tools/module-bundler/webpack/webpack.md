# Webpack

## 使用 jsDoc 让 webpack 配置项有智能提示

```js
/**
 * @type {import('webpack').Configuration}
 */
```

## cli

## mode

```js
mode?: "none" | "development" | "production";
```

可以通过 CLI 或者 配置文件中的 mode 来指定打包模式，如果没有通过 CLI 和 Config 指定，则会使用 process.env.NODE_ENV（即环境变量 NODE_ENV）的值

```js
const process = require("process");
process.env.NODE_ENV = "production";
```

则配置顺序为：

- cli
- config
- env

### development

启用模块名，chunk 名

### production

压缩代码，去除注释等

### none

不开启任何优化选型

## entry

```js
entry?:
		| string
		| (() => string | EntryObject | string[] | Promise<EntryStatic>)
		| EntryObject
		| string[];

declare interface EntryObject {
	[index: string]: string | string[] | EntryDescription;
}
```

### 单入口打包

默认输出一个 main.js 打包文件

```js
// webpack.config.js
module.exports = {
  entry: "./path/xxx.js", // 入口文件
};
```

### 多入口打包

如果传递的是一个对象，那么对象的 key 会是每一个 chunk 的名称，value 是入口文件的路径。

```js
module.exports = {
  entry: {
    code: "./src/code.js",
    ui: "./src/ui.js",
  },
};
```

## loader

### ts-loader

### css-loader

用来解析 CSS 文件

### style-loader

用来将 CSS 插入到 HTML 中

## resolve

### alias

配置路径的别名

```js
const path = require("path");
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
```

> notes: 如果配合 TS 使用，则需要在 tsconfig.json 中配置 comilerOptions.baseUrl 和 comilerOptions.paths

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

### extensions

配置文件后缀名

```js
module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
};
```

## manifest

一个项目中可能包括三类代码

- 你自己写的源代码
- 第三方库等依赖代码
- webpack 的 runtime 和 mianifest
