# HMR

## watch 文件监听模式

webpack 内置了 watch 监听模式，当文件发生变化时，webpack 会自动重新构建打包。

watch 的原理：

- 轮询判断文件的最后编辑时间是否发生变化
- 某个文件发生变化，并不会立刻告诉监听者，而是先缓存起来，等 aggregateTimeout 时间后在通知监听者

## devServer 开发服务器

webpack-dev-server 在本地起了个 web 服务器，通过 websocket 与浏览器建立持久化链接，当源代码发生变更时，会通过 socket 通知网页端，网页端接到通知后会自动触发页面刷新。类似的还有 vscode 的插件 Live Server。

## HMR 热模块替换

HMR 是 Webpack 的一项功能，它允许开发人员在不刷新页面的情况下更新模块。这意味着，当你修改代码时，你可以立即看到更新后的效果，而无需重新编译和刷新页面。这对于开发人员来说非常方便，因为它可以节省大量时间，同时也可以提高开发效率。devServer 的刷新是整个页面刷新，而 HMR 是局部刷新。webpack 提供了 HMR API，解决页面刷新导致的状态丢失问题。

HMR 原理：

- 在运行时，Webpack 将监听特定的文件更改事件。
- 当文件更改时，Webpack 会编译新的模块，并将其发送给客户端。
- 客户端将在运行时接收到新的模块，并替换旧的模块，从而实现更新。
