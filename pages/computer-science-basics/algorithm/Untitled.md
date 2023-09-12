# 大O表示法

## 冒泡排序
执行    n-1               轮
交换    n-1-轮数      次

时间复杂度： n平方
``` js
for (let i = 0; i < arr.length - 1; i ++) {
	for(let j = 0; j < arr.length - 1 - i; j++) {
		if(arr[j] > arr[j + 1]) {
			const temp = arr[j]
			arr[j] = arr[j + 1]
			arr[j + 1] = temp 
		}
}
}
```

