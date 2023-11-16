## Figma 相关

- 组件集
- 组件
- 变体
- 实例
- 实例解绑
- auto layout

### Team
一个免费的team最多创建一个project

一个project最多创建3个Figma Design 和 三个FigJam Files

一个Figma Design最多创建3个page

## FrameNode

需要用到各种图形元素的地方都应该使用 Frame（即 Figma node type 中的 FrameNode），禁止使用 Rectangle（RectangleNode）等其他图形元素。

解释：在 Figma 提供的 Node Type 中，能与 DOM 中 Node Type 中的 HTMLDivElement 能做好规则映射的目前来看只有 FrameNode，其他图形元素如 RectangleNode 等，由于在 Figma 的 Node type 中无法获取例如 children 等属性，故在 DOM 中无法比较好的映射到 HTMLDivElement。

## ComponentNode

在 Figma 设计稿中，如果出现大量的重复的元素，那么就应该考虑使用 Component（即 ComponentNode）。将重复的元素作为 Component，然后在需要的地方实例化使用 Component。

### ComponentSetNode

在 Figma 中，如果存在大量重复的 Component，那么就应该考虑使用 ComponentSet（即 ComponentSetNode）。将重复的 Component 放在一起构成组件集合

### Variant

在 Figma 中，如果存在多个 Component 的不同形态，那么就应该考虑使用 Variant。将不同的形态放在同一个 Component。

### InstanceNode

使用 Component 时，如果需要使用不同的参数，那么就应该考虑使用 Instance。

### auto layout

在 Figma 中，如果需要使用自动布局，那么就应该使用 auto layout。方便影射于 CSS 中的 flex 一维布局。
