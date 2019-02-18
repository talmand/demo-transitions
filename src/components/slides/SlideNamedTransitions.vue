<template>
<div class="slide">
  <h2>Named Transitions</h2>

  <p>Transitions can be named, which will apply custom classes prefixed with the name instead of the default v-classes. This is how different transition effects can be pre-built and applied as needed.</p>
  
  <h3>Generic Transition</h3>
<textarea is="pre-code" class="pre-top"><transition></textarea>
<textarea is="pre-code" class="pre-bottom">.v-enter, .v-enter-to, .v-enter-active,
.v-leave, .v-leave-to, .v-leave-active</textarea>

  <h3>Named Transition</h3>
<textarea is="pre-code" class="pre-top"><transition name="homer"></textarea>
<textarea is="pre-code" class="pre-bottom">.homer-enter, .homer-enter-to, .homer-enter-active,
.homer-leave, .homer-leave-to, .homer-leave-active</textarea>
</div>
</template>

<script>
export default {
  name: 'slide-named-transitions',

  mounted () {    
    document.querySelectorAll('pre code').forEach(preCode => {
      // eslint-disable-next-line
      hljs.highlightBlock(preCode);
    });
  },

  activated () {
    document.body.style.setProperty('--bodyBgColor', '#274231');
  }
}
</script>
