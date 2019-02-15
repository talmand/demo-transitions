<template>
<div class="slide">
  <h2>What is the transition component?</h2>

<textarea is="pre-code"><transition>
  <div v-show="isHidden"></div>
</transition>

<transition>
  <div v-if="isHidden" key="if"></div>
  <div v-else key="else"></div>
</transition></textarea>

  <p>Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:</p>

  <ul>
    <li>automatically apply classes for CSS transitions and animations</li>
    <li>integrate 3rd-party CSS animation libraries, such as Animate.css</li>
    <li>use JavaScript to directly manipulate the DOM during transition hooks</li>
    <li>integrate 3rd-party JavaScript animation libraries, such as Greensock</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'slide-explanation',

  mounted () {
    document.body.style.setProperty('--bodyBgColor', '#755E39');

    document.querySelectorAll('pre code').forEach(preCode => {
      // eslint-disable-next-line
      hljs.highlightBlock(preCode);
    });
  }
}
</script>
