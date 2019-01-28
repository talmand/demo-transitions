<template>
  <div
    id="container"
    :class="[slides[currentSlide], {'dark-mode': isDark}]"
  >
    <options-panel
      :animations="animations"
      :isActive="activateOptionsPanel"
      :slides="slides"
      :styles="styles"
      :speeds="speeds"
    />

    <transition :name="slideAnimation" mode="out-in" appear>
      <component :is='currentComponent' />
    </transition>

    <div id="panel">
      <button
        class="slide-button prev-slide"
        :class="{active: prevActive}"
        :disabled="currentSlide === 0"
        @click="prevSlide"
      >prev slide</button>
      <div class="slides">{{ currentSlide + 1 }} of {{ slides.length }}</div>
      <button
        class="slide-button next-slide"
        :class="{active: nextActive}"
        :disabled="currentSlide === slides.length - 1"
        @click="nextSlide"
      >next slide</button>
    </div>
  </div>
</template>

<script>
import OptionsPanel from '@/components/OptionsPanel.vue';

export default {
  name: 'app',

  components: {
    OptionsPanel
  },

  data: function () {
    return {
      activateOptionsPanel: false,
      animations: ['inout', 'fade', 'slide', 'rotate', 'spin'],
      currentComponent: 'slide-title',
      currentSlide: 0,
      isDark: false,
      nextActive: false,
      prevActive: false,
      speeds: [0.0, 0.25, 0.5, 1, 1.5, 3.0, 5.0],
      slides: ['slide-title', 'slide-explanation', 'slide-simple-example', 'slide-applied-classes', 'slide-named-transitions', 'slide-dynamic-named-transitions', 'slide-css-library', 'slide-javascript-hooks', 'slide-list-transitions'],
      styles: ['an-old-hope', 'atom-one-dark-reasonable', 'codepen-embed', 'default', 'ir-black', 'railscasts', 'sunburst'],
      hslNumber: 0,
      slideAnimation: 'fade'
    }
  },

  methods: {
    nextSlide: function () {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
        this.currentComponent = this.slides[this.currentSlide];
        document.body.style.setProperty('--slideEnter', '400px');
        document.body.style.setProperty('--slideLeave', '-400px');
        document.body.style.setProperty('--slideZEnter', '100px');
        document.body.style.setProperty('--slideZLeave', '-300px');
        document.body.style.setProperty('--rotateEnter', '90deg');
        document.body.style.setProperty('--rotateLeave', '-90deg');
        document.body.style.setProperty('--spinEnter', '180deg');
        document.body.style.setProperty('--spinLeave', '-180deg');
      }
    },
    prevSlide: function () {
      if (!this.currentSlide <= 0) {
        this.currentSlide--;
        this.currentComponent = this.slides[this.currentSlide];
        document.body.style.setProperty('--slideEnter', '-400px');
        document.body.style.setProperty('--slideLeave', '400px');
        document.body.style.setProperty('--slideZEnter', '-300px');
        document.body.style.setProperty('--slideZLeave', '100px');
        document.body.style.setProperty('--rotateEnter', '-90deg');
        document.body.style.setProperty('--rotateLeave', '90deg');
        document.body.style.setProperty('--spinEnter', '-180deg');
        document.body.style.setProperty('--spinLeave', '180deg');
      }
    },
    getHash: function () {
      // here we have a simple router
      // based on the hash matching an available slide
      // should I just use this for changingg slides??
      let hash = window.location.hash.replace(/^#/, '');
    
      if (this.slides.includes(hash)) {
        this.currentComponent = hash;
        this.currentSlide = this.slides.indexOf(hash);
      }
    }
  },

  created () {
    // just in case we start with a slide hash
    this.getHash();
  },

  mounted () {
    // emitted from options panel
    // jumps to selected slide
    this.$root.$on('options:skipToSlide', slide => {
      this.currentSlide = slide;
      this.currentComponent = this.slides[this.currentSlide];
    });

    // emitted from options panel
    // changes the current transition style of the slides changing
    this.$root.$on('options:changeSlideTransition', animation => this.slideAnimation = this.animations[animation]);

    // in case someone changes the hash to see a slide
    window.addEventListener('hashchange', this.getHash);

    // various keyboard shortcuts
    document.body.addEventListener('keyup', (e) => {
      // bumps to the next slide
      if (e.key === 'ArrowRight' && this.currentSlide < this.slides.length - 1 ) {
        this.nextActive = true;
        this.nextSlide();

        // transitonend is unreliable in this case for some reason
        // the timeout allows for the button "hover" effect when using arrow key
        setTimeout(() => {
          this.nextActive = false;
        }, 500);
      }
      // bumps to the previous slide
      if (e.key === 'ArrowLeft' && !this.currentSlide <= 0) {
        this.prevActive = true;
        this.prevSlide();

        // transitonend is unreliable in this case for some reason
        // the timeout allows for the button "hover" effect when using arrow key
        setTimeout(() => {
          this.prevActive = false;
        }, 500);
      }
      // toggles dark mode
      if (e.key === 'd') {
        this.isDark = !this.isDark;
      }
      // toggles options panel
      if (e.key === '`') {
        this.activateOptionsPanel = !this.activateOptionsPanel;
      }
      // shortcuts to change out transition styles
      if (['1', '2', '3', '4', '5'].includes(e.key)) {
        this.slideAnimation = this.animations[e.key - 1];
      }
    });
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

:root {
  --slideEnter: 400px;
  --slideLeave: -400px;
  --slideZEnter: 100px;
  --slideZLeave: -300px;
  --rotateEnter: 90deg;
  --rotateLeave: -90deg;
  --spinEnter: 180deg;
  --spinLeave: -180deg;
  --speedFactor: 1.0;
  --speedFast: 100ms;
  --speedNormal: 300ms;
  --speedSlow: 400ms;
}

html {
  box-sizing: border-box;
  margin: 0;
  min-height: 100vh;
  padding: 0;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background-color: #333;
  color: #333;
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 18px;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
  padding: 0;
}

.dark-mode {
  color: #f5f5f5;

  a {
    color: #fff;
  }

  .slide {
    background-color: #333;
  }
}

#container {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}

.example-button {
  background: lighten(rebeccapurple, 10);
  border-style: none;
  border: 3px solid darken(rebeccapurple, 10);
  border-left-width: 1px;
  border-right-width: 1px;
  border-radius: 9px;
  box-shadow: 0 3px 0 3px darken(rebeccapurple, 10);
  color: lighten(rebeccapurple, 50);
  cursor: pointer;
  font-size: 18px;
  margin: 10px 10px 13px;
  overflow: hidden;
  padding: 10px 40px;
  position: relative;
  z-index: 1;

  &:hover {
    &::before {
      padding-top: 100%;
      width: 100%;
    }
  }

  &:active {
    border-bottom-width: 1px;
    margin-top: 12px;
  }

  &::before {
    background: rebeccapurple;
    content: '';
    display: block;
    left: 50%;
    padding-top: 60%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 40deg);
    transform-origin: center;
    transition: calc(var(--speedNormal) * var(--speedFactor));
    width: 60%;
    z-index: -2;
  }
}

#panel {
  align-items: center;
  bottom: 0;
  display: flex;
  left: 0;
  position: fixed;
  width: 100vw;

  .slides {
    color: white;
    opacity: 0.25;
    text-align: center;
  }

  .slide-button {
    background: none;
    border-style: none;
    border-bottom: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    flex-grow: 1;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    margin: 10px 30px;
    opacity: 0.25;
    overflow: hidden;
    position: relative;
    transition: calc(var(--speedNormal) * var(--speedFactor));

    &.active,
    &:hover {
      opacity: 1;
    }
  }

  .prev-slide {
    border-left: 7px solid #fff;

    &::before {
      border-top: 1px solid #fff;
      content: '';
      display: block;
      left: 0;
      position: absolute;
      top: 0;
      transition: calc(var(--speedNormal) * var(--speedFactor));
      width: 25%;
    }
    &::after {
      border-left: 50px solid #fff;
      content: '';
      display: block;
      filter: blur(10px);
      height: 200%;
      left: 15%;
      opacity: 0.1;
      position: absolute;
      top: -30px;
      transform: rotate3d(0, 0, 1, -20deg);
      transition: calc(var(--speedNormal) * var(--speedFactor));
    }
    &.active,
    &:hover {
      &::before {
        width: 75%;
      }
      &::after {
        filter: blur(30px);
        left: -20px;
        opacity: 0.25;
        transform: rotate3d(0, 0, 1, 0deg);
      }
    }
  }
  .next-slide {
    border-right: 7px solid #fff;

    &::before {
      border-top: 1px solid #fff;
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      transition: calc(var(--speedNormal) * var(--speedFactor));
      width: 25%;
    }
    &::after {
      border-left: 50px solid #fff;
      content: '';
      display: block;
      filter: blur(10px);
      height: 200%;
      opacity: 0.1;
      position: absolute;
      right: 15%;
      top: -30px;
      transform: rotate3d(0, 0, 1, 20deg);
      transition: calc(var(--speedNormal) * var(--speedFactor));
    }
    &.active,
    &:hover {
      &::before {
        width: 75%;
      }
      &::after {
        filter: blur(30px);
        opacity: 0.25;
        right: -20px;
        transform: rotate3d(0, 0, 1, 0deg);
      }
    }
  }
}

