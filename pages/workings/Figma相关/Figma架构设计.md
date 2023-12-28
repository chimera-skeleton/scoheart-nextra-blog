# Figma 架构设计

> 相关文章

- https://www.figma.com/blog/introducing-browserview-for-electron/
- https://www.figma.com/blog/rust-in-production-at-figma/
- https://www.figma.com/blog/how-we-built-the-figma-plugin-system/

## Figma Web App

Figma 的 Web 端应用程序，未使用传统的 JavaScript 语言开发，而是利用 Rust 编写，再编译成浏览器能理解的 WebAssembly 字节码格式，从而达到接近原生应用的性能。

## Figma Desktop App

Figma 使用 Electron 作为其桌面应用程序的开发框架。
