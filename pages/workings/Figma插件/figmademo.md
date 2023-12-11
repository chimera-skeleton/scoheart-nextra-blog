# Figma问题记录

## 任何元素都应该用Frame支撑布局
![Alt text](image-25.png)

## 丢弃冗余结点
例如下面的顶部导航栏
![Alt text](image-5.png)

例如右方的圆形元素
![Alt text](image-9.png)

例如这些
![Alt text](image-15.png)

## 隐藏元素如何解决
![Alt text](image-10.png)
![Alt text](image-11.png)

## 静态资源问题
- 一个图标的设计，只能有一个root结点
- 并且推荐也使用FrameNode（GroupNode应该也可以，为了统一还是推荐FrameNode）
- 如果包含组件或者组件示例，figma就无法整体识别Assets了
![Alt text](image-6.png)
![Alt text](image-7.png)
![Alt text](image-8.png)
![Alt text](image-24.png)

## GroupNode没有布局方式问题
- GroupNode没有layoutMode，无法映射布局维度
- 即还是推荐全部的布局占位只用FrameNode
![Alt text](image-12.png)

## FrameNode VS Rectangle、Line……
- Rectangle、Line构建的这种线条之类的图形，也推荐FrameNode实现
![Alt text](image-20.png)
![Alt text](image-21.png)

- 并且这东西没有高度？但是在Figma设计稿中能显示
![Alt text](image-22.png)

## 组件化思想
- 前端开发中组件拆分的思想，如何让UI落地实践？
![Alt text](image-17.png)
![Alt text](image-16.png)
![Alt text](image-18.png)
![Alt text](image-19.png)

## 不定数量转换问题
- 一些列表应该是依靠服务端接口等提供的数据来实现具体数量的动态渲染，如何识别这些？
![Alt text](image-23.png)