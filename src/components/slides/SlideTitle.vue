<template>
<div class="slide">
  <img alt="Vue logo" src="~@/assets/logo.png">
  <h1>Making Things Go Away With &lt;transition&gt;</h1>
  <h2>VueJS Dallas Meetup - February 19, 2019</h2>
  <h2>https://github.com/talmand/demo-transitions</h2>
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
