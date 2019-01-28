<template>
<div class="slide">
  <div class="bg-cards">
    <transition :name="currentTransition" :mode="currentMode">
      <div v-if="toggle" class="rick" key="rick"></div>
      <div v-else class="picklerick" key="picklerick"></div>
    </transition>
  </div>
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
      <div v-if="toggle" class="rick" key="rick"></div>
      <div v-else class="picklerick" key="picklerick"></div>
    </transition>
  </div>

  <button class="example-button" @click="toggle = !toggle">toggle</button>

<textarea is="pre-code"><transition :name="currentTransition" :mode="currentMode">
  <div v-if="toggle" class="rick" key="rick"></div>
  <div v-else class="picklerick" key="picklerick"></div>
</transition></textarea>
</div>
</template>

<script>
export default {
  name: 'slide-dynamic-named-transitions',

  data () {
    return {
      currentTransition: '',
      currentMode: '',
      toggle: true
    }
  },

  mounted () {
    document.querySelectorAll('pre code').forEach(preCode => {
      // eslint-disable-next-line
      hljs.highlightBlock(preCode);
    });
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

.bg-cards {
  height: 100%;
  left: 0;
  opacity: 0.05;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform: scaleX(-1);
  width: 100%;

  .rick,
  .picklerick {
    border-style: none;
    height: 100%;
    width: 100%;
  }
}
.cards {
  height: 180px;
  margin: 20px 0;
  position: relative;
  width: 180px;
}
.rick,
.picklerick {
  background: {
    position: center;
    repeat: no-repeat;
    size: contain;
  }
  border-radius: 10px;
  height: 180px;
  left: 0;
  line-height: 160px;
  position: absolute;
  top: 0;
  width: 180px;
}
.rick {
  background-image: url('/images/rick.png');
  border: 7px solid #abd5ea;
}
.picklerick {
  background-image: url('/images/picklerick.png');
  border: 7px solid #4e8125;
}
</style>
