<template>
<div class="slide">
  <h2>Named Transitions</h2>

  <p>Transitions can be named, which will provide for custom classes prefixed with the name instead of the default v. This is how different effects can be achieved and applied as desired.</p>
  
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
  }
}
</script>
