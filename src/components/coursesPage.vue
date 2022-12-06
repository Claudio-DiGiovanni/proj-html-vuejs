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
    <div class="faculties" id="pages">
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
    <div class="popup">
      <a href="#">Purchase EduPrime on Envato Market</a>
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
          logo: 'img/Gavel-v2.png',
          name: 'Law Faculty',
          img: 'img/Gavel-Illustration-e1556884768193.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: 'img/Coins-tabs-v2.png',
          name: 'Economy',
          img: 'img/Economy.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: 'img/Medicine-tabs-v2.png',
          name: 'Medicine',
          img: 'img/Medicine.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: 'img/Computer-tabs-v2.png',
          name: 'Computer Science',
          img: 'img/Computer-Science.png',
          text: 'Learning from world-leading academics and practitioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
        },
        {
          logo: 'img/Palette-tabs-v2.png',
          name: 'Graphic Design',
          img: 'img/Graphic-Design.png',
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
    position: relative;
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
    cursor: pointer;
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

  .popup{
    position: absolute;
    top: 2rem;
    left: 2rem;
    background-color: black;
    padding: .3rem;
    width: 210px;
    border-radius: 7px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    a{
      color: white;
      text-decoration: none;
    }
    ::before{
      content: '';
      position: absolute;
      bottom: -10px;
      right: 48%;
      width: 10px;
      height: 10px;
      background-color: black;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      rotate: 180deg;
    }
  }
</style>
