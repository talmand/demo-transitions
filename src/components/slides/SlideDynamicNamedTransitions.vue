<template>
<div class="slide">
  <h2>Dynamic Named Transitions</h2>

  <p>It is possible to change both transition names and modes with dynamic properties driven by data. The data can be reactive to the state of the app allowing for a great deal of control over switching elements and components.</p>

  <div class="panel">
    <div class="transitions">
      <div>Transitions</div>
      <label>None <input type="radio" v-model="currentTransition" value="" /></label>
      <label>Fade <input type="radio" v-model="currentTransition" value="fade" /></label>
      <label>Slide <input type="radio" v-model="currentTransition" value="slide" /></label>
    </div>
    <div class="modes">
      <div>Modes</div>
      <label><input type="radio" v-model="currentMode" value="" /> None</label>
      <label><input type="radio" v-model="currentMode" value="out-in" /> Out-In</label>
      <label><input type="radio" v-model="currentMode" value="in-out" /> In-Out</label>
    </div>
  </div>

  <div class="cards">
    <transition :name="currentTransition" :mode="currentMode">
      <div v-if="toggle" class="cardA" key="A">A</div>
      <div v-else class="cardB" key="B">B</div>
    </transition>
  </div>

  <button @click="toggle = !toggle">toggle</button>

  <pre id="code1"><code class="html">{{ code1 }} </code></pre>
</div>
</template>

<script>
export default {
  name: 'slide-dynamic-named-transitions',

  data () {
    return {
      currentTransition: '',
      currentMode: '',
      toggle: true,
      code1: `<transition :name="currentTransition" :mode="currentMode">
  <div v-if="toggle" class="card" key="A">A</div>
  <div v-else class="card" key="B">B</div>
</transition>`
    }
  },

  mounted () {
    // eslint-disable-next-line
    hljs.highlightBlock(document.querySelector('#code1 code'));
  }
}
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  justify-content: space-between;
  width: 200px;

  div {
    display: flex;
    flex-direction: column;
  }
  label {
    cursor: pointer;
  }
  .transitions {
    text-align: right;
  }
}
.cards {
  height: 180px;
  margin: 20px 0;
  position: relative;
  width: 180px;

  .cardA,
  .cardB {
    background-color: #fff;
    border: 7px solid red;
    border-radius: 10px;
    color: red;
    font-size: 100px;
    height: 180px;
    left: 0;
    line-height: 160px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 180px;
  }

  .cardB {
    border-color: green;
    color: green;
  }
}
</style>
