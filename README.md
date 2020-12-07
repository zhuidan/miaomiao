# miaomiao
# 因接口不能访问只写了简单的tab跳转
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

### 总结  
```
props:{title:{type:String,default:"影院"}}  父组件  title="aa"
{path:"/*",redirect:'/movie'} 路由重定向,无论你访问的是/xxx都能自动跳动到movie页面
使用keep-alive  缓存 router-view
//git
git remote  显示远程仓库  没有
提交到 Github添加远程版本库
git remote add origin 地址   
git remote    会显示origin  远程地址的别名   
git push origin master
git checkout -b dev   创建分支并切换
git push origin dev   push开发分支
git checkout -b createComponents   创建分支并切换   在这里写的
写完以后
git add .  添加文件到仓库
git commit -m ""   提交暂存区到本地仓库
git checkout dev   切换到开发分支dev
git merge  createComponents --no-f  合并分支命令并记录   :q
git log   查看历史提交记录
git push origin dev   提交上传远程代码并合并
git branch  查看分支
git branch -d createComponents  删除createComponents分支
```

