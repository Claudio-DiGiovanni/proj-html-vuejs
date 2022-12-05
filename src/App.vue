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
  props: {
    headerPage,
    mainPage,
    footerPage,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
