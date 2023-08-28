# 使用echarts构建依赖分析图

## 快速上手
首先获取容器
```js
const echartsContainer = document.querySelector("container");
```

其次创建echarts的实例对象
```js
const MyEcharts = echarts.init(echartsContainer)
```

最后设置echarts配置项
```js
const option = {
	title: {
		text: "First Echarts"
	},
	series: {
		type: "graph",
		nodes: [
			{ name: 'Series 1', value: 100 },
			{ name: 'Series 2', value: 200 },
			{ name: 'Series 3', value: 150 },
		]
	}
}

MyEcharts.setOption(option)
```
## title
对标题的一些配置
### text
设置标题

### top left right bottom 
设置标题的位置

### subtext
设置副标题

## tooltip
- trigger
- triggerOn
- formatter

## toolbox

## color
可以改变图例的颜色，值是一个数组

## legend
图例，可以和series配合使用

### data
用来设置有多少图例的，可以根据series.name 或者series.data.name来筛选。

关系图就是通过series.data.name来筛选。

## xAxis, yAxis
坐标轴配置，用于设置横纵轴的显示和标签

## dataZoom
数据区域缩放功能，允许用户放大或缩小数据的显示范围

## animation
动画配置，控制图表的初始化和更新动画效果

