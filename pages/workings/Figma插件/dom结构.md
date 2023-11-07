# DOM 数据结构与 Figma 数据结构梳理

## DOM Data Types

```mermaid
graph RL;
    Node --> EventTarget
    DocumentType --> Node
    Document/HTMLDocument --> Node
    DocumentFragment --> Node
    Element --> Node
    Attr --> Node
    CharactData --> Node

    XMLDocument --> Document/HTMLDocument
    
    HTMLElement --> Element
    SVGElement --> Element

```
### docs

[Node 文档](https://developer.mozilla.org/en-US/docs/Web/API/Node)
[DocumentType 文档](https://developer.mozilla.org/en-US/docs/Web/API/DocumentType)
[Document 文档](https://developer.mozilla.org/en-US/docs/Web/API/Document)
[DocumentFragment 文档](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
[Element 文档](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Figma Data Types

```mermaid   
graph RL;
    PageNode --> DocumentNode
```
