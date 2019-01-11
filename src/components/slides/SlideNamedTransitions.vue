<template>
<div class="slide">
  <h2>Named Transitions</h2>

  <p>Transitions can be named, which will provide for custom classes prefixed with the name instead of the default v. This way different effects can be achieved and applied as desired.</p>
  
  <h3>Generic Transition</h3>
  <pre v-text="`<transition>
  
.v-enter, .v-enter-to, .v-enter-active,
.v-leave, .v-leave-to, .v-leave-active`"></pre>

  <h3>Named Transition</h3>
  <pre v-text="`<transition name='homer'>

.homer-enter, .homer-enter-to, .homer-enter-active,
.homer-leave, .homer-leave-to, .homer-leave-active`"></pre>

  <p>Transition names can also be reactive and switched out on demand.</p>

  <pre v-text="`<transition :name='currentTransition'>`"></pre>
</div>
</template>

<script>
export default {
  name: 'slide-named-transitions'
}
</script>

<style lang="scss" scoped>

</style>
