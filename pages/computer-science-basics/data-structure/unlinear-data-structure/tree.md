
## 深度优先遍历
``` js

```
## 广度优先遍历
``` js

```

## 先序遍历
``` js
var preorderTraversal = function (root) {
    let arr = []
    const pre = function (rootNode, arr) {
        if (!rootNode) return arr
        arr.push(rootNode.val)
        pre(rootNode.left, arr)
        pre(rootNode.right, arr)
    }
    pre(root, arr)
    return arr
};
```

## 中序遍历
``` js
var inorderTraversal = function(rootNoderoot) {
    let arr = []
    var mid = function (rootNode, arr) {
        if (!rootNode) return arr
        mid(rootNode.left, arr)
        arr.push(rootNode.val)
        mid(rootNode.right, arr)
    }
    mid(rootNoderoot, arr)
    return arr
};
```

## 后序遍历

