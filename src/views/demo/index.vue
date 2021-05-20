<template>
  <div>

  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>
/*div {*/
/*  width: 200px;*/
/*  height: 100px;*/
/*  background: red;*/
/*  !*transition: width .5s ease, height .5s linear;*!*/
/*  transition: all .5s;*/
/*}*/
/*div:hover {*/
/*  width: 500px;*/
/*  height: 200px;*/
/*}*/

div {
  width: 200px;
  height: 200px;
  background: red;
  animation: move 10s;
}
div:hover {
  animation-play-state: paused;
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(1000px, 0px);
  }
  50% {
    transform: translate(1000px, 500px);
  }
  75% {
    transform: translate(0, 500px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>