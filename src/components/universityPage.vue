<!-- eslint-disable max-len -->
<template>
  <section id="about-us">
    <img class="img-fluid" src="@/assets/svg/svg-0.svg" alt="">
    <div class="contents">
      <div class="container university">
        <img class="icon" src="@/assets/img/Clock-and-Bell.png" alt="">
        <h2 class="title bg-custom">University Year</h2>
        <div class="scheme">
          <img src="@/assets/img/Timeline-Item.png" alt="" class="img-fluid">
          <div class="text" v-for="(ele, i) in universityStage" :key="i" :class="('text-' + i)">
            <h5 class="title text-center">{{ ele.title }}</h5>
            <p>{{ ele.text }}</p>
          </div>
        </div>
        <div class="events" id="news">
          <img class="icon" src="@/assets/img/upcoming-events-calendar-icon.png" alt="">
          <h2 class="title">Upcoming Events</h2>
          <div class="row g-5">
            <div class="col-4" v-for="(event, i) in arrEvents" :key="i">
              <div class="event-card">
                <h4>{{ event.name }}</h4>
                <span class="date"><font-awesome-icon icon="fa-solid fa-calendar-days" /> {{ event.date }}</span>
                <p>{{ event.text.slice(0, 90) + '[...]' }}</p>
                <button class="btn-salmon btn-card">+ Find More</button>
              </div>
            </div>
          </div>
          <button class="btn-yellow text-center">View All Events</button>
        </div>
      </div>
      </div>
      <img class="img-fluid" src="@/assets/svg/svg-1.svg" alt="">
  </section>
</template>

<script>
export default {
  data() {
    return {
      universityStage: [
        {
          title: 'Orentation',
          text: 'First day of the university year, all students gather for the opening ceremony and then network whith others.',
        },
        {
          title: 'Demo Classes',
          text: 'In the first week, students try to accomodate with the teaching style and choose their optional courses.',
        },
        {
          title: 'Evaluation',
          text: 'At the end of a semester, students take a general evaluation test for every subject they\'re learning.',
        },
        {
          title: 'Graduation Day',
          text: 'On the day of graduation, all students gather for the ceremony and then network and party among others.',
        },
      ],
      arrEvents: [
        {
          name: 'Coaching Sessions',
          date: '20 May 21.30 PM',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perferendis voluptas omnis! Sunt veritatis voluptatum eius dolore quod nisi, nihil fuga a reiciendis delectus dignissimos qui quisquam, sequi mollitia impedit.',
        },
        {
          name: 'Coaching Sessions',
          date: '24 Mar 18.00 PM',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perferendis voluptas omnis! Sunt veritatis voluptatum eius dolore quod nisi, nihil fuga a reiciendis delectus dignissimos qui quisquam, sequi mollitia impedit.',
        },
        {
          name: 'Coaching Sessions',
          date: '12 Feb 13.30 PM',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum perferendis voluptas omnis! Sunt veritatis voluptatum eius dolore quod nisi, nihil fuga a reiciendis delectus dignissimos qui quisquam, sequi mollitia impedit.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .contents{
    background-color: #e56768;
    margin: -1px 0;
    padding: 5rem 0;
  }

  .university{
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #ffffff;
  }

  .bell{
    width: 100px;
  }

  h2{
    margin: 3rem 0;
    font-size: 50px;
  }

  .bg-custom{
    background-color: rgb(215, 3, 3);
    padding: .2rem;
  }

  .scheme{
    padding: 15rem 0;
    position: relative;
  }

  .text{
    width: 33%;
    position: absolute;
  }

  .text-0{
    bottom: 16%;
    left: 3%;
  }

  .text-1{
    top: 20%;
    right: 43%;
  }

  .text-2{
    bottom: 20%;
    left: 44%;
  }

  .text-3{
    top: 20%;
    right: 3%;
  }

  .events{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .event-card{
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    p{
      color: #74777b;
      padding: 1rem;
    }
  }

  h4{
    color: black;
    text-align: center;
    font-weight: 800;
    font-size: 30px;
  }

  .date{
    color: #8d8b8a;
    font-size: 13px;
    display: block;
    text-align: center;
  }

  .btn-card{
    position: absolute;
    bottom: -2rem;
    left: 5.5rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .btn-yellow{
    margin: 10rem 0 2rem;
  }
</style>
