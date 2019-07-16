const app=getApp();

Page({
  data: {
    b: true
  },
  fn(){
    wx.request({
      url: 'https://cn.bing.com/search',
      data: { q: 'abc', safe: 'off'},
      method: 'get',
      dataType: 'text',
      success(res){
        console.log(res.data);
      },
      faild(){
        console.log('失败');
      }
    });

    /*wx.startBluetoothDevicesDiscovery({
      success: function(res) {
        console.log('成功');
      },
      fail(res){
        console.log('失败', res);
      }
    });*/


    /*wx.downloadFile({
      url: 'https://cn.bing.com/sa/simg/SharedSpriteDesktopRewards_022118.png',
      filePath: '1.png',
      success(){
        console.log('下载完成')
      }
    })*/

    /*const fs=wx.getFileSystemManager();

    fs.writeFile({
      filePath: 'a.txt',
      data: 'aabbcc',
      success(){
        console.log('写入成功');
      },
      fail(res){
        console.log('失败', res);
      }
    });*/

    /*wx.setKeepScreenOn({
      keepScreenOn: true,
    });
    wx.setScreenBrightness({
      value: 1,
    })*/

    /*wx.connectWifi({
      SSID: 'tplink3961',
      password: '123456',
      success(res){
        console.log('成功');
      },
      fail(res){
        console.log('失败', res);
      }
    })*/

    /*
    let obj=wx.getBatteryInfoSync();
    console.log(obj);
    */

    /*wx.scanCode({
      success(res){
        console.log(res);
      },
      fail(res){
        console.log('失败', res);
      }
    })*/
    /*wx.login({
      success(res){
        console.log(res.code);
      }
    })*/
    /*wx.getUserInfo({
      success(res){
        console.log(res);
      },
      fail(){
        console.log('失败');
      }
    })*/

    /*wx.showShareMenu({
      withShareTicket: true,
      success(){
        console.log('分享成功')
      }
    });*/

    /*wx.showToast({
      title: '随便显示点东西',
      icon: 'none',
      duration: 300
    })*/

    /*wx.showActionSheet({
      itemList: ['北京', '上海', '成都'],
      itemColor: '#F00',
      success(index){
        console.log(index)
      }
    })*/



    /*if(this.data.b){
      wx.showLoading({
        title: '请等待',
      })
    }else{
      wx.hideLoading();
    }
    
    this.setData({
      b: !this.data.b
    })*/
  },
})