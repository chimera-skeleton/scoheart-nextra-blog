# Shell

Shell 是一门解释型语言，它由一系列的命令组成。

## Shell 解释器种类

- Bourne Shell (sh)
- Bourne Again SHell (bash)
- Friendly Interactive SHell (fish)
- C Shell (csh)
- Korn Shell (ksh)
- Z Shell (zsh)

Bash Shell: ~/.bash_profile or ~/.bashrc
Korn Shell: ~/.kshrc or .profile
Z Shell: ~/.zshrc or .zprofile

## shell 的执行方式区别

```shell
# 当前Shell环境
# 当前Shell环境中执行，而不是在一个新的子进程中执行。主要用于设置环境变量、函数等需要在当前Shell环境中生效的情况。
source script.sh
. script.sh

# Shell子进程
# 脚本在一个新的shell子进程中执行，适用于确保脚本在某种Shell解释器中运行的情况，特别是当系统的默认Shell不是需要的Shell解释器类型时。
sh script.sh
bash script.sh
zsh script.sh

# Shell子进程
# 使用相对路径或绝对路径来执行指定的脚本文件，脚本在一个新的子进程中执行，但不需要指定解释器。适用于已经给脚本文件添加执行权限，并且希望在脚本中指定解释器的情况。
./script.sh
/path/to/script.sh
```
