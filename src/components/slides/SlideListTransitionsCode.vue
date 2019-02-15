<template>
<div class="slide">
  <h2>List Transitions Code</h2>

<textarea is="pre-code"><transition-group name="list" tag="ul" @leave="listLeave">
  <li v-for="(state, index) in states" :key="state[5]" :data-index="index">
    <!-- looped content -->
  </li>
</transition-group></textarea>

<textarea is="pre-code">.list-enter-active, .list-leave-active {
  transition: 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translate3d(40px, 0, 0);
}
.list-move {
  transition: transform 0.5s;
}</textarea>

<textarea is="pre-code">listLeave: function (element) {
  element.style.transitionDelay = `${element.dataset.index * 0.25}s`;
}</textarea>
</div>
</template>

<script>
export default {
  name: 'slide-list-transitions-code',

  mounted () {
    document.body.style.setProperty('--bodyBgColor', '#274231');

    document.querySelectorAll('pre code').forEach(preCode => {
      // eslint-disable-next-line
      hljs.highlightBlock(preCode);
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
