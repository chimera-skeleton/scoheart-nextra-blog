## 创建真实DOM
``` js
document.createElement("h1")
```

## 创建虚拟DOM VDOM
### Vue2
``` javascript
new Vue({
	el: "#app",  // css 选择器 
	render: function (createElement) {
		const VDOM = createElement("h1", null, "i am h1")
	}
})
```

createElement函数
三个参数
- 标签名
- 属性
- 子元素
### Vue3

### React
``` jsx
const VDOM = React.createElement("h1", {
	id: "sdfsdfds",
	age: "12"
}, "shuhao")

ReactDOM.render(VDOM, document.getElementById("app"))
```


> grammar sugar
## Vue2 template
``` js
new Vue({
            el: "#app",  // css 选择器 
            template: `
            <h1>
                <h2>
                    <h3>
                        <h4>shuhao</h4>
                    </h3>
                </h2>
            </h1>
            `
        })

```

## React JSX
``` jsx
const VDOM = 
            <h1>
                <h2>
                    <h3>
                        <h4>shuhao</h4>
                    </h3>
                </h2>
            </h1>

ReactDOM.render(VDOM, document.getElementById("app"))
```

``` js
<script src="https://cdn.jsdelivr.net/npm/react@16.4.0/umd/react.development.js"></script>

<script src="https://cdn.jsdelivr.net/npm/react-dom@16.4.0/umd/react-dom.development.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.22.9/babel.min.js"></script>
```
## Components

命令行

拉模版


webpack rollup parcel vite
最开始的用途            一个。         打包JS
