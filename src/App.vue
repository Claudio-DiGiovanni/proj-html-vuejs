<template>
  <div>
    <headerPage />
    <mainPage />
    <footerPage />
  </div>
</template>

<script>
import headerPage from '@/components/headerPage.vue';
import mainPage from '@/components/mainPage.vue';
import footerPage from '@/components/footerPage.vue';

export default {
  components: {
    headerPage,
    mainPage,
    footerPage,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');

button{
  padding: .7rem 2rem;
  border-radius: 2rem;
  border: none;
  font-family: 'Bubblegum Sans', cursive;
  letter-spacing: 3px;
}

.btn-yellow{
  background-color: #e9d758;
  color: #ffffff;
  transition: 1s;
}
.btn-yellow:hover{
    background-color: #ffffff;
    color: #e56768;
  }
</style>