.slide {
  align-items: center;
  background-color: #f5f5f5;
  border: 3px solid black;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  min-height: 50vh;
  opacity: 1;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  transition: calc(var(--speedFast) * var(--speedFactor));
  width: 75vw;

  h2, h3 {
    margin: 1rem;
  }

  p {
    text-align: justify;
    width: 75%;
  }

  ul {
    width: 75%;
  }
}

// component change transitions
.inout-enter { opacity: 0; transform: perspective(500px) translate3d(var(--slideEnter), 0, var(--slideZEnter)); }
.inout-enter-active { transition: opacity calc(var(--speedNormal) * var(--speedFactor)) cubic-bezier(0.645, 0.045, 0.355, 1), transform calc(var(--speedNormal) * var(--speedFactor)); }
.inout-leave-active { transition: opacity calc(var(--speedNormal) * var(--speedFactor)) cubic-bezier(0.645, 0.045, 0.355, 1), transform calc(var(--speedNormal) * var(--speedFactor)); }
.inout-leave-to { opacity: 0; transform: perspective(500px) translate3d(var(--slideLeave), 0, var(--slideZLeave)); }

.fade-enter,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: calc(var(--speedNormal) * var(--speedFactor)); }

.slide-enter { opacity: 0; transform: translate3d(var(--slideEnter), 0, 0); }
.slide-enter-active,
.slide-leave-active { transition: calc(var(--speedNormal) * var(--speedFactor)) cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.slide-leave-to { opacity: 0; transform: translate3d(var(--slideLeave), 0, 0); }

.rotate-enter { transform: perspective(2000px) rotate3d(0, 1, 0, var(--rotateEnter)); }
.rotate-enter-active, .rotate-leave-active { transition: calc(var(--speedNormal) * var(--speedFactor)) cubic-bezier(0.645, 0.045, 0.355, 1); }
.rotate-leave-to { transform: perspective(2000px) rotate3d(0, 1, 0, var(--rotateLeave)); }

.spin-enter { transform: perspective(500px) rotate3d(0, 0, 1, var(--spinEnter)); }
.spin-enter-active, .spin-leave-active { transition: calc(var(--speedNormal) * var(--speedFactor)) cubic-bezier(0.645, 0.045, 0.355, 1); }
.spin-leave-to { transform: perspective(500px) rotate3d(0, 0, 1, var(--spinLeave)); }
</style>
