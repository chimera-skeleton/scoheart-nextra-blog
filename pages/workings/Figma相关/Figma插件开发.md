# Figma 插件开发

> 相关文档

- https://www.figma.com/plugin-docs/

## 插件详情

Figma 插件通过 JavaScript 语言编写，如果需要 UI 界面，可以使用 HTML 编写。

### Manifest 文件

manifest 文件是插件的配置文件，包含插件的基本信息.

```json
// manifest.json
{
  "name": "MyPlugin",
  "id": "737805260747778092",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html"
}
```

| API      | 文档地址                                    |
| -------- | ------------------------------------------- |
| Manifest | https://www.figma.com/plugin-docs/manifest/ |

### 插件 API 相关

#### 全局对象和变量

- figma 是 Figma 插件中的全局对象，可以通过 figma 访问大部分的插件 API
- \_\_html\_\_ 和 \_\_uiFiles\_\_ 是 Figma 插件中的全局变量，可以它们来访问 UI（HTML） 文件的内容。

#### 结点类型和属性

Figma 画布中的每一块内容都是一个结点，每个结点都有自己的类型和属性。其中，许多结点共享的属性被抽离成共享结点属性属性。

| API                                   | 文档地址                                               |
| ------------------------------------- | ------------------------------------------------------ |
| Node Types（Node Special Properties） | https://www.figma.com/plugin-docs/api/nodes/           |
| Shared Node Properties                | https://www.figma.com/plugin-docs/api/node-properties/ |

### 数据类型和 TS 类型声明文件

Figma 提供了 TS 类型声明文件以及一些数据类型，可以通过这些类型文件可以更好的来编写代码。

| API             | 文档地址                                          |
| --------------- | ------------------------------------------------- |
| Data Types      | https://www.figma.com/plugin-docs/api/data-types/ |
| TypeScript File | https://www.figma.com/plugin-docs/api/typings/    |
