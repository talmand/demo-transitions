<template>
<div class="slide">
  <h2>Javascript Hooks</h2>
  <button @click="show = !show">toggle</button>
  <div class="container">
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <div v-show="show" class="box"></div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: 'slide-javascript-hooks',

  data () {
    return {
      show: false
    }
  },

  methods: {
    beforeEnter: function (el, done) {
      el.style.bottom = '500px';
      el.style.opacity = 0;
    },
    enter: function (el, done) {
      TweenLite.to(el, 1, {
        ease: Bounce.easeOut,
        bottom: 0
      });
      TweenLite.to(el, 1, {
        opacity: 1
      });
    },
    leave: function (el, done) {
      TweenLite.to(el, 1, {
        ease: Bounce.easeIn,
        bottom: 500
      });
      TweenLite.to(el, 1, {
        opacity: 0
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  border: {
    color: rebeccapurple;
    radius: 7px;
    style: solid;
    width: 2px;
  }
  height: 100px;
  margin: 10px;
  position: relative;
  width: 100px;
}
.box {
  background-color: rebeccapurple;
  border-radius: 7px;
  bottom: 0;
  height: 100px;
  position: relative;
  right: 0;
  transform: translate3d(-1px, -1px, 0);
  transition: background-color 0.5s;
  width: 100px;

  &:hover {
    background-color: red;
  }
}
</style>
