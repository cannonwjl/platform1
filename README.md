********************************************************************
2018-7-31 
开始写跳蚤平台的代码
1）运用在app.json里注册初始化四个界面
2）搭建页面结构
3）引入图片

2018-8-11
多余无关文件太多
删除shop文件夹下page文件夹
优化主页
    1、更改文集和框架

2018-8-12
1、主页顶端白条问题  无法去掉
2、尝试将文件替换为之前比赛时的首页代码
3、还是存在白条
4、........（查找原因中）
5、解决主页顶端白条（在app.wxss中样式.container下 padding值改为 0 ）


2018-8-13
编写跳蚤市场
1、在shop中搭建框架
2、在app.wxss中编写样式
3、在shop.js编写模拟数据

<<<<<<< HEAD
2018-8-16 添加封装 --加入config.js 并且如果全局API 地址和APPkey --在utils下util.js对wx.request方法封装成utils的函数
注意：一般一个类下的函数成为方法 自定义不在类内称函数 可以认为是一个东西。

2018-8-17
改了来个文件路径错误

=======

2018-8-18
添加封装 
--加入config.js 并且如果全局API 地址和APPkey
--在utils下util.js对wx.request方法封装成utils的函数     
  注意：一般一个类下的函数成为方法   自定义不在类内称函数  可以认为是一个东西。
>>>>>>> b809b49b0973afb7ba8e607e8d9a790fa374c0a9


2018-8-21 
在18日改了俩个文件错误 现在上传 //
===============
尝试了网路连接服务在leanCloud上建了一个服务器 
===============
创建一个文件av-weapp-min.js  是一个配置文件 //为连接网路服务器做准备
创建一个文件av-live-query-weapp-min.js 实时更新功能

2018-8-22
建立网络服务器并且能够在网路服务器上添加数据  
花费大约几个点 毛病在于todo.js下文件 AV.Object.register(Todo);写成了AV.Object.reqister(Todo);注意写法
====================================================
暂时屏蔽掉了 server.js这个文件里所以代码  和  屏蔽掉了 inde.js下148行// address: res.data.result.address_component.street_number
消除了错误  以后用上的时候再改回来
====================================================
通过new AV.Query(Todo).find().then(todos => this.setData({ todos}).catch(console.error));方法完成了查询并显示在下面
======================================
//用户系统 即用用户信息登陆 前提在服务器上写上自己的  AppID和AppSecret
openid 当用户登陆服务器会在服务器端看到openid 用与用户以后的登陆等
//用户系统  对用户进行区分 把共有数据添加网络 并且通过ID知道是谁添加

2018-9-3
将跳蚤数据shop提取到一个文件shop-data.js内   
调试成功  2018-9-3 16:18完成

2018-9-4
将mail和shop文件下的movie 文件夹删除
准备将index文件下的数据提取到data文件下index-data.js下
2018-9-4 14:41 完成数据提取 将其提取到index-data.js文件内 

2018-9-21 
调试数据 能在mail.js界面是里打印出数组
.then(todos =>(this.setData({todos,},
                  console.log(todos)))

注意：这里写法  以下是简化写法  只有一行时才这么写
.then(todos => this.setData({ todos }))

接下来将取快递内的界面加好图片
