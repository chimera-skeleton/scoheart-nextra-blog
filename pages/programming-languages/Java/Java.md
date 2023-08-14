## Java的特性
- 简单性
- 健壮型
- 面向对象
- 可移植性 跨平台

## Java的执行过程
- 编译阶段
``` java
javac Helloworld
```

- 执行阶段
``` java
java Helloworld
```

## Java Helloworld 发生了什么
1. 启动JVM
2. 类加载器在当前目录去找Helloworld类对应的Helloworld.class文件
3. 找到之后装在到JVM中，JVM启动解释器 将字节码解释为机器码（二进制码），操作系统执行机器码和硬件交互

## 关于Java的一些环境变量
classpath环境变量：配置之后就可以告诉类加载器，它应该去那里加载类，而且只能去配置的路径加载

javahome环境变量：tomcat需要用到

## Java注释
- 单行注释
- 多行注释
- javadoc注释

