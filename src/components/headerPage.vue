<template>
  <header>
    <navBar />
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
  }
</style>
