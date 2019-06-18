// pages/books/books.js

const api = require("../../config/config.js");
const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        booklist: [],
        dots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        circular: true, 
        next: '100rpx',
        showloading: true
    },

    getbooklist: function(){
        let that = this;
        //app.dologin()
        wx.request({
            url: api.getbookurl,
            data: {
                want: 1
            },
            success: function (res) {
                let data = res.data;
                if (data.result === 0) {
                    setTimeout(function () {
                        //debugger;
                        that.setData({
                            booklist: data.data,
                            showloading: false
                        });
                    },800)
                }
            },
            error: function (err) {
                console.log(err)
            }
        })
    },
    godetail: function(res){
        let info = res.currentTarget.dataset;
        let url ="../detail/detail?";
        for (let key in info) {
            info[key] = encodeURIComponent(info[key]);
            url = url + key + "=" + info[key] + "&";
        }
        url = url.substring(0,url.length - 1);
        wx.navigateTo({
            url: url,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // if (options.msg == 0){
        this.getbooklist()
        // }
        
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