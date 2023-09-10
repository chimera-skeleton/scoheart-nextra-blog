# React Hooks

## useState

这是组件内状态管理的hook，它是异步更新的



## useRef

### 获取DOM

useRef hook 可以获取DOM节点

例如

```jsx
const dom = useRef(null)

<div ref=dom ></div>

dom.current
```

通过dom.current就可以获取当前的DOM节点



### 保存一个状态



## useEffect



## useMemo



## useCallback



# React 样式管理



# React-router 路由

### 如何构建路由表

creatBrowserRouter



### 嵌套路由

Outlet、children



# AntDesignUI 使用



# React表单组件、受控组件



# Ajax在React项目中的使用

- 使用ahooks的 useRequest 代替 useEffect 实现AJAX的请求
  - useRequest包括手动与自动
  - useRquest的loading效果 配合antd 的spin



- axios的使用
  - 封装axios
  - 通过响应拦截器统一返回的数据格式 data ，也就是筛选掉errno
  - 通过请求拦截器携带token

# Nodejs

- express
- koa



# Mock的使用

- 可以直接在前端项目中使用，但是不推荐
- 配合nodejs使用，通过koa+mockjs实现模拟服务端
- 在线mock平台



# Webpack配置

- craco.js 来扩展CRA的webpack配置



# Redux 状态管理

## 基本的hooks

- useContext
- useReducer



## Redux toolkit

### @reduxjs/toolkit

- createSlice
  - name
  - initialState
  - reducers
    - add
    - remove
  - export 
    - slice.reducer
    - slice.action (add, remove)

- configureStore
  - reducer：sliceReducer

### react-redux

- 使用的话：useSelector
  - state.xxxx
- 改变的话：useDispatch
  - 需要actions



# 性能优化

### 通过useState传递函数

### useMemo

### useCallback

### React.memo

防止子组件没必要的重新渲染的，因为react会让所有子组件更新

### 拆分bundler文件

analyzing-bundler-size

- 路由懒加载
  - Edit和stat优化出去，加载首页的时候不用加载他们
- webpack分块打包 optimization.splitChunks
  - antd
  - react-dom
- 路由懒加载CRA自动拆分CSS文件



# 单元测试、可视化测试

### jest单元测试

主要在于这个库的api调用

@testing-library/react

- render 
- screen



### storybook 可视化测试



#第三方库总结

- ahooks
  - useRequest
  - useTitle
  - useDebounceFn
- react-router
- antd
- craco
- dnd-kit
- react-undo
- qrcode-react
- recharts



# 业务逻辑

## 我的问卷

### 搜索功能

搜索组件 改变URL

列表组件根据URL渲染

- keyword 搜索相关
- page、pageSize 分页相关



搜索的时候清空了其他的参数



### 分页功能

- 第几页 page

- 每页数量 pageSize
- 总数 total

其他组件改变URL

分页组件监听URL中的几个参数，来实现分页功能



分页的时候带着其他的参数



###  LoadMore功能

不能改变URL， 通过scroll事件

- 第几页 page

- 每页数量 pageSize
- 总数 total
- 还有更多吗 haveMoreData



组件内保存一个list1，请求数据返回一个list2，返回后把数据带入到list1，通过判断list1的长度和total的总数，来判断是不是还能继续假装



防抖

不能划一次就加载一次，滚动之后隔一秒加载

- 使用ahooks - useDebounceFn



光有防抖也不行，还要判断是不是到底了才加载

- useRef判断
- getBoundingClientRect



最终通过useRequest  加载数据

- 手动执行
- onSuccess 来给page+1，来给list1添加数据



### 标星功能

isStar修改



### 删除（假删除）功能

isDelete 设置



### 恢复

isDelete 撤销 一条一条恢复

for await

通过useRequest 的refresh 手动刷新页面

防止多按：useRequest的 debounceWait



### 彻底删除

一组删除



## 注册登录

### 记住密码

通过localstorage



### 注册

注册成功 提示 挑战登录页



### 登录

返回token localstorage记录token

登录成功 导航到我的问卷



### 每次请求都带token

axios请求拦截器



### 表单校验



## 编辑器功能

问卷两个基本数据结构

- 问卷的基本信息
- 问卷的组件列表



### 存储组件列表

- 点击编辑问卷，进入Edit页面
- 通过id加载问卷的信息，包括
  - 基本信息
  - 组件列表 componentsList
- 将组件列表 componentsList 存入redux store中



### 渲染画布

- 画布从store中取出组件列表 componentsList 

- 根据type配置渲染不同的组件（配置是前面定义好的，只要从里面找就可以了）



### 点击画布选中

通过一个selectedId共享全局状态



### 组件库显示

组件库分类显示



### 组件库点击后添加到画布



### 属性表单



### 工具栏

#### 删除

就是从组件列表中移除组件



#### 锁定

islocked 判断， 锁了就不让操作，该样式



#### 隐藏

isHidden 判断， 隐藏就不显示，但是画布中还有



#### 复制粘贴



#### 撤销重做

两个栈的原理

- present
- past
- future

### 扩展组件库



## 统计页面

通过状态提升



问卷 答卷的数据结构

通过fe_id联系



# 问题引申

## React hooks

- 各种hooks的使用，作用，场景？
- hooks的原理？

## 样式管理

- 选择依据？
- css的一些知识？

## router

- 路由的原理
  - hash？
  - history？

## antd

- 选择依据？
- antd的一些啥原理？

## react表单组件

## Ajax

- ajax的各种方案
  - XHR
  - fetch
  - axios

## Nodejs

- 了解多少？
- koa、express这种js服务端框架？
- Koa洋葱模型？

## mockjs

- 选择方案？

## webpack

- webpack的配置？
- loader、plugins原理？

## redux

- redux的概念、流程？
- redux toolkit？
- 状态管理方案？

## 性能优化

- 方案？

## 测试

- 为什么测试？
- 如何测试？

