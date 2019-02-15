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
      <div v-else class="picklerick" key="picklerick">
        <div class="picklequote" :class="`quote${currentQuoteClass}`" :data-quote="quotes[currentQuote]" @animationend="onQuoteEnd"></div>
      </div>
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
      currentQuote: 0,
      currentQuoteClass: 0,
      quotes: ["I'm a pickle!", "I'm Pickle Rick!", 'Look at me!', 'Flip the pickle!', 'BOOM!!'],
      toggle: true
    }
  },

  methods: {
    onQuoteEnd: function () {
      this.currentQuote = Math.floor(Math.random() * this.quotes.length);
      this.currentQuoteClass = this.currentQuoteClass === 3 - 1 ? 0 : this.currentQuoteClass + 1;
    }
  },

  mounted () {
    document.body.style.setProperty('--bodyBgColor', '#755e39');

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

.picklequote {
  color:#4e8125;
  font-family: 'Luckiest Guy';
  font-size: 30px;
  left: 0;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: 300px;

  &::before {
    content: attr(data-quote);
  }
}
.quote0 {
  animation: quote0 1s;
}
.quote1 {
  animation: quote1 1s;
}
.quote2 {
  animation: quote2 1s;
}

@keyframes quote0 {
  from {
    font-size: 10px;
    opacity: 0;
    transform: translate3d(-260px, 0, 0) rotate3d(0, 0, 1, -15deg);
  }
  to {
    font-size: 30px;
    opacity: 1;
    transform: translate3d(-260px, 20px, 0) rotate3d(0, 0, 1, -25deg);
  }
}
@keyframes quote1 {
  from {
    font-size: 10px;
    opacity: 0;
    transform: translate3d(-250px, 160px, 0) rotate3d(0, 0, 1, 15deg);
  }
  to {
    font-size: 30px;
    opacity: 1;
    transform: translate3d(-250px, 180px, 0) rotate3d(0, 0, 1, 25deg);
  }
}
@keyframes quote2 {
  from {
    font-size: 10px;
    opacity: 0;
    transform: translate3d(130px, 80px, 0) rotate3d(0, 0, 1, 25deg);
  }
  to {
    font-size: 30px;
    opacity: 1;
    transform: translate3d(130px, 100px, 0) rotate3d(0, 0, 1, 15deg);
  }
}
</style>
