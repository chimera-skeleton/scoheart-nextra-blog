# Figma API

## figma

### figma.currentPage

获取当前页面

## Node

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
