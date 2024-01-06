# 环境变量
## 命令解释器
### Windows
- cmd
- powershell

### Linux
- sh
- zsh
- bash

### Unix （类UNIX）
- zsh
- bash
- sh

## 什么是环境变量
环境变量就是存在电脑上的一个全局的变量

## 环境变量分类
### 用户变量
专属与某个用户的全局变量
- 用户级别的环境变量（用户变量）
### 系统变量
所有用户都可以查看使用的全局变量
- 系统级别的环境变量（系统变量）

## 环境变量举例
- PWD 当前目录
- HOME 家目录
- PATH 路径
### 查看环境变量
```
env
```

### PATH变量
我们每次在终端输入一条指令，就会自动的在PATH变量保存的所有目录中去寻找这个指令的可执行文件。

## .bashrc中的rc
rc ---》 run commands。

rc是任何脚本类文件的后缀，这些脚本通常在程序的启动阶段被调用，通常是Linux系统启动时，即程序开机启动脚本。如/etc/rc（连接到/etc/rc.d/rc）是Linux启动的主脚本，而.bashrc是当Linux的bash shell启动后所运行的脚本。

## 设置环境变量
### 临时添加
#### Linux / Unix（类Unix）
``` shell
export env_var=3333
```

#### Windows
``` shell
set env_var=1111
```
### 永久添加

```
/root/.bashrc
/root/.bash_profile

JAVA_HOME=/jdk/bin
CLASS_HOME=/jdk

PATH=$PATH:$JAVA_HOME:$CLASS_HOME
export PATH

source .bashrc
```



zsh
``` shell
cd ~

vim .zshrc

DEMO=2222

export DEMO

source .zshrc

env
```

bash
``` shell
cd ~

vim .bashrc

export DEMO=3333

source .bashrc
```