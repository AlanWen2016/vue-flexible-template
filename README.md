# vue-flexible-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 开发流程

1. 创建项目
```shell
 vue create vue-flexible-template
```

2. 安装和配置flexible
```shell
npm install --save lib-flexible
```
3. 配置px2rem
```
 npm install --save-dev postcss-plugin-px2rem
```

```js
module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}
```
