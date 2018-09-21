// pages/mail/mail.js

const AV = require('../../utils/av-weapp-min.js');
const Todo = require('../../model/todo.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:' http://lc-wII1Qlmc.cn-n1.lcfile.com/05e17e5087d0b8621ad4.jpg',
    imageclass:'',
    res_data:'',
    draft: "",
    todos: [],
    todo:''

  },

  /**
   * 生命周期函数--监听页面加载
   */

  query_file:function()
  {
    var query = new AV.Query('_File');
    //console.log(AV.Query('_File'));
    var now = new Date();
    query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo
    query.limit(10);// 最多返回 10 条结果
   // query.limit(10);// 最多返回 10 条结果
   // console.log(query);
    query.select(['objectId', 'url','name']);
    query.first().then(function (todo) {
      console.log(todo.get('objectId')); // √
      console.log(todo.get('url')); // √
      console.log(todo.get('name')); // undefined
      console.log(todo);
      console.log(todo.id);
    }, function (error) {
      // 异常处理
    });
    
  },



    //上传数据
   add_data:function()
   {
     // 该语句应该只声明一次
     var TestObject = AV.Object.extend('DataTypeTest');

     var number = 2014;
     var string = 'famous film name is ' + number;
     var date = new Date();
     var array = [string, number];
     var object = { number: number, string: string };

     var testObject = new TestObject();
     testObject.set('testNumber', number);
     testObject.set('testString', string);
     testObject.set('testDate', date);
     testObject.set('testArray', array);
     testObject.set('testObject', object);
     testObject.set('testNull', null);
     testObject.save().then(function (testObject) {
       // 成功
     }, function (error) {
       // 失败
     });
     console.log("add_data is runed");
   },
   //上传数据2
   add_data_1:function()
   {
     var Todo = AV.Object.extend('Todo');
     var todo = new Todo();
     todo.set('title', '工程师周会');
     todo.set('content', '每周工程师会议，周一下午2点');
     todo.set('location', '会议室');
     todo.save().then(function (todo) {
       // 成功保存之后，执行其他逻辑.
       console.log('New object created with objectId: ' + todo.id);
     }, function (error) {
       // 异常处理
       console.error('Failed to create new object, with error message: ' + error.message);
     });
     console.log("add_data_1 is runed")
   },

  onLoad: function (options) {
    
    var Todo = AV.Object.extend('_File');
    console.log("onload is start");
    var data_todo=new AV.Query(Todo).find().then(
     // this.data.todos=todos,
      todos =>(
        this.setData({
          todos,
      } ,
    // console.log(todos),
     this.setData({
       todos:todos
     })
        )
    ).catch(console.error),
    
    );
   //console.log(this.data.todos);
   
    //console.log("this is data_todo"+ ...data_todo);


    // wx.request({
    //   url: this.data.url,
    //   data: '',
    //   header: {},
    //   method: 'post',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {

    //       console.log(res);
    //       this.data.res_data=res;
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
      
    // }),
   
    //   this.setData({
    //     imageclass: this.data.res_data,
    //     url: this.data.url,
    //   })
  },

  
    //测试
    // console.log('updtaeDraft');
    //console.log(value);


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //  this.setData({
    //    url:this.data.url
    //  })
    // console.log("this is onReady");
    // console.log(this.data.todos);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("this is onShow");
    // console.log(this.data.todos);
    console.log(this.data.todos);
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})