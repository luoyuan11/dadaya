<template>
  <div class="brand">
    <div class="brandbg"></div>
    <div class="product1 wow animated bounceIn">
      <img src="/static/img/brand13.png" alt />
    </div>
    <div class="product2 wow animated zoomIn">
      <img src="/static/img/product1.png" alt />
    </div>
    <div class="product3 wow animated bounceInLeft">
      <img src="/static/img/product5.png" alt />
      <div class="product4">
        <img src="/static/img/product2.png" alt />
      </div>
      <div class="product5">
        <img src="/static/img/product3.png" alt />
      </div>
      <div class="product6">
        <img src="/static/img/product4.png" alt />
      </div>
    </div>
    <div class="product7 wow animated bounceInDown">
      <img src="/static/img/product6.png" alt />
    </div>
    <div class="products">
      <div class="productlist">
        <img class="left wow animated bounceInLeft" src="/static/img/leftLine.png" alt />
        <img class="productImg wow animated bounceInRight" src="/static/img/product7.png" alt />
      </div>
      <div class="productlist">
        <img class="productImg2 wow animated bounceInLeft" src="/static/img/product8.png" alt />
        <img class="right wow animated bounceInRight" src="/static/img/rightLine.png" alt />
      </div>
      <div class="productlist">
        <img class="left wow animated bounceInLeft" src="/static/img/leftLine.png" alt />
        <img class="productImg wow animated bounceInRight" src="/static/img/product9.png" alt />
      </div>
      <div class="productlist">
        <img class="productImg2 wow animated bounceInLeft" src="/static/img/product10.png" alt />
        <img class="right wow animated bounceInRight" src="/static/img/rightLine.png" alt />
      </div>
      <div class="productlist">
        <img class="left wow animated bounceInLeft" src="/static/img/leftLine.png" alt />
        <img class="productImg wow animated bounceInRight" src="/static/img/product11.png" alt />
      </div>
      <div class="productlist">
        <img class="productImg2 wow animated bounceInLeft" src="/static/img/product12.png" alt />
        <img class="right wow animated bounceInRight" src="/static/img/rightLine.png" alt />
      </div>
      <div class="productlist">
        <img class="left wow animated bounceInLeft" src="/static/img/leftLine.png" alt />
        <img class="productImg wow animated bounceInRight" src="/static/img/product13.png" alt />
      </div>
      <div class="productlist">
        <img class="productImg2 wow animated bounceInLeft" src="/static/img/product14.png" alt />
        <img class="right wow animated bounceInRight" src="/static/img/rightLine.png" alt />
      </div>
      <div class="productlist">
        <img class="left wow animated bounceInLeft" src="/static/img/leftLine.png" alt />
        <img class="productImg wow animated bounceInRight" src="/static/img/product15.png" alt />
      </div>
      <div class="productlist">
        <img class="productImg2 wow animated bounceInLeft" src="/static/img/product16.png" alt />
        <img class="right wow animated bounceInRight" src="/static/img/rightLine.png" alt />
      </div>
      <div class="productlist">
        <img class="left wow animated bounceInLeft" src="/static/img/leftLine.png" alt />
        <img class="productImg wow animated bounceInRight" src="/static/img/product17.png" alt />
      </div>
      <div class="productlist">
        <img class="productImg2 wow animated bounceInLeft" src="/static/img/product18.png" alt />
        <img class="right wow animated bounceInRight" src="/static/img/rightLine.png" alt />
      </div>
      <div class="productlist">
        <img class="left wow animated bounceInLeft" src="/static/img/leftLine.png" alt />
        <img class="productImg wow animated bounceInRight" src="/static/img/product19.png" alt />
      </div>
    </div>
    <div class="product7 wow animated bounceInDown">
      <img src="/static/img/product20.png" alt />
    </div>
    <div class="productmenu">
      <div class="product8 wow animated bounceInLeft">
        <img src="/static/img/product24.png" alt />
      </div>
      <div class="product9 wow animated bounceInRight">
        <img src="/static/img/product21.png" alt />
      </div>

      <div class="product11 wow animated bounceInLeft">
        <img src="/static/img/product22.png" alt />
      </div>
            <div class="product10 animated bounceInRight">
        <img src="/static/img/product25.png" alt />
      </div>
      <div class="product12 wow animated bounceInLeft">
        <img src="/static/img/product26.png" alt />
      </div>
      <div class="product13 wow animated bounceInRight">
        <img src="/static/img/product23.png" alt />
      </div>
    </div>
    <router-link to="/Brand" class="brandImg12 wow animated swing" tag="div">
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
  height: 100%;
}
.brand {
  width: 100%;
  background: url(/static/img/product28.jpg);
  background-size: cover;
  overflow: hidden;
  margin-bottom: 0.5rem;
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
.product1 {
  width: 2.2rem;
  height: 1.22rem;
  margin: 0 auto;
  margin-top: 0.12rem;
}
.product2 {
  width: 2.82rem;
  height: 0.24rem;
  margin: 0 auto;
  margin-top: 0.14rem;
}
.product3 {
  width: 3.55rem;
  height: 2.14rem;
  margin: 0 auto;
  margin-top: 0.34rem;
  position: relative;
}
.product4 {
  width: 1.78rem;
  height: 0.25rem;
  position: absolute;
  left: 0.45rem;
  top: -28px;
}
.product5 {
  width: 0.9rem;
  height: 0.5rem;
  position: absolute;
  top: -0.22rem;
  right: 0.3rem;
}
.product6 {
  width: 0.88rem;
  height: 0.6rem;
  position: absolute;
  top: 0.32rem;
  right: 0.3rem;
}
.product7 {
  width: 2.94rem;
  height: 0.83rem;
  margin: 0 auto;
  margin-top: 0.2rem;
}
.products div {
  display: flex;
  align-items: center;
}
.productlist {
  width: 3.05rem;
  height: 1.43rem;
  margin: 0 auto;
  margin-top: 0.17rem;
}
.productlist .left {
  width: 0.35rem;
  height: 1.04rem;
  margin-top: 0.1rem;
}
.productlist .productImg {
  width: 2.8rem;
  margin-left: -0.1rem;
}
.productlist .right {
  width: 0.35rem;
  height: 1.04rem;
  margin-top: 0.1rem;
}
.productlist .productImg2 {
  width: 2.8rem;
  margin-right: -0.1rem;
}

.brandImg12 {
  width: 1.62rem;
  height: 0.87rem;
  margin: 0.2rem auto;
  animation-iteration-count: infinite;
  animation-duration: 4s;
}
.productmenu {
  width: 3.28rem;
  height: 6.67rem;
  background-color: #ffffff;
  border: solid 0.01rem #eb191b;
  margin: 0.1rem auto;
  margin-top: 0.18rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
      padding-bottom: 0.1rem;
}
.productmenu img{
  height: auto;
}
.product8,.product10,.product12{
  	width: 1.59rem;
}
.product9,.product11,.product13{
  	width: 1.55rem;
}
</style>
