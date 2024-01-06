## 使用flow

Getting Started
``` shell
yarn add flow-bin

npm instal flow-bin
```

``` js
// @flow

function sum(a: number, b: number) {
    return a + b;
}

sum(100, 200)

sum("1", "2")        // error
```

初始化配置文件
```
./node_modules/.bin/flow init

yarn flow init

npm exec flow init
```

没有安装插件的时候，只有运行时候，才会flow才会检测类型错误
``` shell
./node_modules/.bin/flow

yarn flow

npm exec flow

```

安装插件之后，可以在vscode编码的时候直接看到错误
`flow language support`

最终执行的代码一定要是原始的js（不带任何flow类型注解的）
``` shell
npm install flow-remove-types

yarn add flow-remove-types
```

``` shell
yarn flow-remove-types demo.js -o demo_finish.js

npm exec
npm x
npx flow-remove-types demo.js -o demo_finish.js

./node_modules/.bin/flow-remove-types demo.js -o demo_finish.js

npm run xxxx
```

## Primitive Type 原始类型
### void 类型
``` javascript
const a: void = undefined;
```

### null 类型
``` javascript
const obj: null = null;
```

### string 类型
``` javascript
const str: string = "hello world";
```

### number 类型
``` javascript
const num1: number = 22;

const num2: number = NaN;

const num3: number = Infinity;
```

### boolean 类型
``` javascript
const isFalse: boolean = false;

const isTrue: boolean = trun;
```

### symbol 类型
``` javascript
const sym: symbol = Symbol();
```

## 结构类型
### Array 类型
``` javascript
const arr1: Array<number> = [ 1, 2, 3, 4 ];

const arr2: number[] = [1, 2, 3, 4];
```

### Tuple 类型
``` javascript
const tuple: [string, number] = ["hello", 22];
```

### Object 类型
``` javascript
const obj: {prop1: string, prop2: number} = {
	prop1: "shuhao",
	prop2: 22
}

const obj2: {prop1?: string, prop2: number} = {
	prop2: 22
}

const obj3: { [string]: "string" } = {}
obj3.key1 = "shuhao"
obj3.key1 = 22                 // error

```

### function 类型
``` javascript
function fn(a: nubmer, b: number): number {
	return a + b;
}

function fn2():void {
	console.log("hello world");
}

function fn3(callback: (string, nubmer) => void): void {
	callback("hello world", 1024);
}
```

## 特殊类型
### literal 字面量类型
``` javascript
const str: "hello" = "hello";

const num: 2 = 2;

const num: 3 = 2;           // error
```

### 联合类型
``` javascript
const str: "heart sco" | "zilong wang" | "tongzian zhang" = "heart sco"
```