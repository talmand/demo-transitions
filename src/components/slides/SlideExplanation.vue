<template>
<div class="slide">
  <h2>What is the transition wrapper?</h2>

<pre v-text="`<transition>
  <component></component>
</transition>

<transition>
  <div v-show='isHidden'></div>
</transition>
`"></pre>

  <p>Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:</p>

  <ul>
    <li>automatically apply classes for CSS transitions and animations</li>
    <li>integrate 3rd-party CSS animation libraries, such as Animate.css</li>
    <li>use JavaScript to directly manipulate the DOM during transition hooks</li>
    <li>integrate 3rd-party JavaScript animation libraries, such as Velocity.js</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'slide-explanation'
}
</script>

<style lang="scss" scoped>

</style>