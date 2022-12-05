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
  padding: 1rem 3rem;
  border-radius: 2rem;
  border: none;
  font-family: 'Bubblegum Sans', cursive;
  letter-spacing: 3px;
  transition: 1s;
  font-size: 20px;
}

.btn-yellow{
  background-color: #e9d758;
  color: #ffffff;
}
.btn-yellow:hover{
    background-color: #ffffff;
    color: #e56768;
}

.btn-white{
  background-color: #ffffff;
  color: #e56768;
}
.btn-white:hover{
  background-color: #da5f60e6;
  color: white;
}
.btn-salmon{
  background-color: #e56768;
  color: #ffffff;
  border: 1px solid #e56768;
}
.btn-salmon:hover{
    background-color: white;
    color: #e56768;
    border: 1px solid lightgray;
}

.title{
  font-family: 'Bubblegum Sans', cursive;
}

.icon{
    width: 100px;
  }
</style>
