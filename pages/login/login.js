// pages/login/login.js
const app = getApp();
const api = require("../../config/config.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "showloading": true
    },

    checksession: function () {   //检查skey是否存在，不存在需登录
        let that = this;        //存在即验证session是否过期，否则跳转
        let loginflag = wx.getStorageSync('skey'); //过期则登录
        if (loginflag) {
            console.log(loginflag);
            wx.checkSession({
                success: function () {
                    wx.switchTab({
                        url: '/pages/books/books',
                    })
                },
                fail: function () {
                    that.dologin()
                }
            })
        } else {
            console.log("FROM ME")
            that.dologin()
        }
    },
    dologin: function () {
        let that = this;
        wx.login({    //调用登录api，获取code向后端发起请求
            success: function (res) {
                if (res.code) {
                    that.userinfo(res.code);
                    //console.log("from login", usermsg);

                } else {
                    that.showinfo("登录失败,接口未返回code");
                    console.log('登录失败，原因：' + res.errMsg)
                }
            },
            fail: function (res) {
                that.showinfo('调用登录接口失败');
                console.log('调用登录接口失败，原因：' + res)
            }
        })
    },

    userinfo: function (code) {            //获取用户授权情况，如果用户尚未授权获取信息，就申请授权后，调用接口获取用户信息
        let that = this;
        wx.getUserInfo({
            withCredentials: false,
            success: function (msg) {
                if (msg.rawData) {
                    wx.request({
                        url: api.loginurl,
                        data: {
                            code: code,
                            rawdata: msg.rawData,
                            signature: msg.signature,
                            // encrypteddata: msg.encryptedData,
                            // iv: msg.iv
                        },
                        success: function (msg) {
                            msg = msg.data;
                            if (msg.status == 0) {
                                wx.setStorageSync('skey', msg.skey);
                                console.log(msg.skey);
                                wx.switchTab({
                                    url: '/pages/books/books',
                                })

                            } else {
                                //that.showinfo(res.errmsg);
                                console.log("后端服务器返回错误数据")
                            }
                        },
                        fail: function (msg) {
                            console.log("请求后端服务器接口失败");
                            that.showinfo(msg)
                        }
                    })
                } else {
                    that.showinfo("获取用户信息失败")
                }
            },
            fail: function (err) {
                console.log("获取用户数据失败" + err);
                that.showinfo("获取用户数据失败");
                that.setData({"showloading": false})
            }
        });
    },

    showinfo: function (msg) {
        console.log(msg)
    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.checksession()
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