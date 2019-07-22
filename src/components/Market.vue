<template>
    <div class="market">
    <div class="marketImg1 wow animated zoomInDown">
      <img src="/static/img/market2.png" alt />
    </div>
    <div class="marketImg2 wow animated zoomInLeft">
      <img src="/static/img/market4.png" alt />
    </div>
    <div class="marketWord wow animated bounceInDown">
      <img src="static/img/marketSS.png" alt="">
    </div>
    <div class="marketImg3 wow animated bounceInRight">
      <img src="/static/img/market12.png" alt />
    </div>
    <div class="marketImg4 wow animated zoomInDown">
      <img src="/static/img/market14.png" alt />
    </div>
    <div class="marketImg5 wow animated fadeIn">
      <img src="/static/img/market15.png" alt />
    </div>
    <div class="redkuang">
      <div class="marketImg6 wow animated fadeInLeft">
        <img src="/static/img/market1.jpg" alt />
      </div>
      <div class="marketImg7 wow animated fadeInRight">
        <img src="/static/img/market3.jpg" alt />
      </div>
      <div class="marketImg8 wow animated fadeInLeft">
        <img src="/static/img/market5.jpg" alt />
      </div>
      <div class="marketImg9 wow animated fadeInRight">
        <img src="/static/img/market7.jpg" alt />
      </div>
    </div>
    <div class="kuangImg1 wow animated bounceInUp">
      <img src="/static/img/market13.gif" alt />
    </div>
    <div class="kuangImg2 wow animated bounceInRight">
      <img src="/static/img/1.gif" alt />
    </div>
    <div class="kuangImg3 wow animated bounceInDown">
      <img src="/static/img/2.gif" alt />
    </div>
    <div class="marketImg10 wow animated zoomIn">
      <img src="/static/img/market19.png" alt />
    </div>
    <router-link to="/Product" tag="div" class="marketImg11 advImg10 wow animated swing">
      <img src="/static/img/market20.png" alt />
    </router-link >
    <div class="footNav">
      <FootNav></FootNav>
    </div>
    
  </div>
</template>

<script>
import FootNav from './FootNav'
export default {
  name: "market",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
.market {
  width: 100%;
  background: url(/static/img/market21.jpg);
  background-size: 100%;
  overflow: hidden;
}
.marketImg1 {
  width: 3.46rem;
  margin: 0 auto;
  margin-top: 0.11rem;
}
.marketImg2 {
  width: 1rem;
  height: 1.25rem;
  margin-top: -0.8rem;
}
.marketWord {
  width: 3rem;
  height: 0.625rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.marketWord img{
  width: 100%;
}
/* .marketWode1 {
  padding: 0 0.1rem;
  border-right: 0.01 rem solid #eb191b;
}
.marketWode1 img {
  height: 0.18rem;
  width: 0.7rem;
      transform: scale(1.2);
  margin: 0 auto;
}
.marketWode1 p {
  font-size: 0.12rem;
  text-align: center;
} */
.ss {
  border: none;
}
.marketImg3 {
  margin: 0 auto;
  width: 3.38rem;
  margin-top: 0.2rem;
}
.marketImg4 {
  width: 2.94rem;
  height: 0.83rem;
  margin: 0 auto;
  margin-top: 0.4rem;
  z-index: 12;
  position: relative;
}
.marketImg4 img {
  z-index: 2;
}
.marketImg5 {
  width: 3.62rem;
  height: 2.27rem;
  margin: 0 auto;
  margin-top: -0.36rem;
}
.redkuang {
  width: 3.28rem;
  height: 6.5rem;
  background-color: #ffffff;
  border: solid 0.01rem #eb191b;
  margin: 0 auto;
  margin-top: -0.5rem;
}
.marketImg6 {
  margin: 0 auto;
  width: 3.2rem;
  height: 1.77rem;
  margin-top: 0.5rem;
}
.marketImg7 {
  width: 3.17rem;
  height: 1.39rem;
  margin: 0 auto;
}
.marketImg8 {
  width: 3.17rem;
  height: 1.38rem;
  margin: 0 auto;
}

.kuangImg1 {
  margin: 0 auto;
  width: 2.18rem;
  height: 1.46rem;
  background: url(/static/img/market16.png);
  background-size: cover;
  overflow: hidden;
  margin-left: 0.9rem;
  margin-top: 0.18rem;
}
.kuangImg1 img {
  width: 2.1rem;
  height: 1.38rem;
  margin-top: 0.08rem;
  /* transform: rotateZ(-5deg) */
  margin-left: 0.01rem;
}
.kuangImg2 {
  margin: 0 auto;
  width: 1.63rem;
  height: 1.13rem;
  background: url(/static/img/market17.png);
  background-size: cover;
  margin-left: 190px;
  margin-top: -14px;
  z-index: 100;
  position: relative;
  transform: rotateZ(2deg);
  overflow: hidden;
}
.kuangImg2 img {
  width: 1.55rem;
  height: 1.01rem;
  margin-top: 0.084rem;
  transform: rotateZ(1deg);
  margin-left: 0.005rem;
}
.kuangImg3 {
  margin: 0 auto;
  width: 1.83rem;
  height: 1.47rem;
  background: url(/static/img/market18.png);
  background-size: cover;
  margin-left: 1.3rem;
  margin-top: -0.22rem;
  z-index: 100;
  position: relative;
  transform: rotateZ(2deg);
  overflow: hidden;
}
.kuangImg3 img {
    width: 1.6rem;
    height: 1.05rem;
    -webkit-transform: rotateZ(-13deg);
    transform: rotateZ(-12.5deg);
    margin-top: 0.25rem;
    margin-left: 0.11rem;
}
.footNav {
  height: 0.4rem;
  background: #eb191b;
  margin-top: 0.5rem;
}
.marketImg10 {
  width: 1.5rem;
  margin-left: 0.12rem;
  margin-top: -2.2rem;
}
.marketImg11 {
  width: 1.62rem;
  height: 0.46rem;
  margin: 0.2rem auto;
  margin-bottom: 0.6rem;
      animation-iteration-count: infinite;
  animation-duration: 4s;
}
</style>
