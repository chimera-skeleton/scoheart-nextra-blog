# linters
linters这类工具可以划分为两种类别
1. 代码格式化 (Formatting rules)
2. 代码质量检查 (Code-quality rules)

### 代码格式化
Prettier就是这一类工具，它只能帮助我们去格式化代码，而不能进行代码质量的检查。

### 代码质量检查
ESLint就是这一类工具，它可以帮助我们捕获代码中的错误, 可以在一定程度上帮助格式化代码。比如eslint中的`no-var`这一个规则，就代表了我们不能再使用`var`关键字来定义变量了，而是只能用`let`或者`const`来定义变量(常量)。

## 配置ESLint

二种方式：
1. 通过代码中的ESLint注释
2. 通过配置文件

最新版配置项（老版本不在本文展示）
- files
- ignores
- languageOptions
- linterOptions
- processor
- rules
- plugins
- setting

## files
files字段代表了你需要ESLint帮你检查哪些代码文件。

## ignores
ignores字段表示你需要ESLint忽略哪些代码文件，即不用ESLint去检查这些文件的代码。

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
- script 类似script标签

### parser
ESLint中默认的解析器只能解析标准的JavaScript代码，但是可以通过自定义解析起，来实现对非标准的JavaScript的检查（例如React的JSX、flow、TypeScript等）

### globals
配置全局变量，有两种值
1. writable 可以重写
2. readonly 不能重写

## rules
rules是ESLint的规则，ESLint按照rules中配置的规则来进行代码检查

rules有众多的规则，例如
- no-unused-vars   不能定义了变量却不使用
- no-var   不能使用var关键字声明变量
- no-console       不能使用console来打印
- semi        代码语句结尾不能不写分号

### 预定义的规则配置
在@eslint/js包中，eslint有自己推荐的默认配置，有两个配置，
- js.configs.all 这个会有所有的配置
- js.configs.recommended 这个会有推荐的配置规则

## plugins
插件里面有很多规则，可以直接使用插件中的已经配置好的规则

- 可以导入插件，然后自己一个一个使用插件中的规则，但是规则必须要制定插件的前缀名
- 还可以直接导入插件的全部配置，这就是为什么配置项是一个数组，因为最后可以合并配置

## processor
通过processor配置可以从不是js的文件中提取出js的代码，然后检查代码中的错误

比如eslint-plugin-markdown

## settings
settings字段可以进行共享配置文件
