# Swift
Swift是一门编译型语言。

## 小思考
### 两种执行方式
1. 直接使用swift即时编译并且执行，不会生成可执行文件（这种方式依赖swift编译器和即时编译的机制）

2. 先使用swiftc命令将代码编译成可执行文件，然后执行可执行文件（使用swiftc编译后，可执行文件可以独立运行，不依赖swift编译器）

## let var
var声明变量、let声明常量

## type annonation 类型注解
``` swift
var name: String
```

## structures
``` swift
struct Person {
    var name = "shuhao"
    var age =  18
}
```
