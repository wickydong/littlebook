//app.js
const api = require('config/config.js');
//var  usermsg = {};
App({
    onLaunch: function(){
        //this.dologin()
    },  
    checksession: function (callback=()=>{}) {   //检查skey是否存在，不存在需登录
        let that = this;        //存在即验证session是否过期，否则跳转
        let loginflag = wx.getStorageSync('skey'); //过期则登录
        if (loginflag) {
            console.log(loginflag);
            wx.checkSession({
                success: function () {
                    console.log("session未过期");
                    callback()
                    // wx.switchTab({
                    //     url: '/pages/books/books',
                    // })
                },
                fail: function () {
                    console.log("session过期，执行登录");
                    that.dologin(callback)
                }
            })
        } else {
            console.log("没有登录态，执行登录");
            that.dologin(callback)
        }
    },
    dologin: function (callback=function(){}) {
        let that = this;
        wx.login({    //调用登录api，获取code向后端发起请求
            success: function (res) {
                if (res.code) {
                    //that.userinfo(res.code,callback);
                    wx.request({
                        url: api.loginurl,
                        data: {code: res.code},
                        success: function(msg){
                            msg = msg.data;
                            console.log(msg)
                            if (msg.status==0){
                                wx.setStorageSync('skey', msg.skey);
                                callback()
                            }else {
                                console.log("后端服务器返回错误");
                                that.showinfo(msg.errmsg)
                            }
                        },
                        fail: function(msg){
                            console.log("后端服务器请求失败");
                            that.showinfo(msg)
                        }
                    })
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

    userinfo: function (msg,callback=function(){}) {            //获取用户授权情况，如果用户尚未授权获取信息，就申请授权后，调用接口获取用户信息
        let that = this;
        let skey = wx.getStorageSync('skey');
        if (skey){
            msg = JSON.parse(msg);
            msg['skey'] = skey;
            wx.request({
                url: api.userinfourl,
                data: msg,
                success: function(res){
                    res = res.data;
                    if (res.status==0){
                        msg['balance'] = res.ubalance;
                        wx.setStorageSync('userinfo', msg);
                        callback()
                    }else {
                        console.log("用户查询更新请求数据库失败")
                    }
                }
            })
        }else {
            console.log("没有登录态，请求什么用户信息")
        }


        // wx.getUserInfo({
        //     withCredentials: false,
        //     success: function (msg) {
        //         if (msg.rawData) {
        //             wx.request({
        //                 url: api.insertuserinfo,
        //                 data: {
        //                     rawdata: msg.rawData,
        //                     signature: msg.signature,
        //                     // encrypteddata: msg.encryptedData,
        //                     // iv: msg.iv
        //                 },
        //                 success: function (res) {
        //                     res = res.data;
        //                     if (res.status == 0) {
        //                         wx.setStorageSync('userinfo',msg.rawdata);
        //                         that.globalData.userinfo = msg.rawData;
        //                         callback()
        //                         // wx.switchTab({
        //                         //     url: '/pages/books/books',
        //                         // })

        //                     } else {
        //                         that.showinfo(res.errmsg);
        //                         console.log("后端服务器返回错误数据")
        //                     }
        //                 },
        //                 fail: function (msg) {
        //                     console.log("请求后端服务器接口失败");
        //                     that.showinfo(msg)
        //                 }
        //             })
        //         } else {
        //             that.showinfo("获取用户信息失败")
        //         }
        //     },
        //     fail: function (err) {
        //         console.log("获取用户数据失败" + err);
        //         that.showinfo("获取用户数据失败");
        //         // that.setData({ "showloading": false })
        //     }
        // });
    },

    showinfo: function (msg) {
        console.log(msg)
    },
})