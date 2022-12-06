<!-- eslint-disable max-len -->
<template>
  <section id="purchase">
    <div class="container">
      <h2 class="title">Latest Courses</h2>
      <div class="row row-cols-4 g-5">
        <div class="col course-card" v-for="(course, i) in arrLatestCourses" :key="i">
          <div class="contents">
            <img :src="course.icon" alt="icon" class="img-fluid">
            <h5 class="title">{{ course.name }}</h5>
            <span class="info"><font-awesome-icon icon="fa-regular fa-user" /> Teacher: <strong>{{ course.teacher }}</strong></span>
            <span class="info pb-5"><font-awesome-icon icon="fa-solid fa-money-bill" /> Price: <strong>{{ course.price }}</strong></span>
            <button class="btn-salmon"><font-awesome-icon icon="fa-solid fa-eye" /> View Course</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <img class="icon mx-5" src="@/assets/img/Exam-icon.png" alt="">
      <div class="row justify-content-center">
        <div class="col-5">
          <h2 class="title">The most efficent examination method</h2>
          <p class="pb-5">EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.</p>
          <button class="btn-salmon">Discover the Method</button>
        </div>
        <div class="col-6">
          <img src="@/assets/img/Exam-Illustration.png" alt="" class="img-fluid">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <img src="@/assets/img/Girl-Illustration.png" alt="" class="img-fluid">
        </div>
        <div class="col-5">
          <img class="icon" src="@/assets/img/Exam-icon-1.png" alt="">
          <h2 class="title">Variable fees for international students</h2>
          <p class="pb-5">EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.</p>
          <button class="btn-salmon">List of Fees</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arrLatestCourses: [
        {
          icon: 'img/Decisions-icon.png',
          name: 'Make Better Decisions',
          teacher: 'James Colins',
          price: '$21.00',
        },
        {
          icon: 'img/Speaker-icon.png',
          name: 'How to be a speaker',
          teacher: 'James Colins',
          price: 'free',
        },
        {
          icon: 'img/Network-icon.png',
          name: 'Network Introduction',
          teacher: 'James Colins',
          price: 'free',
        },
        {
          icon: 'img/Brand-icon.png',
          name: 'Brand Management',
          teacher: 'James Colins',
          price: 'free',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#purchase{
  margin: 3rem 0;
}

.container{
  padding-bottom: 10rem;
}
h2{
  font-size: 60px;
  margin: 3rem 0;
  color: #434959;
}
h5{
  font-size: 22px;
  font-weight: 600;
}
.contents{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
  rgba(0, 0, 0, 0.07) 0px 2px 4px,
  rgba(0, 0, 0, 0.07) 0px 4px 8px,
  rgba(0, 0, 0, 0.07) 0px 8px 16px,
  rgba(0, 0, 0, 0.07) 0px 16px 32px,
  rgba(0, 0, 0, 0.07) 0px 32px 64px;
  aspect-ratio: 1 / 1;
  position: relative;
  img{
    width: 40%;
    margin: 2rem 0;
  }
  button{
    white-space: nowrap;
    position: absolute;
    bottom: -2rem;
  }
}

.info{
  color: #8b8b8a;
  padding: .3rem 0;
}
</style>
