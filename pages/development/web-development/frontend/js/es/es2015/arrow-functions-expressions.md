# Arrow function expressions
- 箭头函数没有自己的this、arguments、super，因此不适用作为对象的方法
- 箭头函数不可以做constructors
- 箭头函数不能用yield

## 箭头函数的几种格式
``` javascript
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

