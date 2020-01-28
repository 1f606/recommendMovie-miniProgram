Page({

  /**
   * 页面的初始数据
   */
  data: {
    WeekMovies:[],
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10',
      header: {
        'content-type': 'json'
      },
      success: data => {
        console.log(data.data.subjects)
        this.setData({
          WeekMovies: data.data.subjects
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:"每周推荐"
    }
  }
})