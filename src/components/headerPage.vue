<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <header id="home">
    <img class="bg" src="@/assets/img/theme_slider2_bg-1.jpg" alt="bg">
    <navBar />
    <div class="container">
      <h1 class="title">Key to your success</h1>
      <p>EduPrime is the most versatile WordPress theme for educational pourposes, <br> showcasing univesities, courses, secondary schools etc.</p>
      <div class="btn-container flex-column flex-md-row">
        <button class="btn-yellow"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Search courses</button>
        <button class="btn-white"><font-awesome-icon icon="fa-solid fa-user-plus" /> Apply for university</button>
      </div>
    </div>
    <img class="img-fluid" src="@/assets/img/Wave-1.png" alt="">
    <div class="side-btn">
      <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-readme" /></a>
      <a href="#"><font-awesome-icon icon="fa-solid fa-life-ring" /></a>
    </div>
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

  .btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
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

  .side-btn{
    display: flex;
    flex-direction: column;
    background-color: #e9d758;
    position: absolute;
    left: 0;
    top: 40%;
    padding: 1rem;
    border-radius: 0 10px 10px 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
     rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
       rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
    a{
      color: white;
      margin: .5rem 0;
    }
  }
</style>
