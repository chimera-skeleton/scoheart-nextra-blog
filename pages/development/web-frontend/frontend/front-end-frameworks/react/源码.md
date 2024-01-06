## react 15 架构
- reconciler 协调器     stack reconciler
	- reconcile （diff算法）
- renderer 渲染器

同步的更新 三个li 一个一个更新
react15 递归遍历VDOM 无法中断 

## react 16 架构
- scheduler
- reconciler          Fiber reconciler
- renderer

优先级更新 双缓冲 scheduler reconciler 在内存
react16 Fiber链表可中断

## Fiber
代数效应
###  三层含义
- 作为架构
- 作为静态数据结构
- 作为动态工作单元

## 双缓存
内存中构建 替换的技术
- current Fiber
- workInProgress Fiber
- alternate
## 工作循环
- 协调
- 提交

## react 整体流程
调度器 schedule 调度
协调器 render     渲染
渲染器 commit   提交

- scheduler
- reconciler
	- Fiber
- renderer 
	- reactDOM
	- reactNative
	- reactArt

# 四
## 更新机制
- 同步
- 防抖
- 节流
- 异步更新



# 4. 如何更新

代表更新的数据结构 Update
更新队列
 