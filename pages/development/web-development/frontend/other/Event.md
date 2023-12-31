# 事件机制

## Event
Event构造函数可以创建一个事件对象

``` javascript
// 创建自定义事件
const evt = new Event("look");

// 注册事件
const ele = document.querySelector("#app");

ele.addEventListener("look", function () {
	alert("look is triggered")
})

// 事件派发
ele.dispatchEvent(evt)
```

## EventTarget
EventTarget构造函数创建的实例对象会包含三个实例方法
- addEventListener
- dispatchEvent
- removeEventListener

``` javascript
const evt = new Event("eat");

const obj = new EventTarget();

obj.addEventListener("eat", function () {
	alert("i am ate")
})

obj.dispatchEvent(evt)
```

## CustomEvent
CustomEvent构造函数可以创建一个事件对象

``` javascript
// 创建自定义事件
const evt = new CustomEvent("eat");

// 注册事件
const ele = document.querySelector("#app");

ele.addEventListener("look", function () {
	alert("look is triggered")
})

// 事件派发
ele.dispatchEvent(evt)
```

## 事件冒泡
从里到外

## 事件捕获
从外向内


