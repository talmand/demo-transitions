<template>
<div id="options" :class="{active: isActive}">
  <button @click="togglePanel" class="toggle-panel">?</button>
  <button @click="toggleDark">toggle light/dark mode</button>
  
  <label for="slides">skip to slide...</label>
  <select id="slides" class="slides" v-model="slide" @change="$root.$emit('options:skipToSlide', parseInt($event.target.value))">
    <option v-for="(slide, index) in slides" :value="index" :key="index">{{ slide }}</option>
  </select>

  <label for="animations">choose slide transition...</label>
  <select id="animations" class="slide-animation" v-model="animation" @change="$root.$emit('options:changeSlideTransition', $event.target.value)">
    <option v-for="(animation, index) in animations" :value="index" :key="index">{{ animation }}</option>
  </select>

  <label for="styles">change code highlight to...</label>
  <select id="styles" class="hljs-styles" v-model="style" @change="changeStyle">
    <option v-for="(style, index) in styles" :value="style" :key="index">{{ style }}</option>
  </select>

  <label for="speeds">change speed factor...</label>
  <select id="speeds" class="speeds" v-model="speedFactor" @change="changeSpeed">
    <option v-for="(speed, index) in speeds" :value="speed.factor" :key="index">{{ speed.display }}</option>
  </select>
</div>
</template>

<script>
export default {
  name: 'options-panel',

  props: {
    animations: Array,
    isActive: Boolean,
    slides: Array,
    styles: Array
  },

  data () {
    return {
      slide: 0,
      animation: 1,
      style: 'atom-one-dark-reasonable',
      speedFactor: 1,
      speeds: [
        {factor: 0, display: '0%'},
        {factor: 2, display: '50%'},
        {factor: 1, display: '100%'},
        {factor: 0.5, display: '200%'}
      ]
    }
  },

  methods: {
    changeStyle: function () {
      // this is for the highlight.js library
      // swaps out the current highlight stylesheet
      // stylesheets are also available as page styles in the browser
      const hljs_styles = document.querySelectorAll('.hljs');
      
      hljs_styles.forEach(style => {
        if (style.getAttribute('title') === this.style) {
          style.setAttribute('rel', 'stylesheet');
          style.disabled = false;
        } else {
          style.setAttribute('rel', 'alternate stylesheet');
          style.disabled = true;
        }
      });
    },
    changeSpeed: function () {
      document.body.style.setProperty('--speedFactor', this.speedFactor)
    },
    toggleDark: function () {
      document.body.classList.toggle('dark-mode', this.darkMode);
    },
    togglePanel: function () {
      this.$parent.activateOptionsPanel = !this.$parent.activateOptionsPanel;
    }
  }
}
</script>

<style lang="scss" scoped>
#options.active {
  box-shadow: 0 0 40px 10px rgba(0,0,0,0.75);
  transform: translate3d(0, 0, 0);
  transition: var(--speedNormal) cubic-bezier(0.215, 0.61, 0.355, 1);
}

#options {
  background-color: #333;
  border-right: 7px solid rebeccapurple;
  box-shadow: 0 0 0 0 rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate3d(-100%, 0, 0);
  transition: var(--speedNormal) cubic-bezier(0.55, 0.055, 0.675, 0.19);
  width: 300px;
  will-change: transform;
  z-index: 100;

  label {
    color: #fff;
    font-size: 16px;
    margin: 10px 10px 0 10px;
  }
  button,
  select {
    margin: 10px;
    padding: 10px;
  }
}

.toggle-panel {
  background: none;
  border-radius: 7px;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  opacity: 0.25;
  position: absolute;
  right: -60px;
}
</style>
