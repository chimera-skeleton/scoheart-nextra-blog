# react-router v5
## HashRouter 


## Link
- to
- {}
- replace

## NavLink
- activeClassName

## Switch

## Redirect
- exact
- from
- to

## Route
- path
- exact
- render
- component

## 路由匹配规则
- 精准匹配
- 模糊匹配

| 页面地址 | 路由地址 | 模糊匹配 | 精准匹配 |
| -------- | -------- | -------- | -------- |
| /        | /        | true     | true     |
| /        | /login   | false    | false    |
| / login  | /        | true     | false    |
| /a/b     | /a       | true     | false    |
| /a/b     | /a/b     | true     | true     |
| /a2/b    | /a       | false    | false    |

根据路由匹配页面

## 路由性能优化
1. 页面开始加载的时候只加载“主JS”「bundle.js」，其余的JS独立成JS文件或者合并成其他JS
2.路由切换的时候在动态导入路由组件的JS文件 

- 分割打包
- 按需加载

路由懒加载
- React.lazy
- import()
- Suspense

- webpackChunkName

## 路由传参
props
<Route/>
- history
- location
- match

hooks
<HashRouter/> / <BrowserRouter/>
- useHistory
- useLocation
- useRouteMatch

类组件： 
- HOC实现
- withRouter v5

## 编程式路由
### history.push
#### url参数
传参
- url参数：？/ {}

得参
- useLocation
- URLSearchParams

#### 路径参数
传参
- /c/:id/:name

得参
- useRouteMatch
- useParams

#### 隐式传参
- state

- useLocation

# react-router v6
## HashRouter

## Routes
## Route
- path
- element

## Navigate
- to

## Outlet


## 路由传参
hook
- useLocaiton
- useRouterMatch
- useParams

## 路由跳转方式
- Link/NavLink
- Navigate
- 编程式路由
	- useNavigate

### useNavigate
#### url参数
传参
- url参数：？/ {}

得参
- useLocation
- URLSearchParams
- useSearchParams 

#### 路径参数
传参
- /c/:id/:name

得参
- useMatch
- useParams

#### 隐式传参
- state

- useLocation

| v5             | v6              |
| -------------- | --------------- |
| useHistory     | useNavigate     |
| useLocation    | useLocation     |
| useParams      | useParams       |
|                | useSearchParams |
| useRouterMatch | useMatch        |


# 最新路由
## createBrowserRouter

## 路由导航
- Link
- useNavigate

## 路由导航传参
- searchParams传参
	- useSearchParams

- params传参
	- useParams

## 嵌套路由配置
- Outlet

## 404路由

## history 和 hash


https://juejin.cn/oauth-result?new_connect=0&new_user=0&sk=ClvT0AOFWLBiz13mnzHDCtTlkEVThxGXunJa8Ek61P2jxoQvxo08hMSbYy9%252BJEOlP%252FACkAJHfUcGlzsYQmFl7Hu%252FiEt3FTZcMJMX8InlnEJR7eP9jsoSLrtwbnMPBy1UNK2r2I5iK%252F8W645xP7OuruZdEnOix4NLXE7UANCQZH8%253D


https://github.com/login/oauth/authorize?client_id=60483ab971aa5416e000&redirect_uri=https://juejin.cn/passport/auth/login_success&state=820adf713gASoVCgoVPZIDQ2NDQ0ZmM0ODAzMWQ2N2ExNTE0MjE1NGFmNTYxZWIxoU6-aHR0cHM6Ly9qdWVqaW4uY24vb2F1dGgtcmVzdWx0oVYBoUkAoUQAoUHRCjChTdEKMKFIqWp1ZWppbi5jbqFSBKJQTNEEFaZBQ1RJT06goUyyaHR0cHM6Ly9qdWVqaW4uY24voVTZIDQ4MDI1MjgxZTlhZTc1ZGJiMWZkMjJhOTNhNjNkYWNkoVcAoUYAolNBAKFVww%3D%3D&allow_signup=true&scope=user:email



资源拥有者: 按下Google 登陆
客户端: 向Google Oauth2 API 接口发起请求
客户端: 显示授权界面，提示授权

同意授权后

客户端：从重定向URL中获取code
填写必要信息

一起发送请求给后端接口

后端请求Google过去access token 
通过access token继续请求Google api 获取用户信息
通过sql创建用户 ➕ 前端传递的信息创建用户
返回jwt token 

问题， 怎么判断谷歌注册了吗？
