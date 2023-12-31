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

这是必须要下载的的包，因为后面所有的路由都需要依赖它。

- @react-navigation/native 这个包依赖后面两个包
- react-native-screens
- react-native-safe-area-context

```shell
npm isntall @react-navigation/native react-native-screens react-native-safe-area-context
```

### 上层路由包

#### 路由栈

路由栈的话，选择一个即可，因为它们都是基于 @react-navigation/native 这个包。

##### Stack

- @react-navigation/stack
- react-native-gesture-handler
- @react-native-masked-view/masked-view

##### Native Stack

- @react-navigation/native-stack

### 侧边栏

- @react-navigation/drawer
- react-native-gesture-handler
- react-native-reanimated

```shell
npm install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

#### 底部导航

底部导航有两种，一种是 material-bottom-tabs，另一种是 bottom-tabs。任选其一即可。

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

## 路由使用

### NavigationContainer

将你的 App 用 NavigationContainer 包裹起来，这样就可以使用路由了。

```tsx
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

### createNativeStackNavigator

createNativeStackNavigator 函数调用后，会返回一个对象，这个对象包含 Navigator 和 Screen 两个属性。Navigator 需要包裹在 NavigationContainer 中，而 Screen 则是路由的页面。

```tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const NativeStack = createNativeStackNavigator();
const { Screen, Navigator } = NativeStack;

function Page1(): JSX.Element {
  return (
    <>
      <Text>Page1</Text>
    </>
  );
}

function Page2(): JSX.Element {
  return (
    <>
      <Text>Page2</Text>
    </>
  );
}

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator>
          <Screen name="Page1" component={Page1} />
          <Screen name="Page2" component={Page2} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
```

#### Navigator

Navigator 是一个路由的容器，可以包含多个 Screen。

配置项通过 props 传入，也可以通过 context 配置。配置项有：

- initialRouteName 初始路由名称，如果不设置，则默认第一个 Screen 的 name

#### Screen

Screen 是一个路由页面，可以包含多个 Screen。
配置项通过 props 传入，也可以通过 context 配置。配置项有：

- name 路由名称
- component 路由对应组件
- opitons 路由配置
  - title 路由标题

一个高级用法传递 props：

```tsx
<Stack.Screen name="Home">
  {(props) => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```

### 如何实现路由跳转

每一个 Screeen 都会被传递 navigation 这个 props，通过 navgation 上的一些方法可以跳转到其他页面。路由细节类似于 Android 的 Activity 的启动模式。

- navgation.navigate(name) 跳转到指定页面
- navgation.goBack() 返回上一页
- navgation.push(name) 跳转到指定页面，并入栈
- navgation.pop() 返回上一页，并出栈
- navgation.popToTop() 返回首页，并出栈

```tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";

const NativeStack = createNativeStackNavigator();
const { Screen, Navigator } = NativeStack;

//@ts-ignore
function Page1({ navigation }): JSX.Element {
  return (
    <>
      <Text>Page1</Text>
      <Button
        title="跳转到Page2"
        onPress={() => {
          navigation.navigate("Page2");
        }}
      ></Button>
    </>
  );
}

//@ts-ignore
function Page2({ navigation }): JSX.Element {
  return (
    <>
      <Text>Page2</Text>
      <Button
        title="跳转到Page1"
        onPress={() => {
          navigation.navigate("Page1");
        }}
      ></Button>
    </>
  );
}

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Page1">
          <Screen
            name="Page1"
            component={Page1}
            options={{ title: "这是第一个界面" }}
          />
          <Screen
            name="Page2"
            component={Page2}
            options={{ title: "这是第二个界面" }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
```
