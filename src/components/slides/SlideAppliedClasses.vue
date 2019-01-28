<template>
<div class="slide">
  <h2>How Classes Are Applied</h2>

  <transition name="fade" mode="out-in">
    <div v-if="hideHomer" class="img-container" key="noHomer">
      <img alt="CSS classes graphic" src="~@/assets/transition.png" width="75%" />
      <button class="example-button" @click="hideHomer = !hideHomer">another example</button>
    </div>
    
    <div v-else class="img-container" key="homer">
      <img alt="homer appears" :src="homerSlides[currentHomer].img" width="75%" />
      <div v-html="homerSlides[currentHomer].text"></div>
      <div>
        <button class="prev" @click="currentHomer--" :disabled="currentHomer === 0">&lsaquo;</button>
        <button class="next" @click="currentHomer++" :disabled="currentHomer === homerSlides.length - 1">&rsaquo;</button>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
const homers = {
  img1: require('../../assets/homer/030.png'),
  img2: require('../../assets/homer/024.png'),
  img3: require('../../assets/homer/016.png'),
  img4: require('../../assets/homer/008.png'),
  img5: require('../../assets/homer/000.png')
};

export default {
  name: 'slide-applied-classes',

  data () {
    return {
      hideHomer: true,
      currentHomer: 0,
      homerSlides: [
        {
          img: homers.img1,
          text: '&nbsp;'
        },
        {
          img: homers.img1,
          text: '.homer-enter .homer-enter-active'
        },
        {
          img: homers.img2,
          text: '.homer-enter-to .homer-enter-active'
        },
        {
          img: homers.img3,
          text: '.homer-enter-to .homer-enter-active'
        },
        {
          img: homers.img4,
          text: '.homer-enter-to .homer-enter-active'
        },
        {
          img: homers.img5,
          text: '&nbsp;'
        },
        {
          img: homers.img5,
          text: '.homer-leave .homer-leave-active'
        },
        {
          img: homers.img4,
          text: '.homer-leave-to .homer-leave-active'
        },
        {
          img: homers.img3,
          text: '.homer-leave-to .homer-leave-active'
        },
        {
          img: homers.img2,
          text: '.homer-leave-to .homer-leave-active'
        },
        {
          img: homers.img1,
          text: '&nbsp;'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.img-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  div,
  button {
    margin-top: 10px;
  }
}

.prev,
.next {
  background: 0;
  border-style: none;
  cursor: pointer;
  font-size: 40px;
  line-height: 100%;
  margin: 0;
  padding: 10px 20px;
}
</style>
