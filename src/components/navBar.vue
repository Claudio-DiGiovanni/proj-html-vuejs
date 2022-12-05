<!-- eslint-disable no-else-return -->
<!-- eslint-disable max-len -->
<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="@/assets/img/theme_eduprime_logo.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" :class="el.dropdown !== null ? 'dropdown' : ''" v-for="(el, i) in arrMenu" :key="i">
          <a class="nav-link" :class="classMenu(i,el)" aria-current="page" :href="('#' + el.text)">{{ el.text }}</a>
          <ul class="dropdown-menu" v-if="el.dropdown !== null">
            <li><a class="dropdown-item" v-for="link in el.dropdown" :key="link" href="#">{{ link }}</a></li>
          </ul>
        </li>
      </ul>
      <button class="btn-yellow text-uppercase">view courses</button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      arrMenu: [
        {
          text: 'home',
          dropdown: [
            'action',
            'more action',
            'last action',
          ],
        },
        {
          text: 'courses',
          dropdown: [
            'action',
            'more action',
            'last action',
          ],
        },
        {
          text: 'about us',
          dropdown: null,
        },
        {
          text: 'news',
          dropdown: [
            'action',
            'more action',
            'last action',
          ],
        },
        {
          text: 'pages',
          dropdown: [
            'action',
            'more action',
            'last action',
          ],
        },
        {
          text: 'contact',
          dropdown: null,
        },
        {
          text: 'purchase',
          dropdown: null,
        },
      ],
    };
  },
  methods: {
    // eslint-disable-next-line consistent-return
    classMenu(i, el) {
      if (el.dropdown !== null && i === this.selectedIndex) {
        return 'active dropdown-toggle';
      } if (el.dropdown !== null) {
        return 'dropdown-toggle';
      } if (i === this.selectedIndex) {
        return 'active';
      }
    },

  },
};
</script>

<style lang="scss" scoped>
img{
  width: 250px;
}
li{
  margin: 0 1rem;
  font-family: 'Bubblegum Sans', cursive;
  font-size: 20px;
}
a{
  color: #ffffff;
  text-transform: capitalize;
}

nav{
  padding: 1rem 5rem;
}
</style>
