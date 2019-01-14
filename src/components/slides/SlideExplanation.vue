<template>
<div class="slide">
  <h2>What is the transition wrapper?</h2>

<pre><code class="html">{{ code }}</code></pre>

  <p>Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:</p>

  <ul>
    <li>automatically apply classes for CSS transitions and animations</li>
    <li>integrate 3rd-party CSS animation libraries, such as Animate.css</li>
    <li>use JavaScript to directly manipulate the DOM during transition hooks</li>
    <li>integrate 3rd-party JavaScript animation libraries, such as Velocity.js</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'slide-explanation',

  data () {
    return {
      code: `<transition>
  <component></component>
</transition>

<transition>
  <div v-show="isHidden"></div>
</transition>
`
    }
  },

  mounted () {
    // eslint-disable-next-line
    hljs.highlightBlock(document.querySelector('pre code'));
  }
}
</script>

<style lang="scss" scoped>

</style>