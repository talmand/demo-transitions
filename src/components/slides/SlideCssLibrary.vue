<template>
<div class="slide">
  <h2>Using a CSS Animation Library</h2>
  <p>The transition element provides a means to use custom transition classes that allows for using a third-party css animation library. In this example we are using <a href="https://daneden.github.io/animate.css/">Animate.css</a></p>

  <div class="example">
    <transition
      enter-active-class="animated rotateInDownLeft"
      leave-active-class="animated rotateOutUpRight"
      mode="out-in"
    >
      <div v-if="elseToggle" key="if">v-if example</div>
      <div v-if="!elseToggle" key="else">v-else example</div>
    </transition>
    <button class="example-button" @click="elseToggle = !elseToggle">toggle v-if/v-else</button>
  </div>

<textarea is="pre-code"><transition
  name="custom-else-transitions"
  enter-active-class="animated rotateInDownLeft"
  leave-active-class="animated rotateOutUpRight"
  mode="out-in"
>
  <div v-if="elseToggle" key="if">v-if example</div>
  <div v-if="!elseToggle" key="else">v-else example</div>
</transition></textarea>

  <p>No further CSS is required as the library handles that for us. We simply just tie the Vue transition classes to the library's animation classes.</p>
</div>
</template>

<script>
export default {
  name: 'slide-css-library',

  data () {
    return {
      ifToggle: false,
      elseToggle: true,
      test: 'test'
    }
  },

  mounted () {
    document.body.style.setProperty('--bodyBgColor', '#44364f');

    document.querySelectorAll('pre code').forEach(preCode => {
      // eslint-disable-next-line
      hljs.highlightBlock(preCode);
    });
  }
}
</script>

<style lang="scss" scoped>
.example {
  height: 60px;
  margin: 20px;
  text-align: center;
  width: 75%;
}
</style>
