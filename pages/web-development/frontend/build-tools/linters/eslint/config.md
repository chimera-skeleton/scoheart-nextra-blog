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


eslint有自己推荐的默认配置，有两个配置，在@eslint/js包中
- js.configs.all 这个会有所有的配置
- js.configs.recommended 这个会有推荐的配置规则
## plugins
插件里面有很多规则，可以配置插件中的规则

- 可以导入插件，然后自己一个一个使用插件中的规则，但是规则必须要制定插件的前缀名
- 还可以直接导入插件的全部配置，这就是为什么配置项是一个数组，因为最后可以合并配置

## processor
可以从不是js的文件中萃取出js的代码，然后来lint和检查错误

比如eslint-plugin-markdown