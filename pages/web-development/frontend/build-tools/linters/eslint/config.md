# 如何配置ESLint

四种方式：
1. 通过代码中的ESLint注释
2. 通过配置文件
3. 通过命令行
4. 通过package.json


最新版配置项
- files
- ignores
- languageOptions
- linterOptions
- processor
- rules
- plugins
- setting

## language options
### ecma options
用来指定你要用的es版本
具体的值可以是es2015或者es5/es6

### source type
用来指定你的源代码是用的什么模块化方案
（目前看来commonjs 无论在什么地方都不会报错，只有es module才会报错）
看文档中的意思，是用来划分作用域的
- module 代表esm
- commonjs 代表cjs
- script 代表原始的js脚本

### parser
可以用不同的解析器  来解析 不标准的javascript代码
例如 React中的jsx。          或者是帮助javascript完成类型推断的flow和typescript

## rules
rules有众多的规则，例如
- no-unused-vars