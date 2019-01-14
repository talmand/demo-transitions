<template>
<div class="slide">
  <h2>Using a CSS Animation Library</h2>
  <p>The transition element provides a means to use custom transition classes that allows for using a third-party css animation library.</p>
  <p>In these examples we are using <a href="https://daneden.github.io/animate.css/">Animate.css</a></p>

  <div class="examples">
    <div class="example">
      <button @click="ifToggle = !ifToggle">toggle v-if</button>
      <transition
        name="custom-if-transitions"
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <div v-if="ifToggle">v-if example</div>
      </transition>
    </div>
    <div class="example">
      <button @click="elseToggle = !elseToggle">toggle v-if/v-else</button>
      <transition
        enter-active-class="animated rotateInDownLeft"
        leave-active-class="animated rotateOutUpRight"
        mode="out-in"
      >
        <div v-if="elseToggle" key="if">v-if example</div>
        <div v-if="!elseToggle" key="else">v-else example</div>
      </transition>
    </div>
  </div>

  <pre><code class="html">{{ code }}</code></pre>

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
      code: `<transition
  name='custom-else-transitions'
  enter-active-class='animated rotateInDownLeft'
  leave-active-class='animated rotateOutUpRight'
  mode='out-in'
>
  <div v-if='elseToggle' key='if'>v-if example</div>
  <div v-if='!elseToggle' key='else'>v-else example</div>
</transition>`
    }
  },

  mounted () {
    // eslint-disable-next-line
    hljs.highlightBlock(document.querySelector('pre code'));
  }
}
</script>

<style lang="scss" scoped>
button {
  font-size: 18px;
  margin-bottom: 10px;
}

.examples {
  display: flex;
  width: 75%;

  .example {
    height: 60px;
    text-align: center;
    width: 50%;
  }
}
</style>
