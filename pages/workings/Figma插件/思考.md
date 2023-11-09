
## Figma相关
- 组件集
- 组件
- 变体
- 实例
- 实例解绑
- auto layout

## C2D
### Semi Design的思考
Code to Design（简称 C2D），指代码转设计稿。
What：作为 D2C 的前置流程，Semi C2D 输入 Semi 组件，输出 Figma 设计资产
Why：节省设计师维护 Figma 变体的成本，人工维护 -> 代码自动生成。保持设计与代码的同步

### 自我思考
在设计稿转成代码之前，有这样的一个代码转设计稿的思路：
- 创建自己的组件库
- 将组件库预先C2D，将组件库的组件变成Figma的UI Kit

## D2C
### Semi Design的思考
Design to Code（简称 D2C），指设计稿转代码。
What：识别 Figma 设计稿中的 Semi 组件和所在页面，一键转代码，自动生成对应的 JSX 和 CSS
Why：节省 JSX、布局和样式相关编码人力，研发只需关注交互逻辑和事件的绑定

### 自我思考
如何实现设计稿转代码：
- 假设为底层组件库支持的组件
  - preprocessing: 设定 Figma设计稿组件 与 代码组件库中组件 之间的转换规则映射
  - processing: 解析Figma画布中的所有Node,根据名称或者类型等…… 映射成代码组件库中的组件代码
  - postprocessing: 生成代码，展示在dev Mode下的code栏中，或者是Figma插件的UI中

调研到Figma插件还能与下面两个东西结合，详细情况还在调研中……
- Storybook
- Github

https://crazynote.v.netease.com/2023/0209/4422069aef7c817e5ec1bfb157fda38e.mp4

https://juejin.cn/post/7205016004924293157?searchId=20231109100019A8795361B28EDB30CB43#heading-0