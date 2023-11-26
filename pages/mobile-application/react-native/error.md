# 错误记录

## 端口冲突

之前打开的项目没有关闭，导致端口冲突。

```shell
 ~/code/RedBookLike/AndroidUI/ npm start

> AndroidUI@0.0.1 start
> react-native start

error listen EADDRINUSE: address already in use :::8081.
Error: listen EADDRINUSE: address already in use :::8081
    at Server.setupListenHandle [as _listen2] (node:net:1817:16)
    at listenInCluster (node:net:1865:12)
    at Server.listen (node:net:1953:7)
    at /Users/scoheart/code/RedBookLike/AndroidUI/node_modules/metro/src/index.flow.js:368:14
    at new Promise (<anonymous>)
    at earlyPortCheck (/Users/scoheart/code/RedBookLike/AndroidUI/node_modules/metro/src/index.flow.js:364:11)
    at exports.runServer (/Users/scoheart/code/RedBookLike/AndroidUI/node_modules/metro/src/index.flow.js:145:9)
    at Object.runServer [as func] (/Users/scoheart/code/RedBookLike/AndroidUI/node_modules/@react-native-community/cli-plugin-metro/build/commands/start/runServer.js:100:49)
    at async Command.handleAction (/Users/scoheart/code/RedBookLike/AndroidUI/node_modules/@react-native-community/cli/build/index.js:111:9)
info Run CLI with --verbose flag for more details.

```

## 下载路由包之后，启动报错

可能是下载路由导航包之后，没有重新打包构建项目

```shell
Invariant Violation: requireNativeComponent: "RNSScreenStackHeaderConfig" was not found in the UIManager.
```

下载一些其他的包，没有重新构建
```shell
ERROR  Invariant Violation: requireNativeComponent: "RNCAndroidDialogPicker" was not found in the UIManager.
```