<template>
  <div id="tab-bar">
    <TabBarItem v-for="item in tabBarItems" :path="item.path">
      <img slot="icon" :src="item.icon">
      <img slot="active-icon" :src="item.activeIcon" >
      <div slot="text">{{ item.name }}</div>
    </TabBarItem>
  </div>
</template>

<script>
  import TabBarItem from "@/components/tabbar/TabBarItem";

  export default {
    name: "TabBar",
    components: {
      TabBarItem
    },
    data() {
      return {
        tabBarItems: [
          {
            name: '京东',
            path: '',
            icon: require('@/assets/img/tabbar/home.svg'),
            activeIcon: require('@/assets/img/tabbar/home_active.svg')
          },
          {
            name: '京东',
            path: '',
            icon: require('@/assets/img/tabbar/home.svg'),
            activeIcon: require('@/assets/img/tabbar/home_active.svg')
          },
          {
            name: '京东',
            path: '',
            icon: require('@/assets/img/tabbar/home.svg'),
            activeIcon: require('@/assets/img/tabbar/home_active.svg')
          },
          {
            name: '京东',
            path: '',
            icon: require('@/assets/img/tabbar/home.svg'),
            activeIcon: require('@/assets/img/tabbar/home_active.svg')
          }
        ]
      }
    }
  }
</script>

<style scoped>
#tab-bar {
  /* 本身的样式 */
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0 -1px 10px 1px #cccccc;

  /* 定位相关 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 利用flex进行布局 */
  display: flex;
  text-align: center;
}
</style>


