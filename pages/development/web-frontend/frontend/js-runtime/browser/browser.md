# 浏览器
## 进程
每开启一个软件，就会启动一个进程，这个进程会监听一个端口

## 线程
一个进程开启，他可能会启动多个线程

## 浏览器架构演变
- 单进程架构
- 多进程架构
- 面向服务架构

## 多进程模型
- 主进程
- 渲染进程
每开启一个tab页面就会开启一个渲染进程
- GPU进程
- 网络进程
- Plugins进程

|进程名 |进程作用|
|------|-------|
|主进程|主要负责页面展示逻辑、用户交互、子进程管理；包括地址栏、书签、前进、后退、收藏夹等|
|GPU进程|负责UI绘制、包含整个浏览器的全部UI|
|网络进程|网络服务进程、负责网络资源加载|
|渲染进程|控制Tab内的所有内容，将HTML、CSS和JavaScript转换为用户可交互的网页|
|插件进程|控制网站运行的插件、比如flash等|
|其他进程|Storage、Network、Audio Service等|

### 浏览器内核 （渲染进程）
- Trident
- Gecko
- Webkit
- Blink
- Presto

|内核|浏览器|JS引擎|
|-----|-----|-----|
|Trident|IE4-11|JScript、Chakra|
|Gecko|Firefox|SpiderMonkey|
|Webkit|Safari、Chrome、Android浏览器|JavaScriptCore|
|Blink|Chrome、Opera|V8|
|Edge|Edge|Chakra|
|Trident+Webkit(Blink)|国产浏览器，QQ、360、搜狗、UC等等|都有都有|

## 多线程模型（针对渲染进程）
- GUI渲染主线程
- js引擎线程
- 事件触发线程
- 定时器触发线程
- 网络线程

|线程|功能|
|-----|-----|
|GUI渲染主线程|负责渲染浏览器界面，解析HTML、CSS，构建DOM树、Render树，布局，绘制，和js引擎互斥|
|JS引擎线程|负责解析JS脚本，运行JS程序，每个渲染进程下只有一个JS引擎线程。与GUI渲染主线程互斥，如果执行任务过长，会导致页面卡顿|
|定时器触发线程|setTimeout、setInterval计时完毕后，将回调添加到事件队列，等待JS引擎执行|
|网络线程|XHR、fetch发起请求后开启一个网络线程请求，如果设置了回调函数、在状态变更时候，将回调函数放入事件队列，等待JS引擎执行|
|事件触发线程|宿主环境提供，用于控制事件循环，不断地从事件队列取出任务执行|

### GUI渲染引擎
CRP Critical rendering path 关键渲染路径

- 解析HTML & CSS源码
	- 解析HTML --> XML解析器
	- 解析CSS --> CSS解析器
- 构建DOM树 & CSSOM树
	- HTML --> DOM树
	- CSS --> CSSOM树
- 构建Render树/Layout树
- 布局 Layout
- 分层 Layer
- 绘制 Paint
- 展示 Display

### JS引擎
- 解析JS源码 --> JS解析器
- 转化成AST
- 翻译成字节码
- 解析执行字节码
	- JIT 转化成机器码
	- 直接执行机器码

