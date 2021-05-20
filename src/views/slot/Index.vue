<template>
  <div>
    <language></language>
    <!-- 作用域插槽 v-slot的出现是为了代替原有的slot和slot-scope, v-slot ：后边是插槽名称，=后边是组件内部绑定作用域值的映射 -->
    <language v-slot:languageName="data">
      <div v-for="item in data.message">
        * {{item}}
      </div>
    </language>
    <tab-bar />
  </div>
</template>

<script>
import Language from "@/views/slot/Language";
import TabBar from '@/components/tabbar/TabBar'

export default {
  name: "Index",
  components: {
    Language,
    TabBar
  }
}
</script>

<style scoped>

</style>