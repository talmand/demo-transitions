<template>
<div class="slide">
  <h2>Control Transition Speed</h2>

<textarea is="pre-code">body {
  --speedFactor: 1;
  --speedFast: calc(100ms * var(--speedFactor));
  --speedNormal: calc(300ms * var(--speedFactor));
  --speedSlow: calc(500ms * var(--speedFactor));
}
</textarea>

<textarea is="pre-code">changeSpeed: function () {
  document.body.style.setProperty('--speedFactor', this.speedFactor)
}
</textarea>

<textarea is="pre-code">.fade-enter,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: var(--speedNormal); }
</textarea>

</div>
</template>

<script>
export default {
  name: 'slide-control-speed',

  mounted () {
    document.querySelectorAll('pre code').forEach(preCode => {
      // eslint-disable-next-line
      hljs.highlightBlock(preCode);
    });
  },

  activated () {
    document.body.style.setProperty('--bodyBgColor', '#422827');
  }
}
</script>

<style lang="scss" scoped>

</style>
