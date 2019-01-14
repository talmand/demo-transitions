<template>
<div class="slide">
  <h2>Named Transitions</h2>

  <p>Transitions can be named, which will provide for custom classes prefixed with the name instead of the default v. This way different effects can be achieved and applied as desired.</p>
  
  <h3>Generic Transition</h3>
  <pre id="code1"><code class="html">{{ code1 }} </code></pre>

  <h3>Named Transition</h3>
  <pre id="code2"><code class="html">{{ code2 }} </code></pre>
</div>
</template>

<script>
export default {
  name: 'slide-named-transitions',

  data () {
    return {
      code1: `<transition>
  
.v-enter, .v-enter-to, .v-enter-active,
.v-leave, .v-leave-to, .v-leave-active`,
      code2: `<transition name='homer'>

.homer-enter, .homer-enter-to, .homer-enter-active,
.homer-leave, .homer-leave-to, .homer-leave-active`
    }
  },

  mounted () {
    // eslint-disable-next-line
    hljs.highlightBlock(document.querySelector('#code1 code'));
    // eslint-disable-next-line
    hljs.highlightBlock(document.querySelector('#code2 code'));
  }
}
</script>

<style lang="scss" scoped>

</style>
