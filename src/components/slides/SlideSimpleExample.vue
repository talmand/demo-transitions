<template>
<div class="slide">
  <h2>A Simple Example</h2>

  <button class="example-button" @click="ifToggle = !ifToggle">toggle v-if</button>
  <div class="example">
    <transition name="fade">
      <div v-if="ifToggle">v-if example</div>
    </transition>
  </div>

  <p>The most basic example is to wrap an element that has a v-if or v-show controlling its visibility with a transition wrapper.</p>

<textarea is="pre-code"><transition>
  <div v-if="ifToggle">v-if example</div>
</transition></textarea>

    <p>This, in turn, will apply v- based classes to the affected elements in a specific sequence.</p>

<textarea is="pre-code">.v-enter, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: 0.5s;
}</textarea>

</div>
</template>

<script>
export default {
  name: 'slide-simple-example',

  data () {
    return {
      ifToggle: false
    }
  },

  mounted () {
    document.body.style.setProperty('--bodyBgColor', '#44364F');

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
  line-height: 60px;
}
</style>
