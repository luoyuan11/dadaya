<template>
  <div class="brand">
    <div class="brandbg"></div>
    <div class="brandImg1 wow animated bounce">
      <img src="/static/img/brand1.png" alt />
    </div>
    <div class="brandImg2 wow animated fadeInDown">
      <img src="/static/img/brand2.png" alt />
    </div>
    <div class="brandImg3 wow animated fadeInDown">
      <img src="/static/img/brand3.png" alt />
    </div>
    <div class="brandimss wow animated fadeInDown">
      <div class="brandImg4">
        <img src="/static/img/brand4.png" alt />
      </div>&nbsp;
      <div class="brandImg5">
        <img src="/static/img/nav8.png" alt />
      </div>
    </div>
    <div class="dadaWode wowanimated fadeInRight">
      <p>
        东莞青创创业餐饮孵化器有限公司隶属于煌旗集团，是一家着力为大学生、社会青年创业者打造潮牌餐饮品牌的餐饮加盟企业。公司立志于传承中国味道，帮助一千万青创者实现创业梦想！始终坚持着“助力青年餐饮创业者圆梦”的宗旨，以成为中国餐饮产业链最具核心竞争力的餐饮创业孵化公司为目标。公司总部位于东莞市虎门镇东方大厦，办公面积约8000平米，在职员工超1000余人，成为了国内连锁餐饮行业的领军企业。
      </p>
    </div>
      <div class="brandImg6 wow animated bounce">
        <img src="/static/img/brand7.png" alt />
      </div>
       <div class="brandImg7 wow animated bounceIn">
        <img src="/static/img/brand8.png" alt />
        <img src="/static/img/nan.png" alt="" class="nanren">
      </div>
      <div class="barandimgts">
        <div class="brandImg8 wow animated bounceIn"><img src="/static/img/brand9.png" alt=""></div>
        <div class="brandImg9 wow animated bounceIn"><img src="/static/img/brand10.png" alt=""></div>
        <div class="brandImg10 wow animated bounceIn"><img src="/static/img/brand11.png" alt=""></div>
        <div class="brandImg11 wow animated bounceIn"><img src="/static/img/brand12.png" alt=""></div>
      </div>
      <router-link to="/Advantage" class="brandImg12 wow animated bounceIn" tag="div">
        <img src="/static/img/market20.png" alt="" class="wow animated swing" />
      </router-link>
          <div class="footNav">
      <FootNav></FootNav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
.brand {
  width: 100%;
  background: url(/static/img/brand14.jpg);
  background-size: cover;
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.brandbg {
  width: 100%;
  background: url(/static/img/nav9.png);
  overflow: hidden;
  background-size: cover;
  position: absolute;
  top: 0;
  height: 6.67rem;
}
.brandImg1 {
  width: 2.94rem;
  height: 0.83rem;
  margin: 0 auto;
  margin-top: 0.4rem;
}
.brandImg2 {
  width: 2.96rem;
  margin: 0 auto;
  margin-top: 0.1rem;
  animation-delay: 0.5s;
}
.brandImg3 {
  width: 3.01rem;
  height: 2.05rem;
  margin: 0 auto;
  animation-delay: 1s;

}
.brandimss {
  margin-top: 0.1rem;
  display: flex;
  justify-content: center;
}
.brandImg4 {
  width: 1.44rem;
}
.brandImg5 {
  width: 1.57rem;
  height: 0.87rem;
}
.dadaWode {
  margin-top: 0.15rem;
  width: 3.38rem;
  height: 1.53rem;
  background: url(/static/img/brand6.png);
  margin-left: 0.37rem;
}
.dadaWode p {
  margin: 5px auto;
  width: 3.1rem;
  text-indent: 2em;
  color: #fff;
  text-align: left;
  margin-left: 0.26rem;
  padding-top:0.14rem;
  font-size: 0.13rem;
  line-height: 1.1;
}
.brandImg6{
  	width: 2.94rem;
	height: 0.83rem;
  margin: 0 auto;
  margin-top: 0.22rem;
}
.brandImg7{
  	width: 2.6rem;
	height: 1.57rem;
  margin-top: 0.31rem;
  margin-left: 0.34rem;
  position: relative;
}
.nanren{
  position: absolute;
  height: 2rem;
  width: 1.1rem;
  right: -0.6rem;
  top: -0.34rem;
}
.barandimgts{
  width: 3.1rem;
  height: 2.07rem;
  margin: 0 auto;
  margin-top: 0.07rem;
}
.brandImg8{
  width: 1.65rem;
  float: left;
}
.brandImg9{
  width: 1.625rem;
  float: left;
      margin-left: -0.18rem;

}
.brandImg10{
  width: 1.625rem;
  float: left;
    margin-top: -0.2rem;
}
.brandImg11{
  width: 1.56rem;
  float: left;
      margin-left: -0.1rem;
    margin-top: -0.15rem;

}
.brandImg12{
  	width: 1.62rem;
	height: 0.87rem;
  margin: 0.2rem auto;
}
.brandImg12 img{
  animation-iteration-count: infinite;
  animation-duration: 4s;
}
</style>
