// custom-tab-bar/custom-tab-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        selected: 0,
        color: "#535353",
        selectedColor: "rgb(131,175,155)",
        list: [],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeTab(e) {
            let { index, url} = e.currentTarget.dataset;
            let { selected } = this.data;
            if (selected === index) return;
            wx.switchTab({
                url
            });
        },
        getCurrentPageUrl(){
          var pages = getCurrentPages()    //获取加载的页面
          var currentPage = pages[pages.length - 1]    //获取当前页面的对象
          var url = currentPage.route    //当前页面url
          return url
        },
    },
    lifetimes: {
      attached: function() {
        this.data.list.push({
          pagePath: "/pages/usersLists/usersLists",
          iconPath: "iconyonghu"
        });
        this.data.list.push({
          pagePath: "/pages/mine/mine",
          iconPath: "icongerenzhongxinxuanzhong"
        });
        this.setData({
          list: this.data.list
        });
      },
      ready: function() {
        var url = this.getCurrentPageUrl();
        var pageIndex;
        this.data.list.forEach((item, index) => {
          if (url === `/${item.pagePath}`) {
            pageIndex = index ;
          }
        });
        this.setData({ selected: pageIndex });
      }
    }
})
