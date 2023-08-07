# Default parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

默认参数会在没有传递值 或者 传递undefined值时，给参数默认添加一个值

``` javascript
function sum (a, b = 2) {
    console.log(a + b)
}

sum(1)               // 3
sum(1, undefined)    // 3 
sum(1, 3)            // 4
```