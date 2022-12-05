<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div id="courses">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img class="icon" src="@/assets/img/Books-icon.png" alt="books">
        </div>
        <div class="col-6">
          <h2 class="title">Thousands of courses for any type of student</h2>
          <p>At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course that satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.</p>
          <button class="btn-yellow">Browse through courses</button>
        </div>
        <div class="col-6">
          <img src="@/assets/img/Graduation-Illustration.png" alt="" class="img-fluid">
        </div>
      </div>
    </div>
    <div class="faculties">
      <h2 class="title">Faculties avaiable ad EduPrime</h2>
      <p class="text-center">A single university with a load of courses, tailored <br> to satisfy any student's needs.</p>
      <div class="select-faculty">
        <div class="container">
          <div class="row row-cols-5">
            <div :class="(selectedIndex === i) ? 'active' : ''" class="faculty-card col" v-for="(faculty, i) in arrFaculty" :key="i" @click="selectFaculty(i)">
              <img class="img-fluid p-5" :src="faculty.logo" alt="logo">
              <span class="faculty-name">{{ faculty.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-2 justify-content-center faculty-content" v-for="(faculty, i) in arrFaculty" :key="i" v-show="(selectedIndex === i)">
              <div class="col-5">
                <img class="img-fluid" :src="faculty.img" alt="img">
              </div>
              <div class="col-6">
                <h2 class="title text-start">{{ faculty.name }}</h2>
                <p>{{ faculty.text }}</p>
                <button class="btn-salmon">Read More</button>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      arrFaculty: [
        {
          logo: '/img/Gavel-v2.5e44bf36.png',
          name: 'Law Faculty',
          img: '/img/Gavel-Illustration-e1556884768193.e878999e.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: '/img/Coins-tabs-v2.2cb1c0b8.png',
          name: 'Economy',
          img: '/img/Economy.084597f8.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: '/img/Medicine-tabs-v2.80cc76b9.png',
          name: 'Medicine',
          img: '/img/Medicine.5f617827.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: '/img/Computer-tabs-v2.ec741fe6.png',
          name: 'Computer Science',
          img: 'data:image/png;base64,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',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: '/img/Palette-tabs-v2.f7680225.png',
          name: 'Graphic Design',
          img: '/img/Graphic-Design.f4874338.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
      ],
    };
  },
  methods: {
    selectFaculty(i) {
      this.selectedIndex = i;
    },
  },
};
</script>

<style lang="scss" scoped>

  #courses{
    background-image: url('@/assets/img/home-background.png');
    background-repeat: no-repeat;
  }
  .icon{
    width: 80px;
  }

  h2{
    padding: 2rem 0;
    font-size: 60px;
    text-align: center;
    color: #434959;
  }

  p{
    font-size: 20px;
    padding-bottom: 3rem;
  }

  .faculties{
    margin-top: 10rem;
  }

  .select-faculty{
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .faculty-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
  }
  .faculty-name{
    font-family: 'Bubblegum Sans', cursive;
    color: #e56768;
    font-size: 20px;
    font-weight: 500;
  }

  .faculty-content{
    padding: 7rem 0;
    p{
      color: #8b8b8a;
    }
  }

  .active{
    background-color: #e56768;
    position: relative;
    span{
      color: #ffffff;
    }
    img{
      filter:  brightness(0) invert(1);
    }
    ::before{
      content: '';
      position: absolute;
      bottom: -15px;
      right: 47%;
      width: 15px;
      height: 15px;
      background-color: #e56768;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      rotate: 180deg;
    }
  }
</style>
