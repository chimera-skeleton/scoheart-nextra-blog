# Array

## notes
- copying method
- mutating method
- iterative method 

sparse arrays 稀疏数组


## Create
### Array.prototye.concat
参数：concat(...values)
返回：数组的shadow copy
不改变原数组 copying method
``` js
let arr = [
    { name: "shuhao" },
    { name: "yuliang" },
    { name: "zhouxin" },
]

let arr2 = { name: "lirui" }

let newArr = arr.concat(arr2)
console.log(newArr)

arr[1].name = "dududuud"
arr2.name = "zhangsan"

console.log(arr)
console.log(newArr)

```

### Array.prototype.push
参数：push(...values)
返回：数组的length
改变原数组 mutating method

### Array.prototype.unshift
参数：unshift(...values)
返回：数组的length
改变原数组 mutating method

一次推多个和多次推一个的结果不一样

## Delete
### Array.prototye.pop()
参数：无
返回：已经删除的那个元素
改变原数组 mutating method

### Array.prototye.shift()
参数：无
返回：已经删除的那个元素
改变原数组 mutating method

## Update
### Array.prototye.splice()
参数：start, deleteCount, ...item
返回：已经删除的元素数组
改变原数组 mutating method

## Read
### Array.prototye.at()
参数：index
返回：index处的元素、undefined
不改变原数组

## Other
### Array.prototype.join
参数：separator
返回：拼接好的字符串
不改变原数组

### Array.prototye.slice()
参数：start, end
返回：新的部分数组
不改变原数组 copying method

### Array.prototye.filter()
参数：callback, this
callback(element, index, array)
返回：新的过滤后的数组, 浅拷贝的数组
不改变原数组 copying method、iterative method 


      单元测试
组件   可视化测试
	   e2e

changesets

