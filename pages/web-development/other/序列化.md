# 序列化技术

## 单位
### bit 比特
比特是计算机内部数据处理和存储的基础，他可以表示两种状态：0或1

### byte 字节
一个字节由8个比特组成。通常用来度量存储容量、传输速度等

### character 字符
字符是人类语言中的基本单位，代表一个文本元素，如字母，数字、标点符号等。

### character set 字符集
字符集是一个特定的字符集合，定义了一种语言或一组相关语言中的可用的所有字符。就是字符的逻辑定义。

### encoding 编码
编码是将字符映射到比特序列的规则，以至于计算机可以存储处理文本。就是字符的物理存储方式。

#### 英文字符集与编码
- ASCII

#### 中文字符集与编码
- GB2312编码
- GBK编码
- GB18030编码
- Big5编码

#### Unicode字符集与编码
- UTF-32编码
- UTF-16编码
- UTF-8编码

## 序列化
### Serialization 序列化
序列化是指将数据结构或对象转换为一种格式，通常是比特流（一串比特的序列），以便能够在存储或传输时保留其状态。

### Deserialization 反序列化
反序列化是相反的过程，它将序列化的数据重新转换回原始的数据结构或对象。

### 序列化的技术选项方案维度
- 成熟度
- 跨语言
- 易用性
- 扩展性
- 性能

### 序列化方法
#### IDL
- JSON
- XML

#### 非IDL
- Thrift
- Protocol Buffer
- Avro

## 文本格式

### JSON
JavaScript Object Notation

#### JSON的结构
- key/value对的集合 A collection of name/value pairs
- 值的有序列表 An ordered list of values

数据类型
- string
- number
- true
- false
- null

### XML
Extensible Markup Language可扩展标记语言

### YAML
YAML Ain't Markup Language

YAML is a human-friendly data serialization language for all programming languages.

