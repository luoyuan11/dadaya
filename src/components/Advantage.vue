<template>
  <div class="advantage">
    <div class="advantagebg"></div>
    <div class="advImg1 wow animated bounceInDown"><img src="/static/img/adv2.png" alt=""></div>
    <div class="advImg2 wow animated bounceIn"><img src="/static/img/adv3.png" alt=""></div>
    <div class="advImg3 wow animated bounceInDown">
      <img src="/static/img/adv16.png" alt="">
      <img src="/static/img/adv4.png" alt="" class="advWode">
    </div>
    <div class="advImg4 wow animated bounceInUp">
      <img src="/static/img/adv5.png" alt="">
    </div>
    <div class="advImg5 wow animated bounceInDown"><img src="/static/img/adv2.png" alt=""></div>
    <div class="advImg6 wow animated zoomIn"><img src="/static/img/adv7.png" alt=""></div>	
    <div class="advImg7 wow animated bounceInDown">
      <img src="/static/img/adv8.png" alt="">
      <img src="/static/img/adv9.png" alt="">
    </div>
    <div class="advImg8 wow animated bounceInUp">
      <img src="/static/img/adv10.png" alt="">
    </div>
        <div class="advImg9 wow animated zoomIn">
      <img src="/static/img/adv11.png" alt="">
    </div>

    <div class="redKuang">

      <img class="wow animated bounceInLeft" src="/static/img/adv12.png" alt="">
      <img class="wow animated bounceInRight" src="/static/img/adv13.png" alt="">
      <img class="wow animated bounceInLeft" src="/static/img/adv14.png" alt="">
      <img class="wow animated bounceInRight" src="/static/img/adv15.png" alt="">
    </div>
         <router-link to="/Profit" class="advImg10 wow animated swing" tag="div">
        <img src="/static/img/market20.png" alt />
      </router-link>
          <div class="footNav">
      <FootNav></FootNav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advantage",
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
.advantage {
  width: 100%;
  background: url(/static/img/adv1.jpg);
  background-size: cover;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.advantagebg {
  width: 100%;
  background: url(/static/img/nav9.png);
  overflow: hidden;
  background-size: cover;
  position: absolute;
  top: 0;
  height: 6.67rem;
}
.advImg1{
      width: 2.94rem;
    margin: 0 auto;
    margin-top: 0.3rem
}
.advImg2{
  	width: 1.65rem;
	height: 0.92rem;
  margin-top: 0.05rem;
  margin-left: 0.3rem
}
.advImg3{
  	width: 2.92rem;
    margin-left: 0.18rem;
    position: relative;
        margin-top: -0.2rem;
        height: 1.2rem;
}
.advWode{
  	width: 1.14rem;
	height: 1.83rem;
  position: absolute;
     right: -40px;
    top: -44px;
}
.advImg4{
  height: 1.2rem;
  width: 3.4rem;
  margin: 0 auto;
  margin-top: 0.42rem;
  position: relative;
}
.advImg5{
    width: 2.94rem;
    margin: 0 auto;
    margin-top: 0.05rem
}
.advImg6{
  width: 2.2rem;
  height: 0.5rem;
  margin: 0 auto;
  margin-top: 0.42rem;
}

.advImg7{
  display: flex;
  justify-content: center;
}
.advImg7 img{
  width: 1.28rem;
	height: 1.28rem;
  margin: 0 0.08rem;
}
.advImg8{
  width: 2.98rem;
  margin: 0 auto;
  height: 0.77rem;
  margin-top: 0.06rem;
}
.advImg9{
  width: 2.09rem;
  height: 0.31rem;
  margin: 0 auto;
  margin-top: 0.24rem;
}
.redKuang{
  width: 3.1rem;
  margin: 0 auto;
  margin-top: 0.18rem;
}
.redKuang img{
  height: 1.47rem;
  margin: 0.05rem 0;
}
  .advImg10{
  	width: 1.62rem;
	height: 0.87rem;
  margin: 0.2rem auto;
    animation-iteration-count: infinite;
  animation-duration: 4s;
  }
</style>
