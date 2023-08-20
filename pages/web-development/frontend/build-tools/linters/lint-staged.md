# lint-staged
lint-staged可以帮我们只对在git暂存区的所有文件进行操作

## installation
``` shell
yarn add lint-staged -D
```

## usage
``` shell
touch lint-staged.config.js
```

``` js
module.exports = {
	"*": "eslint"
}