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

  <p>The most basic example is to wrap an element that has a v-if or v-show controlling its visibility with a transition element.</p>

<pre v-text="`<transition>
  <div v-if='ifToggle'>v-if example</div>
</transition>`"></pre>

    <p>This, in turn, will apply specific v- based classes to the affected elements.</p>

<pre v-text="`.v-enter, .v-leave-to {
  opacity: 0;
}
.v-enter-active, .v-leave-active {
  transition: 0.5s;
}`"></pre>

</div>
</template>

<script>
export default {
  name: 'slide-simple-example',

  data () {
    return {
      ifToggle: false,
      showToggle: false
    }
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
