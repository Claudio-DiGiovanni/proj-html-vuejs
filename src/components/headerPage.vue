<!-- eslint-disable max-len -->
<template>
  <header>
    <img class="bg" src="@/assets/img/theme_slider2_bg-1.jpg" alt="bg">
    <navBar />
    <div class="container">
      <h1 class="title">Key to your succes</h1>
      <p>EduPrime is the most versatile WordPress theme for educational poìurposes, <br> showcasing univesities, courses, secondary schools etc.</p>
      <button class="btn-yellow"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Search courses</button>
      <button class="btn-white"><font-awesome-icon icon="fa-solid fa-user-plus" /> Apply for university</button>
    </div>
    <img src="@/assets/img/Wave-1.png" alt="">
  </header>
</template>

<script>
import navBar from '@/components/navBar.vue';

export default {
  name: 'headerPage',
  components: {
    navBar,
  },
};
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 100%;
    background-color: rgba($color: #e56768, $alpha: .8);
    position: relative;
  }

  .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
    filter: grayscale(100);
  }

  .container{
    text-align: center;
    color: #ffffff;
    padding: 2rem 0;
  }

  h1{
    padding: 2rem 0;
    font-size: 70px;
  }

  p{
    padding: 3rem 0;
    font-size: 20px;
  }

  button{
    margin: 3rem .5rem;
  }
</style>
