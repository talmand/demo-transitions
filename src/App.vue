<template>
  <div
    id="container"
    :class="[slides[currentSlide], {'dark-mode': isDark}]"
  >
    <options-panel :animations="animations" :isActive="activateOptionsPanel" :slides="slides" :styles="styles" />

    <transition :name="slideAnimation" mode="out-in" appear>
      <component :is='currentComponent' />
    </transition>

    <div id="panel">
      <div class="slides">{{ currentSlide + 1 }} of {{ slides.length }}</div>
      <button :disabled="currentSlide === 0" @click="prevSlide">prev</button>
      <button :disabled="currentSlide === slides.length - 1" @click="nextSlide">next</button>
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
      slides: ['slide-title', 'slide-explanation', 'slide-simple-example', 'slide-applied-classes', 'slide-named-transitions', 'slide-dynamic-named-transitions', 'slide-css-library', 'slide-javascript-hooks'],
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
    }
  },

  mounted () {
    this.$root.$on('options:skipToSlide', slide => {
      this.currentSlide = slide;
      this.currentComponent = this.slides[this.currentSlide];
    });

    this.$root.$on('options:changeSlideTransition', animation => this.slideAnimation = this.animations[animation]);

    document.body.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
      }
      if (e.key === 'd') {
        this.isDark = !this.isDark;
      }
      if (e.key === '`') {
        this.activateOptionsPanel = !this.activateOptionsPanel;
      }
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
  transition: 0.5s;
}

.dark-mode {
  color: #f5f5f5;

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

#panel {
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  position: fixed;
  width: 100vw;

  .slides {
    color: white;
    text-align: center;
    width: 100%;
  }

  button {
    flex-grow: 1;
    margin-top: 10px;
    padding: 10px 0;
  }
}

.slide {
  align-items: center;
  background-color: #f5f5f5;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  min-height: 50vh;
  opacity: 1;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  transition: 0.5s;
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

pre {
  width: calc(100% - 40px);
}

// component change transitions
.inout-enter { opacity: 0; transform: perspective(500px) translate3d(var(--slideEnter), 0, var(--slideZEnter)); }
.inout-enter-active { transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.5s; }
.inout-leave-active { transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.5s; }
.inout-leave-to { opacity: 0; transform: perspective(500px) translate3d(var(--slideLeave), 0, var(--slideZLeave)); }

.fade-enter,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: 0.5s; }

.slide-enter { opacity: 0; transform: translate3d(var(--slideEnter), 0, 0); }
.slide-enter-active,
.slide-leave-active { transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.slide-leave-to { opacity: 0; transform: translate3d(var(--slideLeave), 0, 0); }

.rotate-enter { transform: perspective(2000px) rotate3d(0, 1, 0, var(--rotateEnter)); }
.rotate-enter-active, .rotate-leave-active { transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1); }
.rotate-leave-to { transform: perspective(2000px) rotate3d(0, 1, 0, var(--rotateLeave)); }

.spin-enter { transform: perspective(500px) rotate3d(0, 0, 1, var(--spinEnter)); }
.spin-enter-active, .spin-leave-active { transition: 0.25s cubic-bezier(0.645, 0.045, 0.355, 1); }
.spin-leave-to { transform: perspective(500px) rotate3d(0, 0, 1, var(--spinLeave)); }
</style>
