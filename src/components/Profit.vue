<template>
  <div class="brand">
    <div class="brandbg"></div>	
    <div class="profitImg1 wow animated bounceInDown"><img src="/static/img/profit2.png" alt=""></div>
    <div class="profitImg2 wow animated zoomIn"><img src="/static/img/profit4.png" alt=""></div>
    <div class="profitImg3"><img class="wow animated zoomIn" src="/static/img/profit12.png" alt="">
        <div class="profitImg4 wow animated zoomInLeft"><img src="/static/img/profit13.png" alt=""></div>
        <div class="profitImg5 wow animated zoomInRight"><img src="/static/img/profit11.png" alt=""></div>      
        <div class="profitImg6 animated fadeInLeft  "><img src="/static/img/profit14.png" alt=""></div>      
    </div>
    <div class="profitWode wow animated zoomIn">
        <p><span>万元起步轻投资</span><span>-投资-</span><span>定制开店钱生钱</span></p>
        <p><span>最低5㎡租金低</span><span>-店铺-</span><span>灵活选址人气高</span></p>
        <p><span>1人开店无需店员</span><span>-人工-</span><span>冷链运输到货快</span></p>
        <p><span>线上线下同时售卖</span><span>-经营-</span><span>现装盒装出品快</span></p>
    </div>
    <div class="profitImg7 wow animated bounceInDown"><img src="/static/img/profit6.png" alt=""></div>      
    <div class="profitImg8 wow animated bounceInLeft"><img src="/static/img/profit1.jpg" alt=""></div>      
    <div class="profitImg9 wow animated bounceInRight"><img src="/static/img/profit3.jpg" alt=""></div>      
    <div class="profitImg10 wow animated bounceInLeft"><img src="/static/img/profit5.jpg" alt=""></div> 
    <div class="profitImg11 wow animated bounceInDown"><img src="/static/img/profit8.png" alt=""></div>      
    <div class="profitImg12 wow animated bounceInUp"><img src="/static/img/profit9.png" alt=""></div>     
    <div class="profitImg13 wow animated fadeIn">
      <p>80%回报率、98%开店成功率、投资门槛低、外卖合作。</p>
 <p>300余家成功案例，实地培训；连锁品牌，提供低价进货渠道。</p>
 <p>无需经验，开店指导，驻店支持，定期巡视</p>
 <p>线上线下同时营销，KOL强势引流，30多家广告平台投放，360°营造知名度。</p>
    </div>     
      <router-link to="/Cserver" class="brandImg12 wow animated swing" tag="div">
        <img src="/static/img/market20.png" alt />
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
  background: url(/static/img/profit7.jpg);
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
.profitImg1 {
	width: 2.94rem;
	height: 0.83rem;
  margin: 0 auto;
  margin-top: 0.43rem;
}
.profitImg2{
  	width: 2.82rem;
	height: 0.24rem;
    margin: 0 auto;
  margin-top: 0.14rem;
}
.profitImg3{
  width: 3.16rem;
	height: 1.68rem;
  margin: 0 auto;
  margin-top: 0.34rem;
  position: relative;
}
.profitImg4{
  width: 0.92rem;
  height: 0.5rem;
  position: absolute;
  left: 0.2rem;
  top: 0.18rem;
}
.profitImg5{
	width: 0.86rem;
	height: 1.26rem;
  position: absolute;
  top: -0.22rem;
  right: 0.06rem;
}
.profitImg6{
	width: 1.09rem;
	height: 0.2rem;
  position: absolute;
  top: -0.18rem;
  left: 0.13rem;
}
.profitWode{
  	width: 3.14rem;
	height: 0.9rem;
  background: #eb093c;
 margin-left: 0.30rem;
 padding: 0.05rem 0;
}
.profitWode p{
  font-size: 0.12rem;
  color: #fff;
  	line-height: 0.2rem;
    border-bottom: 0.005rem solid #fff;
    margin: 0 0.18rem;
    display: flex;
    justify-content: space-around;
}
.profitWode p span:nth-of-type(1){
  width: 1rem;
}
.profitWode p span:nth-of-type(2){
  font-weight: 700;
}
.profitImg7{
  	width: 2.94rem;
	height: 0.83rem;
  margin: 0 auto;
  margin-top: 0.11rem;
}

.profitImg8,.profitImg9,.profitImg10{
  	width: 2.91rem;
	height: 2.64rem;
  margin: 0 auto;
  margin-top: 0.13rem
}
.profitImg8{
    margin-top: 0.06rem
}
.profitImg11 {
	width: 2.94rem;
	height: 0.83rem;
  margin: 0 auto;
  margin-top: 0.13rem;
}
.profitImg12 {
	width: 3.06rem;
	height: 0.84rem;
  margin: 0 auto;
  margin-top: 0.13rem;
}
.profitImg13{
	width: 3.06rem;
  height: 1.56rem;
  margin: 0 auto;
  margin-top: 0.13rem;
  background: url(/static/img/profit10.png);
  background-size: 100%;
  overflow: hidden;
}
.profitImg13 p{
  text-align: left;
  padding-left:0.4rem;
  font-size: 0.1rem;
  color: #ea0a2a;
  line-height: 1;
  height: 0.24rem;
}
.profitImg13 p:nth-of-type(1){
  margin-top: 0.05rem;
  line-height: 0.24rem;
}
.profitImg13 p:nth-of-type(2){
  margin-top: 0.18rem
}
.profitImg13 p:nth-of-type(3){
  margin-top: 0.3rem;
  margin-top: 0.18rem;
  line-height: 0.24rem;

}
.profitImg13 p:nth-of-type(4){
  margin-top: 0.18rem;
}
.brandImg12{
  	width: 1.62rem;
	height: 0.87rem;
  margin: 0.2rem auto;
        animation-iteration-count: infinite;
  animation-duration: 4s;
}

</style>
