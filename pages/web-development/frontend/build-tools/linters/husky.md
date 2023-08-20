# Husky
## Husky
Husky是一个帮助我们管理Git Hooks的工具，可以更方便的对Hook进行编写、修改等操作

### installation
``` shell
yarn add husky -D
```

### usage
启动husky来管理Git Hooks
``` 
yarn husky install
```

添加新的Hook
```
yarn husky add .husky/pre-commit
```
