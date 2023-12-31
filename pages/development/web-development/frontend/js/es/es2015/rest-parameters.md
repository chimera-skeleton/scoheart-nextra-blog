# Rest Parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

- 剩余参数语法将函数变成了Variadic function（可变参数函数）
- 剩余参数只能在参数列表中使用一次，且只能作为最后一个参数出现

``` javascript
function demo(...args) {
	console.log(args)
}

demo(1, 2, "sdf")       // [1, 2, "sdf"]
```

