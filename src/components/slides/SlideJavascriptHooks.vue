<template>
<div class="slide">
  <h2>Javascript Hooks</h2>
  <p>Much like custom CSS transition classes, Vue provides for Javascript hooks to be used with a third-party animation library. This example uses <a href="https://greensock.com/">Greensock</a>.</p>
  <div class="container">
    <button class="example-button" @click="show = !show">toggle</button>
    <div class="box-container">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <div v-show="show" class="box"></div>
      </transition>
    </div>
  </div>

<textarea is="pre-code"><transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
  <div v-show="show" class="box"></div>
</transition>
</textarea>

<textarea class="js" is="pre-code">beforeEnter: function (el) {
  el.style.bottom = '500px';
  el.style.opacity = 0;
},
enter: function (el) {
  TweenLite.to(el, 1, { ease: Bounce.easeOut, bottom: 0 });
  TweenLite.to(el, 1, { opacity: 1 });
},
leave: function (el) {
  TweenLite.to(el, 1, { ease: Bounce.easeIn, bottom: 500 });
  TweenLite.to(el, 1, { opacity: 0 });
}
</textarea>
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
    beforeEnter: function (el) {
      el.style.bottom = '500px';
      el.style.opacity = 0;
    },
    enter: function (el) {
      // eslint-disable-next-line
      TweenLite.to(el, 1, {
        // eslint-disable-next-line
        ease: Bounce.easeOut,
        bottom: 0
      });
      // eslint-disable-next-line
      TweenLite.to(el, 1, {
        opacity: 1
      });
    },
    leave: function (el) {
      // eslint-disable-next-line
      TweenLite.to(el, 1, {
        // eslint-disable-next-line
        ease: Bounce.easeIn,
        bottom: 500
      });
      // eslint-disable-next-line
      TweenLite.to(el, 1, {
        opacity: 0
      });
    }
  },

  mounted () {
    document.body.style.setProperty('--bodyBgColor', '#422827');

    document.querySelectorAll('pre code').forEach(preCode => {
      // eslint-disable-next-line
      hljs.highlightBlock(preCode);
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
}
.box-container {
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
  transition: background-color var(--speedNormal);
  width: 100px;
}
</style>
