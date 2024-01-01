# MIME

https://www.iana.org/assignments/media-types/media-types.xhtml

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

https://www.rfc-editor.org/rfc/rfc6838.html

浏览不是通过文件扩展名来区分文件的，而是通过 MIME type 来区分文件的。`HTTP header field-line` 中的 `Content-Type` 告诉浏览器文件是什么类型，这样浏览器才能知道如何处理它。

## MIME 结构

一个 MIME 类型名称由以下部分组成：

- 媒体类型（top-level type）
- 媒体子类型（ subtype）
- 媒体类型参数（parameters）

```
type/subtype;parameter=value
```

例如下面这些：

```mime
application/json;charset=utf-8
text/html;charset=utf-8
video/mpeg;codecs="h264,mp3"
image/svg+xml;charset=utf-8
```

### top-level type

#### Discrete types

- application
- audio
- example
- font
- image
- model
- text
- video

#### Multipart types

- multipart
- message
