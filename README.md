<!--
 * @Author: your name
 * @Date: 2020-07-08 11:50:26
 * @LastEditTime: 2020-07-16 10:52:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\readme.md
--> 
# React-admin

## 暂时停更，最近才发现自己写的是个什么玩意，待时机成熟后进行进一步的优化与后续更新

## 开发背景

之前有看到[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)的项目，喜欢它构建的后台管理系统，但是是基于vue的，所以想要用react实现一个相同的管理系统，并附上开发教程

### 项目地址

- [效果演示地址](http://1.15.52.173/react-admin/index.html#/login) 所处地区域名备案太麻烦，暂时先用ip访问吧

### 分支说明

- master是本人开发使用的原始分支，涉及到与node交互，需要搭配node项目使用，node项目地址为 git@github.com:mf950511/react-admin.git 
- release分支是去除了node交互的分支，可以直接本地运行，减少了node对开发人员的影响，有需要的话可以clone本分支研究

### 技术栈使用

- 前端技术栈：react、react-router、redux、typescript、webpack、antd、react-intl

## 使用方式（release分支）

```js
// 克隆项目
git clone git@github.com:mf950511/react-admin.git

// 进入文件件
cd react-admin

// 安装依赖
npm install


// 进入开发模式
npm run dev

// 新建终端，打开ts检查
npm run check
```

之后会自动打开 http://localhost:9998即可进行开发

## 相关开发文档

- [从零构建一个react-hooks的后台管理系统(1) -- 项目配置](http://1.15.52.173/blog/react_md_1/)
- [从零构建一个react-hooks的后台管理系统(2) -- 项目配置](http://1.15.52.173/blog/react_md_2/)
- [从零构建一个react-hooks的后台管理系统(3) -- 项目配置](http://1.15.52.173/blog/react_md_3/)
- [从零构建一个react-hooks的后台管理系统(4) -- 项目问题修复](http://1.15.52.173/blog/react_md_4/)
- [从零构建一个react-hooks的后台管理系统(5) -- webpack打包优化](http://1.15.52.173/blog/react_md_5/)
- [从零构建一个react-hooks的后台管理系统(6) -- ESLint引入](http://1.15.52.173/blog/react_md_6/)
- [react hooks 下使用redux](https://juejin.im/post/5f0d80d65188252e884e8228)
- [react hooks下封装通用redux](https://juejin.im/post/5f0d95e66fb9a07eb90cbdd8)

