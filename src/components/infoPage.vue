<!-- eslint-disable max-len -->
<template>
  <section id="contacts">
    <div class="newsletter">
      <div class="container flex-column flex-md-row">
        <h3 class="title">Subscribe Now to Our Newsletter!</h3>
        <div class="input-text">
          <label for="email">
            <input name="email" type="text" placeholder="Email address...">
            <button class="btn-yellow"><font-awesome-icon icon="fa-solid fa-paper-plane" /></button>
          </label>
        </div>
      </div>
    </div>
    <div class="partners">
      <h2 class="title text-center">Partners</h2>
      <p class="text-center">Leverage agile frameworks to provide a robust synopsis for high level <br> overviews. Iterative approaches to corporate strategy.</p>
      <div class="container my-5 justify-content-center">
        <div class="row row-cols-12 my-4">
          <div class="col d-flex justify-content-center" v-for="el in arrPartners" :key="el">
            <img :src="el" alt="partner">
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="wave ">
          <img class="img-fluid" src="@/assets/img/background-wave3.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrPartners: [
        'img/partner-2.png',
        'img/partner-3.png',
        'img/partner-4.png',
        'img/partner-5.png',
        'img/partner-6.png',
        'img/partner-8.png',
        'img/partner-1.png',
        'img/partner-7.png',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .newsletter{
    background-color: #e56768;
    padding: 3rem 0;
  }
 .container{
  display: flex;
  justify-content: space-between;
 }

 h3{
  color: #ffffff;
  font-size: 50px;
 }

 h2{
  font-size: 60px;
  margin-bottom: 3rem;
 }

 button{
  padding: 1rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  margin-left: -3.6rem;
 }

 .partners{
  margin-top: 5rem;
 }

 img{
  height: 60px;
  filter: invert(.5);
 }

 .wave{
  width: 60%;
  background-color: #fafafa;
  img{
    width: 100%;
    height: auto;
    filter: none;
  }
 }
</style>
