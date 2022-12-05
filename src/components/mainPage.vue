<template>
  <main>
    <coursesPage />
    <universityPage />
  </main>
</template>

<script>
import coursesPage from '@/components/coursesPage.vue';
import universityPage from '@/components/universityPage.vue';

export default {
  name: 'mainPage',
  components: {
    coursesPage,
    universityPage,
  },
};
</script>

<style lang="scss" scoped>

</style>
