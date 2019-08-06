<template>
<div class="slide">
  <img alt="Vue logo" src="~@/assets/logo.png">
  <h1>Making Things Go Away With &lt;transition&gt;</h1>
  <h2>Repo | <a href="https://github.com/talmand/demo-transitions">https://github.com/talmand/demo-transitions</a> |</h2>
  <h2>Demo | <a href="https://talmand.github.io/demo-transitions/">https://talmand.github.io/demo-transitions/</a> |</h2>
</div>
</template>

<script>
export default {
  name: 'slide-title',

  activated: function () {
    document.body.style.setProperty('--bodyBgColor', '#274231');
  }
}
</script>
