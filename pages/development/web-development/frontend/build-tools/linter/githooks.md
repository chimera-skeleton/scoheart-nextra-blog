# Git Hooks
## Git Hooks是什么
Git Hooks（钩子）是在Git版本控制系统中的特定事件发生时触发的脚本或自定义命令。

类比于React Hooks、Vue Hooks。Git Hooks，就可以理解成js中的回调函数，这些Hook会在特定的时候被触发，从而让你在特定的时间点，实现想要的功能。

## Hooks的分类
https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
### 客户端Hooks
- pre-commit
- prepare-commit-msg
- commit-msg
- pre-rebase

### 服务器端Hooks
- pre-receive
- update
- post-receive

我们可以从.git/hooks目录中找到所有的Hooks样例代码（都以.sample结尾）

同时，里面的每一个文件就是它提供给我们的模版，我们只需要新建一个文件，将Hook的名字作为文件名（也可以直接去掉样例文件的.sample后缀）就成功创建了可触发的Hook

