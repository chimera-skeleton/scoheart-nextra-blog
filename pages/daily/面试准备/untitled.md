#setDefaults 
## fn - createInstance

### return
AxiosInstance
``` ts
export interface AxiosInstance extends Axios {
  <T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
  <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;

  defaults: Omit<AxiosDefaults, 'headers'> & {
    headers: HeadersDefaults & {
      [key: string]: AxiosHeaderValue
    }
  };
}
```

## class - Axios

## instance/props 
- Axios.interceptors.request
- Axios.interceptors.response

## prototype/fn - Axios.prototype.request

## chain
axios中称之为middleware，类似于koa的中间件
Hook up interceptors middleware 用来链接所有的拦截器中间件

请求拦截器会通过数组的unshift方法进入chain
响应拦截器会通过数组的push方法进入chain

最终执行都会通过shift方法执行
因为执行的时候是通过Promise的链式调用，所以需要一个成功的回调和一个失败的回调
这里就巧妙的采用了一个undefined占位

### requestInterceptors
### responseInterceptors

## dispatchRequest 

## 扩展面试
### call bind apply
1. 三者区别

2. axios中为什么不直接使用bind
答：可能是那时候没有bind，或者说是为了兼容性？

### 如何拷贝一个对象的属性

### 数组方法

### Promise相关
- Promise.resolve

### 编码方式
- 比特
- 字节
- 字符
- 字符集 逻辑上对字符的定义
- 字符编码 物理上对字符的实现

序列化、反序列化
- IDL interface description language
- 非IDL JSON、XML

二进制编码：使用0和1表示数据的编码方式，是计算机内部数据表示的基础。

十进制编码：使用0到9的十个数字表示数据的编码方式，常用于一般数值表示。

八进制编码：使用0到7的八个数字表示数据的编码方式，通常以前缀"0"表示，如075表示八进制的75。

十六进制编码：使用0到9和A到F的十六个字符表示数据的编码方式，通常以前缀"0x"表示，如0x1A表示十六进制的1A。

ASCII编码：用于表示文本字符的编码方式，将字符映射到7位二进制数字，包括标准ASCII和扩展ASCII。

Unicode编码：用于表示全球各种语言字符的编码方式，提供了更广泛的字符集，包括UTF-8、UTF-16和UTF-32等编码方式。

压缩编码：用于减小数据大小以节省存储空间或提高传输效率的编码方式，如Gzip、LZ77、Huffman编码等。

Base64编码：将二进制数据编码成可打印字符的编码方式，常用于在文本中嵌入二进制数据，如在电子邮件中嵌入图像。

URL编码：将特殊字符转换为%符号后跟两位十六进制数字的编码方式，用于在URL中传输数据。

声音编码：用于将声音信号编码成数字形式的编码方式，如MP3、AAC、WAV等。

图像编码：用于将图像数据编码成数字形式的编码方式，如JPEG、PNG、GIF等。

视频编码：用于将视频数据编码成数字形式的编码方式，如H.264、H.265、VP9等。

### MIME types
A media type (also known as a Multipurpose Internet Mail Extensions or MIME type) indicates the nature and format of a document, file, or assortment of bytes. MIME types are defined and standardized in IETF's RFC 6838.

Internet Assigned Numbers Authority (IANA) 

type/subtype

#### type
##### discrete type
- application
- audio
- example
- font
- image
- text
- video

#### multipart type
- message
- multipart

#### 重要的web MIME type
- application/octet-stream
- text/plain
- text/css
- text/html
- text/javascript


