In JavaScript, closures are created every time a function is created, at function creation time.

## block scope
ES5 没有块级作用域

下面的{}不会创建块作用域，实际上需要报错，但是却可以访问到x这个变量
``` javascript
if (Math.random() > 0) {
    var x = 1;
} else {
    var x = 2;
}

console.log(x)
```

temporal dead zones  & let const

ES6虽然可以把{}变成块级作用域，但是变量声明必须用 const let

那么实际上是const let创建作用域
``` javascript
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x);   // ReferenceError: x is not defined
```

ES module 也是块作用域

## closures
A _closure_ is the combination of a function and the lexical environment within which that function was declared

词法环境相同的闭包
``` javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

```

词法环境不同的闭包
``` javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

## practical closures
``` js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```

## Emulating private methods with closures  
使用闭包模拟私有方法


