<template>
<div class="slide">
  <h2>Credits</h2>

  <p>More Info:<br /><a href="https://css-tricks.com/the-power-of-named-transitions-in-vue/">CSS-Tricks: The Power of Named Transitions</a></p>

  <p>Technologies:<br /><a href="https://cli.vuejs.org/">Vue CLI</a> | <a href="https://vuejs.org/v2/api/#transition">Transition Component</a> | <a href="https://vuejs.org/v2/api/#transition-group">Transition-Group</a> <br /> <a href="https://vuejs.org/v2/api/#is">Is Attribute</a> | <a href="https://vuejs.org/v2/guide/components.html#Dynamic-Components">Dynamic Components</a> | <a href="http://sass-lang.com/">SASS</a></p>
  
  <p>Libraries:<br /><a href="https://greensock.com/">greensock</a> | <a href="https://daneden.github.io/animate.css/">animate.css</a> | <a href="https://highlightjs.org/">highlight.js</a></p>

  <p>CSS/DOM Techniques:<br /><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition">Transition</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">Custom Properties (variables)</a> | <a href="https://developer.mozilla.org/en-US/docs/Glossary/Flexbox">Flexbox</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">Transform</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide">Fullscreen API</a></p>

  <p>Imagery:<br /><a href="https://www.fox.com/the-simpsons/">The Simpsons</a> | <a href="https://www.adultswim.com/videos/rick-and-morty">Rick and Morty</a></p>

  <p>Special Note:<br /><a href="https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/">#rebeccapurple</a></p>

</div>
</template>

<script>
export default {
  name: 'slide-credits',

  activated () {
    document.body.style.setProperty('--bodyBgColor', '#755e39');
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
