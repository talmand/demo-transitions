<template>
<div class="slide">
  <img alt="Vue logo" src="~@/assets/logo.png">
  <h1>An Introduction to Vue's &lt;transition&gt;</h1>
</div>
</template>

<script>
export default {
  name: 'slide-title',

  mounted: function () {
    document.body.style.setProperty('--bodyBgColor', '#274231');
  }
}
</script>
