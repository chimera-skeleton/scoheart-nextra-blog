# Development process

## NPM Packages with Figma

- @figma/plugin-typings

## Create plugin project manually

### Installation

- @figma/plugin-typings
- typescript

### manifest.json

- name 插件名称
- id 唯一标识，插件更新发版相关
- api 插件使用的 Figma API 的版本
- main 主程序 JS 文件入口
- ui 字符串或者对象
  - 字符串：UI HTML 的相对路径，可在代码中使用**html**获取
  - 对象：多个 UI HTML 的相对路径，可在代码中使用**uiFiles**获取
- networkAccess 网络访问权限，还在公测 pulic beta 版本
  - allowedDomains
- parameters 启动参数设置
- parameterOnly 必须通过启动参数启动
- editorType 画布种类
  - figma
  - figjam
  - dev dev 是 beta 版本
- menu 菜单
- relaunchButtons 重启按钮
- enableProposedApi
- capabilities 插件访问能力
- codegenLanguages 代码生成的语言种类

### API

#### figma

- root
- currentPage

#### Global Objects

- \_\_html\_\_
- \_\_uiFiles\_\_

#### Node Types && Node Properties

- Document Node 通过 figma.root 访问
  - Page Node 通过 figma.currentPage 访问

### codegen 插件开发

#### manifest.json 文件配置

```json
{
  "editorType": ["dev"],
  "capabilities": ["codegen"],
  "codegenLanguages": [
    { "label": "React", "value": "react" },
    { "label": "Vue", "value": "vue" }
  ]
}
```

#### index.ts 文件
``` ts

```