<template>
  <div>
    <h1>编程语言</h1>
    <slot :message="languageList" name="languageName">
      <div v-for="item in languageList">
        {{item}}
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Language",
  data() {
    return {
      languageList: ['Java', 'C++', 'Python', 'Go']
    }
  }
}
</script>

<style scoped>

</style>