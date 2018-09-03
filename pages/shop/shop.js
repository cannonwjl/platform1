var app = getApp();
var liveList=require("../../data/shop-data.js");

Page({
  data: {

    // 物件信息
  
  },
  onLoad: function () {
    console.log("已经运行到了shop初始化");
    console.log(liveList);
   //var liveList = liveList1.List[avid];
   // var avid=liveList.List[avid];
   // console.log(avid);
   //这里引入列表所以用liveList.List而不用liveList
    this.setData({liveList:liveList.List});
   }
})
