# Typescript实践

## 第一个案例
``` shell
yarn add typescript -D 
```

``` typescript
// index.ts
console.log("hello");
```

``` shell
tsc index.ts
```

## tsconfig.json配置文件
``` shell
tsc --init
```
### files
files字段可以是一个数组，包括了项目中需要使用的ts文件。

### include
include字段也是一个数组，用来指定项目中包括了哪些文件，与files字段不同的是，在include字段中，可以使用通配符来匹配多个文件。

### exclude
exclude字段是一个是数组，用来排除include字段中已经包含了的某些文件，这些文件就不会在被tsc解析

### extends
extends字段用来加载一个配置文件，这个配置文件中的配置会被继承。继承的关系为，首先基本的配置文件会生效，然后加载要继承的文件中的配置项，除了references字段以外，其他的配置项都会覆盖原来的配置文件。

### references

### compilerOptions
#### target
最终目标的JS代码的ECMAScript版本，可以选择的值有：
- es3 默认就是es3
- es5
- es6 / es2015
- es2016
……
- es2022
- esnext 表示最新的且不同的Typescript版本也不一定相同

#### module
module字段代表最终编译代码使用的模块化规范是什么，可选项有：
- none
- CJS 如果target是es3或者es5 那么module默认就是CJS
- AMD
- UMD
- ES6 / ES2015 如果tartget是es6/es2015 那么module默认就是ES6
- System

#### skipLibCheck
skipLibCheck字段代表跳过声明文件的检查，虽然提高性能节省编译时间，但是会有损类型的准确性。

## 类型
### 原始类型
- string
- number
- boolean
- null
- undefined
- symbol
- bigin
### Any类型
可以取任何值

### 函数类型
#### 参数类型
给函数参数定义类型
#### 返回值类型
给函数定义返回值类型

### 联合类型
const a = 1 ｜ 2

### 类型别名

### 接口

### 类型断言

### 字面量类型

### 枚举

## 类型声明文件
类型声明文件以.d.ts结尾
