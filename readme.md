# nodejs

官网：http://nodejs.cn/

+ fs
+ http
+ util
+ Buffer
+ koa


### cli  脚手架开发
```hash
# 建文件 安装

mkdir vue-auto-router-cli
cd vue-auto-router-cli
npm init -y
npm i commander download-git-repo ora handlebars figlet clear chalk open -s

# bin/kkb.js
#指定脚本解释器为node
#!/usr/bin/env node
console.log('cli...')
# package.json
"bin": {
 "kkb": "./bin/kkb.js"
},

# 执行
npm link

kkb
#> cli...
```
