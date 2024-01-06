# html-inline-script-webpack-plugin
[Github](https://github.com/icelam/html-inline-script-webpack-plugin)
这个插件会将 exteral 的 script 全转换成 inline 的 script 到 html 中

## 安装

> 前提

这个插件需要配合 html-webpack-plugin 使用

```shell
npm install html-webpack-plugin --save-dev
```

```shell
npm install html-inline-script-webpack-plugin --save-dev
```

## 使用

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");

module.exports = {
  plugins: [new HtmlWebpackPlugin(), new HtmlInlineScriptPlugin()],
};
```

### 可选项
这个插件有几个可选项
- scriptMatchPatten: 匹配的 script 的正则表达式
- htmlMatchPatten: 匹配的 html 的正则表达式
- assetsPerservePatten: 保留的 assets 的正则表达式
