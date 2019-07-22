<template>
  <div class="nav">
    <div class="navbg">
        <div class="navImg1"><img src="/static/img/nav1.png" alt=""></div>
        <ul class="navLink">
          <router-link to="/Market" class="navLinkImg navLinkImg1" tag="li"><img src="/static/img/nav2.png" alt=""></router-link>
          <router-link to="/Product" class="navLinkImg navLinkImg2" tag="li"><img src="/static/img/nav3.png" alt=""></router-link>
          <router-link to="/Brand" class="navLinkImg navLinkImg3" tag="li"><img src="/static/img/nav4.png" alt=""></router-link>
          <router-link to="/Advantage" class="navLinkImg navLinkImg4" tag="li"><img src="/static/img/nav7.png" alt=""></router-link>
          <router-link to="/Profit" class="navLinkImg navLinkImg5" tag="li"><img src="/static/img/nav5.png" alt=""></router-link>
          <router-link to="/Cserver" class="navLinkImg navLinkImg6" tag="li"><img src="/static/img/nav6.png" alt=""></router-link>
        </ul>
        <div class="navImg7 wow animated "><img src="/static/img/nav8.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 100%;
}
.nav{
  margin: 0;
  width: 100%;
  height: 6.67rem;
  background:url(/static/img/nav1.jpg);
  background-size: cover;
}
.navbg{
    margin: 0;
  width: 100%;
  height: 6.67rem;
  background:url(/static/img/nav9.png);
  background-size: cover;
  overflow: hidden;
}
.navImg1{
  	width: 2.34rem;
  height: 0.52rem;
  margin: 0 auto;
  margin-top: 0.4rem;
  animation: 1s pulse  linear forwards infinite;
}
.navLink{
  width: 2.6rem;
  margin: 0 auto;
  margin-top: 0.14rem
}
.navLinkImg{
  width: 2.44rem;
  height: 0.6rem;
  margin: 0.025rem 0;
}
.navLink li:nth-of-type(even){
  margin-left: 0.16rem;
  animation: 1s RightAndLeft cubic-bezier(0.4, 0, 1, 1) forwards;
}
.navLink li:nth-of-type(even) img{
  animation: 2s pulse  linear forwards infinite;
}
.navLink li:nth-of-type(odd) img{
  animation: 2s pulse  linear forwards infinite;
  animation-delay: 0.5s
}
.navLink li:nth-of-type(odd){
  margin-left: 0.16rem;
  animation: 1s LeftAndRight cubic-bezier(0.4, 0, 1, 1) forwards;
}
.navImg7{
	width: 2.99rem;
  height: 1.67rem;
  margin: 0 auto;
  animation: 2.5s pulse  linear forwards infinite

}
@keyframes RightAndLeft{
   from{
      transform: translateX(100px);
   }
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translateX( 75px);
    transform: translateX( 75px);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translateX( 50px);
    transform: translateX( 50px);
  }

  90% {
    -webkit-transform: translateX( 10px);
    transform: translateX( 10px);
  }
}
@keyframes LeftAndRight{
     from{
      transform: translateX(-100px);
   }
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translateX( -75px);
    transform: translateX( -75px);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translateX( -50px, 0);
    transform: translateX( -50px);
  }

  90% {
    -webkit-transform: translateX( -10px);
    transform: translateX( -10px);
  }
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
