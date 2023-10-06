Core Semantics（核心语义）包括以下几个部分：

1. 请求方法的意图（Request Method Intentions）：这是指HTTP请求方法（如GET、POST、PUT等）所传达的操作或意图。不同的请求方法用于执行不同的操作，例如获取资源、创建新资源、更新资源等。
    
2. 扩展的语义（Extensions to Semantics）：这是指可以在请求头字段中描述的额外语义信息，这些信息可以扩展请求或响应的含义，以满足特定需求。
    
3. 状态码（Status Codes）：状态码用于描述HTTP响应的结果或状态，指示请求是否成功，是否发生错误，以及错误的类型。HTTP状态码通常以3位数字表示，如200（成功）、404（未找到）等。
    
4. 其他控制数据和资源元数据（Other Control Data and Resource Metadata）：这包括响应字段中可能提供的其他与资源相关的信息，例如资源的创建日期、修改日期、大小等。
    
5. 表示元数据（Representation Metadata）：这是描述内容如何由接收方解释的信息，包括内容类型、字符编码、语言等。
    
6. 请求头字段（Request Header Fields）：这些是包含在HTTP请求中的头部字段，它们可以影响内容的选择和处理，例如Accept字段用于指定首选的响应内容类型。
    
7. 内容协商（Content Negotiation）：内容协商是一组算法，用于在客户端和服务器之间选择最合适的表示形式，以满足客户端的需求。这包括根据Accept头字段选择响应的内容类型等。