# Module

## 全局模块

在 Windows 上：C:\Python\lib\site-packages
在 macOS 上：/Library/Python/\<version>/site-packages
在 Linux 上：/usr/lib/python\<version>/site-packages

## 定义模块

1. 文件即模块
   每一个 python 文件就是一个模块，模块名就是文件名。

2. 包
   包是一个包含有 `__init__.py` 文件的目录，该文件的内容可以为空。包名（目录名）也是模块名。

## 导入模块

```python
# module_name.py
def function1():
    print("function1")

def function2():
    print("function2")
```

```python
import module_name
moudel_name.function1()

import module_name as alias
alias.function1()

from module_name import function1, function2
function1()

from module_name import function1 as alias1, function2 as alias2
alias1()

from module_name import *
function1()
```
