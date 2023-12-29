# venv

venv（Python Virtual Environment）是 Python 的一种虚拟环境管理工具，用于创建和管理项目的独立 Python 环境。虚拟环境是一个包含特定 Python 版本和库的目录，与系统的 Python 环境相互独立，使得每个项目都可以有自己的依赖关系，防止不同项目之间的冲突。

## 创建虚拟环境

```shell
# Unix/Unix-like OS
python3 -m venv <env_name>

# Windows
python -m venv <env_name>
```

## 启动虚拟环境

```shell
# Unix/Unix-like OS
source <env_name>/bin/activate

# Windows
<env_name>\Scripts\activate.bat
```

## 安装依赖

在虚拟环境中安装依赖包，也可以使用 pip 命令。下载的包会保存在虚拟环境目录下的 `lib/python3.x/site-packages` 文件夹中。

```shell
# Unix/Unix-like OS
pip3 install <package_name>

# Windows
pip install <package_name>
```

## 退出虚拟环境

```shell
# Unix/Unix-like OS
deactivate

# Windows
deactivate
```
