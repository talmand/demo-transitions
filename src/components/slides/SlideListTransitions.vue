<template>
<div class="slide">
  <h2>List Transitions</h2>

  <transition-group name="list" tag="ul">

  </transition-group>
</div>
</template>

<script>
export default {
  name: 'slide-list-transitions',

  data () {
    return {
      items: [1,2,3,4,5,6,7]
    }
  }
}
</script>
