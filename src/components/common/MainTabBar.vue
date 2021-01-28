<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/index_normal.png"/>
        <img slot="item-icon-active" src="@/assets/img/tabbar/index_active.png" />
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/device">
        <img slot="item-icon" src="@/assets/img/tabbar/Device_normal.png" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/Device_active.png" />
        <div slot="item-text">设备</div>
      </tab-bar-item>
      <tab-bar-item path="/minitor">
        <img slot="item-icon" src="@/assets/img/tabbar/Minitor_normal.png" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/Minitor_active.png" />
        <div slot="item-text">监控</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/Profile_normal.png" />
        <img slot="item-icon-active" src="@/assets/img/tabbar/Profile_active.png" />
        <div slot="item-text">个人中心</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
  export default{
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
