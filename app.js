//app.js
const api = require('./config/config.js');
//var  usermsg = {};
App({
    onLaunch: function(){
        //this.dologin()
    },
    // checksession: function(){   //检查skey是否存在，不存在需登录
    //     let that = this;        //存在即验证session是否过期，否则跳转
    //     let loginflag = wx.getStorageSync('skey'); //过期则登录
    //     if (loginflag) {
    //         wx.checkSession({
    //             success: function(){
    //                 wx.redirectTo({
    //                     // url: '/pages/books/books?msg=0',
    //                     url: '/pages/login/login?msg=0'
    //                 })
    //             },
    //             fail: function(){
    //                 that.dologin()
    //             }
    //         })
    //     }else {
    //         that.dologin()
    //     }
    // },
    // dologin: function(){
    //     let that = this;
    //     wx.login({    //调用登录api，获取code向后端发起请求
    //         success:function(res) {    
    //             if (res.code) {
    //                 that.userinfo(res.code);
    //                 //console.log("from login", usermsg);
                  
    //             }else {
    //                 that.showinfo("登录失败,接口未返回code");
    //                 console.log('登录失败，原因：'+ res.errMsg)
    //             }
    //         },
    //         fail: function(res){
    //             that.showinfo('调用登录接口失败');
    //             console.log('调用登录接口失败，原因：'+res)
    //         }
    //     })
    // },

    // userinfo: function(code){            //获取用户授权情况，如果用户尚未授权获取信息，就申请授权后，调用接口获取用户信息
    //     let that = this;
    //     wx.getUserInfo({
    //         withCredentials: true,
    //         success: function (msg) {
    //             if (msg.rawData) {
    //                 wx.request({
    //                     url: api.loginurl,
    //                     data: {
    //                         code: code,
    //                         rawdata: msg.rawData,
    //                         signature: msg.signature,
    //                         encrypteddata: msg.encryptedData,
    //                         iv: msg.iv
    //                     },
    //                     success: function (msg) {
    //                         msg = msg.data;
    //                         if (msg.status == 0) {
    //                             wx.setStorageSync('skey', msg.skey)
    //                             wx.redirectTo({
    //                                 url: '/pages/login/login?msg=0',
    //                                 // url: '/pages/books/books?msg=0',
    //                                 success: function (res) { console.log("成功", res) },
    //                                 fail: function (res) { console.log("失败", res) },
    //                             });

    //                         } else {
    //                             //that.showinfo(res.errmsg);
    //                             console.log("后端服务器返回错误数据")
    //                         }
    //                     },
    //                     fail: function (msg) {
    //                         console.log("请求后端服务器接口失败");
    //                         that.showinfo(msg)
    //                     }
    //                 })
    //             } else {
    //                 that.showinfo("获取用户信息失败")
    //             }
    //         },
    //         fail: function(err){
    //             console.log("获取用户数据失败"+err);
    //             that.showinfo("获取用户数据失败");
    //             // wx.redirectTo({
    //             //     url: '/pages/login/login',
    //             //     success: function (res) {
    //             //         console.log("跳转成功", res)
    //             //     },
    //             //     fail: function (res) {
    //             //         console.log("跳转失败", res)
    //             //     }
    //             // })
    //         }
    //     });
    //     //console.log("from userinfo",usermsg);
    //     //return usermsg
    // },

    // showinfo: function(msg){
    //     console.log(msg)
    // }



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // globalData: {

    // },
    // onLaunch: function(){
    //     this.dologin();
    // },
    
    
    // dologin: function(){
    //     let that = this;
    //     wx.login({
    //         success: function(res){
    //             if (res.code){
    //                 wx.getUserInfo({
    //                     withCredentials: true,
    //                     success: function(msg){
    //                         console.log(msg);
    //                         that.globalData.auth = true;
    //                         console.log(that.globalData.auth)   
    //                         wx.request({
    //                             url: api.loginurl,
    //                             data: {
    //                                 code: res.code, //wx.login获取到的临时登录凭证
    //                                 rawdata: msg.rawData, //用户非敏感信息
    //                                 signature: msg.signature,
    //                                 encryptedData: msg.encryptedData,
    //                                 iv: msg.iv
    //                             },
    //                             success: function(res){
    //                                 res = res.data;
    //                                 if (res.result == 0){
    //                                     that.globalData.userInfo = res.userinfo;
    //                                     wx.setStorageSync('userinfo', JSON.stringify(res.userinfo));
    //                                     wx.setStorageSync('loginflag',res.skey);
    //                                 } else {
    //                                     that.showInfo(res.errormsg);
    //                                 }
    //                             },
    //                             fail: function(error){
    //                                 that.showInfo('接口调用失败');
    //                                 console.log(error);
    //                             }
    //                         })
    //                     },
    //                     fail: function(){
    //                         wx.hideLoading();
    //                         that.checkuserinfopermission();
    //                         console.log("get user info fail！")
    //                     }
    //                 })
    //             } else {
    //                 that.showInfo('登录失败');
    //                 console.log('调用wx.login获取code失败')
    //             }
    //         },
    //         fail: function(error){
    //             that.showInfo('wx.login接口调用失败');
    //             console.log(error)
    //         }
    //     })
    // },

    // checkuserinfopermission: function(){
    //     let that = this;
    //     wx.getSetting({
    //         success: function(res){
    //             if (!res.authSetting['scope.userInfo']){
    //                 that.globalData.auth = false;
    //                 console.log(that.globalData.auth)
    //                 //opensetting()
    //             }
    //         }
    //     })
    // },

    // showInfo: function(info='error',icon='none'){ //封装wx.showToast方法
    //     wx.showToast({
    //         title: info,
    //         icon: icon,
    //         duration: 1500,
    //         mask: true
    //     })
    // },
    // opensetting: function(res){
    //    this.globalData.auth = res.detail.authSetting['scope.userInfo'];
    //    console.log(this.globalData.auth);
    //    this.dologin()
    // }


  
})