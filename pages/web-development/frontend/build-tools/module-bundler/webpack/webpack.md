# Webpack

## 使用 jsDoc 让 webpack 配置项有智能提示

```js
/**
 * @type {import('webpack').Configuration}
 */
```

## cli

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
默认输出一个main.js打包文件
```js
// webpack.config.js
module.exports = {
  entry: ".path/xxx.js", // 入口文件
};
```

### 多入口打包
如果传递的是一个对象，那么对象的key会是每一个chunk的名称，value是入口文件的路径。
```js
module.exports = {
  entry: {
    code: "./src/code.js",
    ui: "./src/ui.js",
  },
};
```

## loader
