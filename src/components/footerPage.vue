<!-- eslint-disable max-len -->
<template>
  <footer>
    <div class="container">
      <div class="row row-cols-3">
        <div class="col">
          <img class="img-fluid" src="@/assets/img/theme_eduprime_logo.png" alt="logo">
          <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universtities, courses, secondary school etc.</p>
          <div class="social">
            <font-awesome-icon class="social-icon" icon="fa-brands fa-facebook-f" />
            <font-awesome-icon class="social-icon" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
          </div>
        </div>
        <div class="col row row-cols-2">
          <div class="col" v-for="ele in arrLink" :key="ele.name">
            <h5 class="title text-center">{{ ele.name }}</h5>
            <ul>
              <li v-for="link in ele.link" :key="link"><a href="#">{{ link }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <label for="search" class="d-flex">
            <input type="text" name="search" placeholder="Search...">
            <button class="btn-yellow"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
          </label>
          <h5 class="title text-end my-5">Search categories</h5>
          <div class="categories">
            <ul class="d-flex flex-wrap justify-content-end">
              <li class="category" v-for="category in categories" :key="category"><a href="#">{{ category }}</a></li>
            </ul>
          </div>
          <p class="rights">ModelTheme. All rights reserved.</p>
        </div>
      </div>
    </div>
    <button class="btn-yellow return"><a href="#home"><font-awesome-icon icon="fa-solid fa-chevron-up" />.</a></button>
    <div class="popup pop1">
      <a href="#"><font-awesome-icon class="green" icon="fa-solid fa-leaf" /> Purchase Theme</a>
    </div>
    <div class="popup pop2">
      <a href="#"><font-awesome-icon icon="fa-solid fa-cubes" /> Related Themes</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerPage',
  data() {
    return {
      arrLink: [
        {
          name: 'Get EduPrime',
          link: [
            'Request a website',
            'Browse Themes',
            'Payment options',
            'Support System',
            'Checkout',
            'Purchase Theme',
          ],
        },
        {
          name: 'Networking',
          link: [
            'Purchase Theme',
            'Our Benefits',
            'Our Team',
            'Our Services',
            'Other Products',
            'My account',
          ],
        },
      ],
      categories: [
        'economy',
        'design',
        'coaching',
        'business',
        'medicine',
        'law',
        'fitness',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  footer{
    background-color: #e56768;
    padding: 8rem 0;
    color: white;
    position: relative;
  }

  img{
    margin-bottom: 3rem;
  }

  .social{
    font-size: 30px;
    margin-top: 2rem;
  }

  .social-icon{
    aspect-ratio: 1 / 1;
    border: 2px solid #e9d758;
    border-radius: 50%;
    padding: 1rem;
    margin: 0 1rem;
    cursor: pointer;
  }

  ul{
    list-style: none;
    li{
      margin: 1.5rem 0;
    }
  }

  h5{
    font-size: 25px;
  }

  a{
    color: white;
    text-decoration: none;
  }

  button{
  padding: 1rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  margin-left: -3.6rem;
 }

 .category{
  padding: .5rem;
  border: 1px solid white;
  border-radius: 1.5rem;
  margin: .4rem;
  text-transform: uppercase;
  cursor: pointer;
 }
 .category:hover a{
    color: #e56768;
  }

  .category:hover{
    background-color: white;
    border: 1px solid #e56768;
  }

  .rights{
    color: #e9d758;
    text-align: end;
    font-size: 20px;
  }

  .return{
    position: absolute;
    bottom: 3rem;
    right: 3rem;
  }

  .popup{
    position: absolute;
    background-color: #454545;
    padding: .4rem .7rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    font-weight: 300;
    font-size: 15px;
    a:hover{
      color: #e9d758;
    }
  }

  .pop1{
    bottom: 8rem;
    left: 1.5rem;
  }

  .pop2{
    bottom: 5rem;
    left: 1.5rem;
  }

  .green{
    color: rgb(67, 211, 67);
  }
</style>
