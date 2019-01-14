<template>
<div class="slide">
  <h2>A Simple Example</h2>

  <div class="examples">
    <div class="example">
      <button @click="ifToggle = !ifToggle">toggle v-if</button>
      <transition>
        <div v-if="ifToggle">v-if example</div>
      </transition>
    </div>
    <div class="example">
      <button @click="showToggle = !showToggle">toggle v-show</button>
      <transition>
        <div v-show="showToggle">v-show example</div>
      </transition>
    </div>
  </div>

  <p>The most basic example is to wrap an element that has a v-if or v-show controlling its visibility with a transition wrapper.</p>

<pre id="code1"><code class="html">{{ code1 }}</code></pre>

    <p>This, in turn, will apply specific v- based classes to the affected elements.</p>

<pre id="code2"><code class="css">{{ code2 }}</code></pre>

</div>
</template>

<script>
export default {
  name: 'slide-simple-example',

  data () {
    return {
      ifToggle: false,
      showToggle: false,
      code1: `<transition>
  <div v-if='ifToggle'>v-if example</div>
</transition>`,
      code2: `.v-enter, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: 0.5s;
}`
    }
  },

  mounted () {
    // eslint-disable-next-line
    hljs.highlightBlock(document.querySelector('#code1'));
    // eslint-disable-next-line
    hljs.highlightBlock(document.querySelector('#code2'));
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

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.5s;
}
</style>
