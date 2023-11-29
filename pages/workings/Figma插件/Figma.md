# Figma 相关概念

- Component 组件
- ComponentSet 组件集合
- Variant 变体
- Instance 实例
- auto layout 自动布局
- assets 静态资源
- variable 变量
- variable Collection 变量集合
- style 样式
- prototype 原型

## FrameNode

需要用到各种图形元素的地方都应该使用 Frame（即 FrameNode），禁止使用 Rectangle（RectangleNode）等其他图形元素。

解释：在 Figma 提供的 Node Type 中，能与 DOM 中 Node Type 中的 HTMLDivElement 能做好规则映射的目前来看只有 FrameNode，其他图形元素如 RectangleNode 等，由于在 Figma 的 Node type 中无法获取例如 children 等属性，故在 DOM 中无法比较好的映射到 HTMLDivElement。

简而言之：非 FrameNode 无法映射到 HTMLDivElement。

## ComponentNode

在 Figma 设计稿中，如果出现大量的重复的元素，那么就应该考虑使用 Component（即 ComponentNode）。将重复的元素抽离成 Component，然后在需要的地方实例化使用 Component。

### ComponentSetNode

在 Figma 中，如果存在大量重复的 Component，那么就应该考虑使用 ComponentSet（即 ComponentSetNode）。将 Component 以及其不同的 Variant 放在一起构成 ComponentSet。

### Variant

在 Figma 中，如果存在多个 Component 的不同形态，那么就应该考虑使用 Variant， 通过 Variant 的方式实现一个组件的不同展示方式。将不同的 Variant 放在同一个 ComponentSet。

### InstanceNode

使用 Component 时，应该使用 Instance（即 InstanceNode）。

### auto layout

在 Figma 中，如果需要使用一维度的响应式布局，那么就应该使用 auto layout。

解释：方便影射于 CSS 中的 flex 一维布局。

### assets

Figma 中使用 Rectangle、Line 等这样的元素构建出来的图标，一定要放在一个根 FramNode 中。

解释：这样做会让 Figma 把这些元素自动识别为 assets。并且添加一个 isAssets 字段，能让插件识别出来，之后通过导出图片的方式导出。

### variable

Figma 可以将 Color Font Raduis 等作为变量预定义，来确保可重用性

### variable Collection

如果设置了很多 Variable 变量，那么应该有条理的封装分类
