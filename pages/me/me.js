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
        app.dologin(this.modifyuserstatus);
    },
    modifyuserstatus: function(){
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
        console.log(e.detail);
        if (e.detail.rawData){
            app.userinfo(e.detail.rawData,this.modifyinfo)
        }
    },

    modifyinfo: function(){
        let that = this;
        let infostatus = wx.getStorageSync('userinfo');
        if (infostatus) {
            //infostatus = JSON.parse(infostatus)
            that.setData({hasinfo: true,userinfo: infostatus})
        }
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
        this.modifyinfo();
        // this.setData({haslogin: wx.getStorageSync('skey') ? true:false});
        app.checksession(this.modifyuserstatus)

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