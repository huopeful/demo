// components/inputnumber/inputnumber.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表，用来申明我子组件需要父页面给我传递什么样的数据
   */
  properties: {
    initCount:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  attached(){
    // console.log(this)
    this.setData({
      count:this.data.initCount
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    substrict(){
      if(this.data.count <= 1) return

      this.setData({
        count:--this.data.count
      })

      this.notify()
    },
    add(){
      this.setData({
        count: ++this.data.count
      })

      this.notify()
    },
    //在这里统一传值给父页面
    notify(){
      this.triggerEvent('numberChange', {count:this.data.count})
    }
  }
})
