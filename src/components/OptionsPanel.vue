<template>
<div id="options" :class="{active: isActive}">
  <button @click="toggleDark">toggle light/dark mode</button>
  
  <select class="slide-animation" v-model="animation" @change="$root.$emit('options:changeSlideTransition', $event.target.value)">
    <option value="" selected disabled hidden>choose slide transition...</option>
    <option v-for="(animation, index) in animations" :value="index" :key="animation">{{ animation }}</option>
  </select>

  <select class="slides" v-model="slide" @change="$root.$emit('options:skipToSlide', parseInt($event.target.value))">
    <option value="" selected disabled hidden>skip to...</option>
    <option v-for="(slide, index) in slides" :value="index" :key="slide">{{ slide }}</option>
  </select>

  <select class="hljs-styles" v-model="style" @change="changeStyle">
    <option value="" selected disabled hidden>change code highlight to...</option>
    <option v-for="style in styles" :value="style" :key="style">{{ style }}</option>
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
      style: ''
    }
  },

  methods: {
    changeStyle: function () {
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
    toggleDark: function () {
      document.body.classList.toggle('dark-mode', this.darkMode);
    }
  }
}
</script>

<style lang="scss" scoped>
#options.active {
  transform: translate3d(0, 0, 0);
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

#options {
  background-color: #333;
  border-right: 7px solid rebeccapurple;
  box-shadow: 0px 0px 40px 10px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate3d(-150%, 0, 0);
  transition: 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  width: 300px;
  z-index: 100;

  > * {
    margin: 10px;
    padding: 10px;
  }
}
</style>
