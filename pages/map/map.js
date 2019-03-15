//index.js
//获取应用实例
// var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
// var qqmapsdk;
const app = getApp();
Page({
  data: {
    markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    curLongitude: '0',
    curLatitude: '0'
  },
  regionchange(e) {
    console.log(e.type)
  },
  onLoad: function () {
    const that = this;
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        console.log('this:',that)
        that.setData({
          curLongitude: longitude,
          curLatitude: latitude
        })
      }
    })
  },
  
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
