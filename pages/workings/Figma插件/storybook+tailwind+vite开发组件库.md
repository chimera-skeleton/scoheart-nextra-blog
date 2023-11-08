# Vite + Tailwind + Storybook 开发组件库

## 相关 npm 包初始化

- vite
- storybook
- tailwind

```shell
# vite CLI 创建vite项目
npm create vite@lastest -- --template react

# storybook CLI初始化Storybook配置
npm x storybook@latest init

# tailwind CLI初始化tailwind配置
npm install tailwind -D
# 由于是在vite脚手架中，tailwind在此就担任了postcss的一个插件，还需要下载autoprefixer做兼容
npm install postcss autoprefixer -D
npm x tailwind init

```

## Storybook 兼容 TailwindCSS

由于是 vite 脚手架项目，则只需要在 storybook 的 preview 文件中导入 tailwind 的 CSS 文件即可

## Story 的编写

```typescript

```
