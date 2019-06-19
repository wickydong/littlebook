// pages/me/me.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo: {},
        haslogin: false,
        hasinfo: false
    },

    login: function(){
        app.dologin(this.modifystatus);
    },
    modifystatus: function(){
        this.setData({haslogin: true});
        console.log(this.data.haslogin);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },

    getuserinfo: function(e){
        let that = this;
        if (e.detail){
            wx.setStorageSync('userinfo', e.detail.rawData)
            that.setData({hasinfo: true,userinfo:e.detail.userInfo})
        }
        //拿到数据与后端比对，存入数据库中并写入本地缓存
        
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let that = this;
        let infostatus = wx.getStorageSync('userinfo');
        console.log(infostatus);
        // this.setData({haslogin: wx.getStorageSync('skey') ? true:false});
        app.checksession(this.modifystatus);
        if (infostatus) {
            console.log("from here");
            that.setData({ hasinfo: true, userinfo: infostatus });
            console.log(that.data.userinfo)
        }
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