# rollup

## rollup + ts 实现打包

```shell
npm install rollup typescript @rollup/plugin-typescript tslib -D
```

### 配置 rollup.config.js

```js
import typescript from "@rollup/plugin-typescript";

/**
 * @type {import("rollup").RollupOptions}
 */

const config = {
  input: "src/code.ts",
  output: {
    dir: "dist",
  },
  plugins: [typescript()],
};

export default config;
```
