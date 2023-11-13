# RN 的路由管理

## 相关的两个库

### React Navigation

[官方文档](https://reactnavigation.org/)
[Github 仓库](https://github.com/react-navigation/react-navigation)

### React Native Navigation

[官方文档](https://wix.github.io/react-native-navigation/docs/before-you-start/)
[Github 仓库](https://github.com/wix/react-native-navigation)

## 下载 npm 包

我们使用的是 React Navigation 这个库，所以可以根据需要下载以下的 npm 包：

### 基础路由包

- @react-navigation/native

### 上层路由包

- react-native-screens
- react-native-safe-area-context

#### 路由栈

- @react-navigation/native-stack
- @react-navigation/stack

### 侧边栏

- @react-navigation/drawer
- react-native-gesture-handler
- react-native-reanimated

```shell
npm install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

#### 底部导航

##### bottom-tabs

- @react-navigation/bottom-tabs

```shell
npm install @react-navigation/bottom-tabs
```

##### material-bottom-tabs

- @react-navigation/material-bottom-tabs
- react-native-paper
- react-native-vector-icons

```shell
npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
```

#### 顶部导航

- @react-navigation/material-top-tabs
- react-native-tab-view
- react-native-pager-view

```shell
npm install @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view
```
## 示例代码
