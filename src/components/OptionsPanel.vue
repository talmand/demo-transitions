<template>
<div id="options" :class="{active: isActive}">
  <button @click="toggleDark">toggle light/dark mode</button>
  
  <select class="slides" v-model="slide" @change="$root.$emit('options:skipToSlide', parseInt($event.target.value))">
    <option value="" selected disabled hidden>skip to...</option>
    <option v-for="(slide, index) in slides" :value="index" :key="index">{{ slide }}</option>
  </select>

  <select class="slide-animation" v-model="animation" @change="$root.$emit('options:changeSlideTransition', $event.target.value)">
    <option value="" selected disabled hidden>choose slide transition...</option>
    <option v-for="(animation, index) in animations" :value="index" :key="index">{{ animation }}</option>
  </select>

  <select class="hljs-styles" v-model="style" @change="changeStyle">
    <option value="" selected disabled hidden>change code highlight to...</option>
    <option v-for="(style, index) in styles" :value="style" :key="index">{{ style }}</option>
  </select>

  <select class="speeds" v-model="speedFactor" @change="changeSpeed">
    <option value="" selected disabled hidden>change speed factor...</option>
    <option v-for="(speed, index) in speeds" :value="speed" :key="index">{{ speed }}%</option>
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
      slide: '',
      animation: '',
      style: '',
      speedFactor: '',
      speeds: [0, 50, 100, 200]
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
    }
  }
}
</script>

<style lang="scss" scoped>
#options.active {
  transform: translate3d(0, 0, 0);
  transition: var(--speedNormal) cubic-bezier(0.215, 0.61, 0.355, 1);
}

#options {
  background-color: #333;
  border-right: 7px solid rebeccapurple;
  box-shadow: 0 0 40px 10px rgba(0,0,0,0.75);
  contain: strict;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate3d(-150%, 0, 0);
  transition: var(--speedNormal) cubic-bezier(0.55, 0.055, 0.675, 0.19);
  width: 300px;
  will-change: transform;
  z-index: 100;

  > * {
    margin: 10px;
    padding: 10px;
  }
}
</style>
