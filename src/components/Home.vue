<template>
  <div class="home" @click="click">
    <div class="homeImg1 wow animated fadeIn">
      <img src="/static/img/home1.png" alt />
    </div>
    <div class="homeImg2 wow animated fadeIn">
      <img src="/static/img/home2.png" alt />
    </div>
    <div class="homeImg3 wow animated fadeIn">
      <img src="/static/img/home3.png" alt />
    </div>
    <div class="homeImg5 wow animated fadeIn">
      <img src="/static/img/home5.png" alt />
    </div>
    <div class="homeImg6 wow animated fadeIn">
      <img src="/static/img/home6.png" alt />
    </div>
  </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval } from 'timers';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted(){
    // this.init()
  },
   methods:{
     click:function(){
       this.$router.push({path:"/Nav"})
     },
     init(){
       var timers=0
    var time=setInterval(()=>{
          timers++
          if(timers>=5){
            clearInterval(time)
          this.$router.push({path:"/Nav"})
          }
       },1000)
     }
   }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
.home {
  margin: 0;
  width: 100%;
  height: 6.67rem;
  background: url(../assets/img/homebg.jpg);
  background-size: cover;
  background-color: #000;
  overflow: hidden;
}
.homeImg1 {
  width: 3.03rem;
  height: 1.75rem;
  margin: 0 auto;
  margin-top: 0.24rem;
}
.homeImg2 {
  width: 2.42rem;
  height: 0.29rem;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.homeImg3 {
  width: 1.7rem;
  height: 0.29rem;
  margin: 0 auto;
  margin-top: 0.12rem;
  animation: 1s pulse  linear forwards infinite
}
.homeImg5 {
  width: 3.63rem;
  height: 1.46rem;
  margin: 0 auto;
  margin-top: 0.07rem;
}
.homeImg6{
  	width: 3.75rem;
	height: 2.92rem;
  margin: 0 auto; 
  margin-top: -0.56rem; 
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
