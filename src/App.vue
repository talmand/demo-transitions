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
      ref="options"
    />

    <button :class="{active: isFullscreen}" class="fullscreen" @click="toggleFullscreen">
      <span class="arrow upper-left"></span>
      <span class="arrow upper-right"></span>
      <span class="arrow lower-right"></span>
      <span class="arrow lower-left"></span>
    </button>

    <transition :name="slideAnimation" mode="out-in" appear>
      <keep-alive>
        <component :is='currentComponent' />
      </keep-alive>
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
      isFullscreen: false,
      nextActive: false,
      prevActive: false,
      slides: ['slide-title', 'slide-explanation', 'slide-simple-example', 'slide-applied-classes', 'slide-named-transitions', 'slide-dynamic-named-transitions', 'slide-css-library', 'slide-javascript-hooks', 'slide-list-transitions', 'slide-list-transitions-code', 'slide-control-speed', 'slide-credits'],
      styles: ['an-old-hope', 'atom-one-dark-reasonable', 'codepen-embed', 'default', 'ir-black', 'railscasts', 'sunburst'],
      slideAnimation: 'fade'
    }
  },

  methods: {
    nextSlide: function () {
      if (this.currentSlide < this.slides.length - 1) {
        // update which slide is displayed
        this.currentSlide++;
        // force a hash change for our simple router
        window.location.hash = this.slides[this.currentSlide];
        // change css variables to support different transition effects
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
        // update which slide is displayed
        this.currentSlide--;
        // force a hash change for our simple router
        window.location.hash = this.slides[this.currentSlide];
        // change css variables to support different transition effects
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
      let hash = window.location.hash.replace(/^#/, '');
      let index = this.slides.indexOf(hash);
    
      if (index > -1) {
        this.currentComponent = hash;
        this.currentSlide = index;
        // update the slide select in the options panel to current slide
        // placed in an if because $refs may not be available on render
        if (this.$refs.options) {
          this.$refs.options.slide = index;
        }
      }
    },
    toggleFullscreen: function () {
      // note: you can use browser zooming to make slides larger or smaller as needed
      const container = document.querySelector('#container');
      this.isFullscreen = !this.isFullscreen;

      if (this.isFullscreen) {
        container.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  },

  mounted () {
    // just in case we start with a slide hash
    this.getHash();

    // emitted from options panel
    // jumps to selected slide
    this.$root.$on('options:skipToSlide', slide => {
      // update current slide to what was passed in event
      this.currentSlide = slide;
      // force a hash change for our simple router
      window.location.hash = this.slides[this.currentSlide];
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
      // toggles fullscreen with spacebar
      if (e.key === ' ') {
        this.toggleFullscreen();
      }
    });
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Roboto:400,700');

:root {
  --slideEnter: 400px;
  --slideLeave: -400px;
  --slideZEnter: 100px;
  --slideZLeave: -300px;
  --rotateEnter: 90deg;
  --rotateLeave: -90deg;
  --spinEnter: 180deg;
  --spinLeave: -180deg;
  --bodyBgColor: #333;
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
  --speedFactor: 1;
  --speedFast: calc(100ms * var(--speedFactor));
  --speedNormal: calc(300ms * var(--speedFactor));
  --speedSlow: calc(500ms * var(--speedFactor));

  color: #333;
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 18px;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
  padding: 0;
  transition: background-color var(--speedSlow);

  &:-webkit-full-screen {
    height: 100%;
    width: 100%;
  }
}

p {
  margin: 0 0 10px;
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
  background-color: var(--bodyBgColor);
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
  padding: 5px 40px;
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
    transition: var(--speedNormal);
    width: 60%;
    z-index: -2;
  }

  &.negative {
    background: lighten(red, 20);
    border: 3px solid darken(red, 10);
    box-shadow: 0 3px 0 3px darken(red, 10);
    color: lighten(red, 40);

    &::before {
      background: red;
    }
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
    flex-grow: 1;
    font-size: 18px;
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
    transition: var(--speedNormal);

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
      transition: var(--speedNormal);
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
      transition: var(--speedNormal);
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
      transition: var(--speedNormal);
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
      transition: var(--speedNormal);
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

.fullscreen {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
  height: 30px;
  line-height: 1;
  opacity: 0.25;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;

  &.active .arrow {
    transform: rotate3d(0, 0, 1, 180deg);
  }

  .arrow {
    height: 10px;
    position: absolute;
    width: 10px;
  }
  .upper-left {
    border-left: 2px solid #fff;
    border-top: 2px solid #fff;
    left: 0;
    top: 0;
  }
  .upper-right {
    border-right: 2px solid #fff;
    border-top: 2px solid #fff;
    right: 0;
    top: 0;
  }
  .lower-right {
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    bottom: 0;
    right: 0;
  }
  .lower-left {
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    bottom: 0;
    left: 0;
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
  transition: var(--speedFast);
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
.inout-enter-active { transition: opacity var(--speedNormal) cubic-bezier(0.645, 0.045, 0.355, 1), transform var(--speedNormal); }
.inout-leave-active { transition: opacity var(--speedNormal) cubic-bezier(0.645, 0.045, 0.355, 1), transform var(--speedNormal); }
.inout-leave-to { opacity: 0; transform: perspective(500px) translate3d(var(--slideLeave), 0, var(--slideZLeave)); }

.fade-enter,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: var(--speedNormal); }

.slide-enter { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(var(--slideEnter), 0, 0); }
.slide-enter-to { transform: scale3d(1, 1, 1); }
.slide-enter-active,
.slide-leave-active { transition: var(--speedSlow) cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.slide-leave { transform: scale3d(1, 1, 1); }
.slide-leave-to { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(var(--slideLeave), 0, 0); }

.rotate-enter { transform: perspective(2000px) rotate3d(0, 1, 0, var(--rotateEnter)); }
.rotate-enter-active, .rotate-leave-active { transition: var(--speedNormal) cubic-bezier(0.645, 0.045, 0.355, 1); }
.rotate-leave-to { transform: perspective(2000px) rotate3d(0, 1, 0, var(--rotateLeave)); }

.spin-enter { transform: perspective(500px) rotate3d(0, 0, 1, var(--spinEnter)); }
.spin-enter-active, .spin-leave-active { transition: var(--speedNormal) cubic-bezier(0.645, 0.045, 0.355, 1); }
.spin-leave-to { transform: perspective(500px) rotate3d(0, 0, 1, var(--spinLeave)); }
</style>
