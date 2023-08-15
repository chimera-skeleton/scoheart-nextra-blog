# React
## React相关依赖
首先实现React程序那必然需要引入React相关的依赖，几个重要的依赖如下：
- react
- react-dom
- react-native
- babel

### react包
react包中是React的核心代码

### react-dom包
react-dom用于在浏览器中渲染React元素的渲染器，以及可以在nodejs环境中实现React的服务端渲染

### react-native包
react-natvie用于构建移动应用，在Native环境中使用

### babel包
babel用于转换 JSX 语法

### 其他相关的包
#### Reconciler包
React的虚拟DOM相关代码位于此包

#### ReactArt包
Canvas、SVG、或者VML宿主环境使用

#### ReactTest包
ReactTest包渲染出的JS对象，可以方便的测试不属于任何环境的通用功能代码

## 第一个React HelloWorld（Web端）

### 创建容器
``` html
<div id="root"></div>
```

### 导入react、react-dom依赖（CDN）
通过CDN引入react、react-dom的依赖，由于CDN中导入的js文件，使用的是UMD的模块化方案。故相关依赖都会被直接挂载到浏览器全局对象window上。
``` html
<!-- react -->
<script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>

<!-- react-dom -->
<script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
```

### 不使用JSX语法糖
#### 非组件化
``` html
<script>
    // 创建Virtual DOM
    const VDOM = window.React.createElement("h1", {
        onClick: () => { alert("shuhao") }
    }, "Hello React")

    // 创建容器
    const Root = window.ReactDOM.createRoot(document.querySelector("#root"))

    // 将Virtual DOM 挂载到容器上
    Root.render(VDOM)
</script>
```

#### 组件化
##### 函数式组件
``` html
<script>
    // 创建React函数式组件
    const createElement = window.React.createElement

    function HelloReact() {
        return createElement("h1", {
            onClick: () => { alert("shuhao") }
        }, "Hello React")
    }

    // 创建VirtualDOM
    const VDOM = createElement(HelloReact)

    // 创建容器
    const Root = window.ReactDOM.createRoot(document.querySelector("#root"))

    // 将VirtualDOM挂载到容器上
    Root.render(VDOM)
</script>
```

##### 类式组件
``` html
<script>
    // 创建React类式组件
    const createElement = window.React.createElement

    class HelloReact extends window.React.Component{
        render() {
            return createElement("h1", {
                onClick: () => { alert("scoheart") }
            }, "Hello React")
        }
    }

    // 创建VirtualDOM
    const VDOM = createElement(HelloReact)

    // 创建容器
    const Root = window.ReactDOM.createRoot(document.querySelector("#root"))

    // 将VirtualDOM挂载到容器上
    Root.render(VDOM)
</script>
```

### 使用JSX语法糖
那么要使用JSX这种类XML语法的ECMAScript语法糖，则需要我们再导入babel，来解析JSX，将其转化成React元素。

#### 导入babel
``` html
<!-- babel -->
<script src="https://unpkg.com/@babel/standalone@7.22.10/babel.js"></script>
```
#### 非组件化
``` html
<script type="text/babel">
    // 创建VirtualDOM
    const VDOM = <h1>hello react</h1>

    // 创建容器
    const Root = window.ReactDOM.createRoot(document.querySelector("#root"))

    // 将VirtualDOM挂载到容器上
    Root.render(VDOM)
</script>
```

#### 组件化
##### 类式组件
``` html
<script type="text/babel">
    // 创建React类式组件
    class HelloReact extends window.React.Component{
        render() {
            return <h1 onClick="()=> alert('Scoheart')">Hello React</h1>
        }
    }

    // 创建VirtualDOM
    const VDOM = window.React.createElement(HelloReact)

    // 创建容器
    const Root = window.ReactDOM.createRoot(document.querySelector("#root"))

    // 将VirtualDOM挂载到容器上
    Root.render(VDOM)
</script>
```

##### 函数式组件
``` html
<script type="text/babel">
    // 创建React函数式组件
    function HelloReact {
        return <h1 onClick="()=> alert('Scoheart')">Hello React</h1> 
    }

    // 创建Virtual DOM
    const VDOM = window.React.createElement(HelloReact)

    // 创建容器
    const Root = window.ReactDOM.createRoot(document.querySelector("#root"))

    // 将VirtualDOM挂载到容器上
    Root.render(VDOM)
</script>
```

## React的设计思路
### 组件化
- 组件内部拥有私有的状态 - state
- 组件可以接受外部的props状态提供复用性
- 可以根据当前的state/props，返回一个UI

### 响应式编程

### 生命周期函数
#### Mounting 挂载
#### Updating 更新
#### Unmounting 卸载

### hooks
- useState
- useRef
- useEffect
- useContext
- useReducer
- useCallback
- useMemo

### React的路由管理机制
- React-Router

### React的状态管理库
- Redux
- mobx
- xstate
- recoil
- zustand

### React的应用级框架
#### UmiJS
UmiJS是基于React的，内置了路由、构建、部署等功能的前端框架

#### Next.js
Next.js是一款基于React，支持SSR、SSG、ISR，以及文件式路由的React框架

#### Modern.js
字节跳动 Web Infra 团队研发的全栈开发框架，内置了很多开箱即用的能力与最佳实践，可以减少很多调研选择工具的时间。
