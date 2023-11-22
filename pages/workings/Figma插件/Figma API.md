# Figma API

## figma

### figma.ui

### figma.root

### figma.currentPage

获取当前页面

### figma.mode

- default
- codegen
- inspect

### figma.editorType

- figma
- figJam
- dev

当 figma.editorType 为 figma 时候，打开插件的时候是 figma.mode = default，此时 figma.showUI()会展示插件的 UI 在 figma 的画布上

当 figma.editorType 为 dev 时候，打开插件的时候是 figma.mode = inspect，此时 figma.showUI()会展示插件的 UI 在 figma 的开发模式中的 inspect 上

以上两种情况可以考虑公用一套 UI 布局

而当 figma.editorType 为 dev 时候，打开插件的时候是 figma.mode = codegen，此时不再需要 UI 的展示，直接通过 figma 在 dev mode 下面中的 UI 交互，来生成代码即可

### figma.on

```js
declare type ArgFreeEventType =
  | 'selectionchange'
  | 'currentpagechange'
  | 'close'
  | 'timerstart'
  | 'timerstop'
  | 'timerpause'
  | 'timerresume'
  | 'timeradjust'
  | 'timerdone'

on(type: ArgFreeEventType, callback: () => void): void
```

## Global Objects

- \_\_html\_\_
- \_\_uiFiles\_\_

## Node

跟样式相关的属性
- 大小
  - width
  - height
- 盒子模型
  - paddingTop
  - paddingRight
  - paddingBottom
  - paddingLeft
- flex布局
  - layoutMode 
  - itemSpacing - gap
- 背景色
  - background
  - fills




### node.type
```ts
type BaseNode =
  DocumentNode |
  PageNode |
  SceneNode

type SceneNode =
  BooleanOperationNode |
  CodeBlockNode |
  ComponentNode |
  ComponentSetNode |
  ConnectorNode |
  EllipseNode |
  EmbedNode |
  FrameNode |
  GroupNode |
  InstanceNode |
  LineNode |
  LinkUnfurlNode |
  MediaNode |
  PolygonNode |
  RectangleNode |
  SectionNode |
  ShapeWithTextNode |
  SliceNode |
  StampNode |
  StarNode |
  StickyNode |
  TableNode |
  TableCellNode |
  TextNode |
  VectorNode |
  WidgetNode |
  MediaNode

type NodeType =
  "BOOLEAN_OPERATION" |
  "CODE_BLOCK" |
  "COMPONENT" |
  "COMPONENT_SET" |
  "CONNECTOR" |
  "DOCUMENT" |
  "ELLIPSE" |
  "EMBED" |
  "FRAME" |
  "GROUP" |
  "INSTANCE" |
  "LINE" |
  "LINK_UNFURL" |
  "MEDIA" |
  "PAGE" |
  "POLYGON" |
  "RECTANGLE" |
  "SHAPE_WITH_TEXT" |
  "SLICE" |
  "STAMP" |
  "STAR" |
  "STICKY" |
  "TABLE" |
  "TABLE_CELL" |
  "TEXT" |
  "VECTOR" |
  "WIDGET"
```

### node.exportAsync

```ts
exportAsync(settings?: ExportSettings): Promise<Uint8Array>
exportAsync(settings: ExportSettingsSVGString): Promise<string>
exportAsync(settings: ExportSettingsREST): Promise<Object>

type ExportSettings =
  | ExportSettingsImage
  | ExportSettingsSVG
  | ExportSettingsPDF
  | ExportSettingsREST

interface ExportSettingsImage {
  readonly format: 'JPG' | 'PNG'
  readonly contentsOnly?: boolean
  readonly useAbsoluteBounds?: boolean
  readonly suffix?: string
  readonly constraint?: ExportSettingsConstraints
  readonly colorProfile?: 'DOCUMENT' | 'SRGB' | 'DISPLAY_P3_V4'
}
```

```js
node.exportAsync();
```
