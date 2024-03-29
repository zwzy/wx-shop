Component({
  /**
   * 组件的属性列表
   */
  properties: {
    state: {
      type: Object,
      value: {
        loading: false,
        noData: false,
        loadFail: false
      }
    },
    stateText: {
      type: Object,
      value: {
        loadingText: '数据加载中...',
        noDataText: '暂无数据',
        loadFailText: '加载失败，点击重新加载',
        noMoreDataText: '没有更多的数据了...'
      }
    },
    tabIndex: Number,
    activeIndex: Number
  },
  /**
   * 组件的初始数据
   */
  data: {
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    reLoadListData() {
      this.triggerEvent('loadFailEvent')
    },
    onStockSearchEvent() {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    }
  }
})
