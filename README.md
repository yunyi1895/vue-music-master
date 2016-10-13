#说明

使用vue-cli搭建了一个小项目vue-music,手机端项目。

  
![image](https://github.com/yunyi1895/vue-music-master/blob/master/src/assets/QQ%E5%9B%BE%E7%89%8720160914130647.jpg?raw=true)
![image](https://github.com/yunyi1895/vue-music-master/blob/master/src/assets/QQ%E5%9B%BE%E7%89%8720160914130623.jpg?raw=true)
#如何使用


##安装
```
// 安装前请先确保已安装node和npm
//安装依赖(可以使用淘宝镜像cnpm)
npm install

//运行
npm run dev

//本地服务器建立 注意：再开个终端

node appserver.js

//localhost:6789
```

#问题
有时候API会挂 9月13号还是好好的，9月14号有时候会挂。
#问题已解决
api store 经常挂，我又找开发者要了一个接口，不过要跨域，所以走node，所以写了一个node服务器解决跨域问题。
