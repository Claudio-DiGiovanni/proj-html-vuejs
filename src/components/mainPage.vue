<template>
  <main>
    <coursesPage />
    <universityPage />
    <latestCoursesPage />
    <infoPage />
  </main>
</template>

<script>
import coursesPage from '@/components/coursesPage.vue';
import universityPage from '@/components/universityPage.vue';
import latestCoursesPage from '@/components/latestCoursesPage.vue';
import infoPage from '@/components/infoPage.vue';

export default {
  name: 'mainPage',
  components: {
    coursesPage,
    universityPage,
    latestCoursesPage,
    infoPage,
  },
};
</script>

<style lang="scss" scoped>

</style>
