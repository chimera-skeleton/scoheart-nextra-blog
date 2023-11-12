# RN 的路由管理

## 相关的两个库

### React Navigation

[官方文档](https://reactnavigation.org/)
[Github 仓库](https://github.com/react-navigation/react-navigation)

### React Native Navigation

[官方文档](https://wix.github.io/react-native-navigation/docs/before-you-start/)
[Github 仓库](https://github.com/wix/react-native-navigation)

## 下载 npm 包

我们使用的是 React Navigation，所以需要下载以下包：

- @react-navigation/native
- react-native-screens
- react-native-safe-area-context
- @react-navigation/native-stack

```shell
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
```

## 示例代码

``` tsx
// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

//@ts-ignore
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
