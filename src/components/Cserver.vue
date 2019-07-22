<template>
  <div class="server">
    <div class="serverbg"></div>
    <div class="serverImg1">
      <img src="/static/img/server2.png" alt />
    </div>
    <div class="serverImg2">
      <img src="/static/img/server4.png" alt />
    </div>
    <div class="serverImg3">
      <img src="/static/img/server15.png" alt />
      <div class="serverImg4">
        <img src="/static/img/server6.png" alt />
      </div>
      <div class="serverImg5">
        <img src="/static/img/profit14.png" alt />
      </div>
      <div class="serverImg6">
        <img src="/static/img/server14.png" alt />
      </div>
      <div class="serverImg7">
        <img src="/static/img/server16.png" alt />
      </div>
    </div>
    <div class="serverImg8">
      <img src="/static/img/server17.png" alt />
    </div>
    <div class="serverImg9">
      <img src="/static/img/server18.png" alt />
      <div class="serverWode1">
        <div class="serverwodKuang">
          <h2>前期指导</h2>
          <p>Early stage of the guidance</p>
        </div>
        <p class="serverwodeP">拥有系统的理念知识和丰富的实战经验,为客户提供专业的系统培训。</p>
        <ul>
          <li>市场调研</li>
          <li>市场评估</li>
          <li>投资分析</li>
          <li>技术培训</li>
          <li>管理培训</li>
          <li>产品培训</li>
          <li>运营培训</li>
          <li>客户培训</li>
        </ul>
      </div>
    </div>
    <div class="serverImg9 serverImg9s">
      <img src="/static/img/server20.png" alt />
      <div class="serverWode1 serverWode2">
        <div class="serverwodKuang">
          <h2>中期指导</h2>
          <p>Middle guide</p>
        </div>
        <p class="serverwodeP">从0到1的规划，每个细节都为客户细想周到。</p>
        <ul>
          <li>专人选址</li>
          <li>设计图纸</li>
          <li>物资配送</li>
          <li>设备培训</li>
          <li>开业策划</li>
          <li>店员培训</li>
          <li>人群引流</li>
          <li>数据分析</li>
        </ul>
      </div>
    </div>
    <div class="serverImg9">
      <img src="/static/img/server19.png" alt />
      <div class="serverWode1">
        <div class="serverwodKuang">
          <h2>后期指导</h2>
          <p>Late guidance</p>
        </div>
        <p class="serverwodeP">
          成功开业后，更有强大后期服务
          让你时刻领先市场！
        </p>
        <ul>
          <li>督导巡店</li>
          <li>技术提升</li>
          <li>活动营销</li>
          <li>宣传海报</li>
          <li>产品升级</li>
          <li>物资采购</li>
          <li>活动策划</li>
          <li>远程培训</li>
        </ul>
      </div>
    </div>
    <div class="serverImg10">
      <img src="/static/img/server29.png" alt />
    </div>
    <div class="serverLiucheng">
      <div class="serverLiucheng1 wow animated bounceInLeft">
        <p>【强大研发团队】</p>
        <p>数百人研发团队，口味有保障！</p>
        <div class="serverLiucheng1Img">
          <img src="/static/img/server1.jpg" alt />
        </div>
      </div>
      <div class="serverLiucheng1 wow animated bounceInRight">
        <p>【强大客服团队】</p>
        <p>数百人客服团队，24小时在线服务！</p>
        <div class="serverLiucheng1Img">
          <img src="/static/img/server3.jpg" alt />
        </div>
      </div>
      <div class="serverLiucheng1 wow animated bounceInLeft">
        <p>【强大策划团队】</p>
        <p>多部门联合策划，创业保驾护航！</p>
        <div class="serverLiucheng1Img">
          <img src="/static/img/server5.jpg" alt />
        </div>
      </div>
      <div class="sanjiao wow animated bounceInDown">
        <img src="/static/img/sanjiao.png" alt />
      </div>
    </div>
    <div class="profitImg13 wow animated bounceIn">
      <p>
        电话或网络咨询合作事项获取资料或购买样品了
        <br />解公司和产品来公司总部参观考察
      </p>
      <p>
        预约面谈提交合作申请合作资格初审合作前资金、
        市场调研准备
      </p>
      <p>客户或者代理方寻找两个以上备选店面作为选择</p>
      <p>验收、试营业正式开业、营业公司继续指导与支持</p>
    </div>
        <div class="serverImg1 serverImg11 wow animated bounceInDown">
      <img src="/static/img/server31.png" alt />
    </div>
      <div class="serverImg12 wow animated zoomIn">
      <img src="/static/img/server7.png" alt />
    </div>
    <div class="guanwang wow animated zoomIn">
      <img src="/static/img/server32.png" alt />
      <img src="/static/img/server9.jpg" alt />
    </div>
    <div class="lianxi wow animated fadeIn">
      <p>加盟电话：400-964-7757</p>
      <p>官网网址：www.ddyaa.net</p>
      <p>地址：东莞虎门东方商业大厦A栋3层</p>
    </div>
     <router-link to="/" class="brandImg12 wow animated wobble" tag="div">
        <img  src="/static/img/back.png" alt />
      </router-link>
        <div class="footNav">
      <FootNav></FootNav>
    </div>
  </div>
</template>

<script>
export default {
  name: "server",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
}
.server {
  width: 100%;
  background: url(/static/img/server13.jpg);
  background-size: cover;
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.serverbg {
  width: 100%;
  background: url(/static/img/nav9.png);
  overflow: hidden;
  background-size: cover;
  position: absolute;
  top: 0;
  height: 6.67rem;
}
.serverImg1 {
  width: 2.94rem;
  margin: 0 auto;
  margin-top: 0.41rem;
}
.serverImg2 {
  width: 2.82rem;
  height: 0.24rem;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.serverImg3 {
  width: 3.28rem;
  height: 2.76rem;
  margin: 0 auto;
  margin-top: 0.32rem;
  position: relative;
}
.serverImg4 {
  width: 1.08rem;
  height: 0.53rem;
  position: absolute;
  top: 0;
  left: 0.2rem;
}
.serverImg5 {
  width: 1.14rem;
  position: absolute;
  left: 0.27rem;
  top: -0.22rem;
}
.serverImg6 {
  width: 1.14rem;
  height: 1.09rem;
  position: absolute;
  right: 0.27rem;
  top: -0.23rem;
}
.serverImg7 {
  width: 0.56rem;
  height: 0.49rem;
  position: absolute;
  right: 0.13rem;
  bottom: 1rem;
}
.serverImg8 {
  width: 2.94rem;
  margin: 0 auto;
  margin-top: 0.23rem;
}
.serverImg9 {
  height: 1.52rem;
  width: 3.53rem;
  margin-left: 0.22rem;
  margin-top: 0.24rem;
  position: relative;
}
.serverWode1 {
  position: absolute;
  width: 1.78rem;
  top: 0;
  right: 0;
}
.serverwodKuang {
  width: 1.5rem;
  height: 0.24rem;
  border: solid 0.01rem #ffffff;
  margin: 0 auto;
  margin-top: 0.21rem;
  color: #ffffff;
}
.serverwodKuang h2 {
  font-size: 0.17rem;
  width: 0.7rem;
  padding: 0 0.05rem;
  margin: 0 auto;
  margin-top: -0.12rem;
  background: rgba(243, 16, 16, 1);
}
.serverWode1 p {
  font-size: 0.09rem;
}
.serverwodeP {
  width: 2.1rem;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
  transform: scale(0.8);
  margin-left: -0.1rem;
  margin-top: 0.1rem;
}
.serverWode1 ul {
  width: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  transform: scale(0.8);
  color: #ffffff;
  margin-left: -0.24rem;
  margin-top: 0.1rem;
}
.serverWode1 ul li {
  margin: 0 0.03rem;
  margin-bottom: 0.1rem;
}
.serverImg9s {
  margin-left: 0;
}
.serverWode2 {
  left: 0;
}
.serverImg10 {
  width: 2.94rem;
  margin: 0 auto;
  margin-top: 0.18rem;
}
.serverLiucheng {
  position: relative;
  top: 0.2rem;
}
.serverLiucheng1 p:first-child {
  font-size: 0.18rem;
  font-weight: 700;
  color: #ea0a2a;
  text-align: end;
  padding-right: 0.35rem;
}
.serverLiucheng1 p:nth-of-type(2) {
  color: #ea0a2a;
  text-align: end;
  padding-right: 0.35rem;
  margin: 0.02rem 0;
}
.serverLiucheng1Img {
  width: 2.69rem;
  height: 1.56rem;
  margin-left: 0.63rem;
  margin-bottom: 0.1rem;
}
.sanjiao {
  width: 0.3rem;
  height: 6.45rem;
  position: absolute;
  left: 0.3rem;
  top: 0;
}
.sanjiao img {
  height: 100%;
}
.profitImg13 {
  width: 3.06rem;
  height: 1.56rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  background: url(/static/img/profit10.png);
  background-size: 100%;
  overflow: hidden;
}
.profitImg13 p {
  text-align: left;
  padding-left: 0.4rem;
  font-size: 0.1rem;
  color: #ea0a2a;
  line-height: 1;
}
.profitImg13 p:nth-of-type(1) {
  margin-top: 0.05rem;
}
.profitImg13 p:nth-of-type(2){
  margin-top: 0.24rem
}
.profitImg13 p:nth-of-type(3){
  margin-top: 0.3rem
}
.profitImg13 p:nth-of-type(4){
  margin-top: 0.25rem
}
.serverImg11{
  margin-top: 0.22rem;
}
.serverImg12{
  	width: 2.56rem;
	height: 0.21rem;
  margin: 0 auto;
  margin-top: 0.3rem;
}
.guanwang{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.27rem;
}
.guanwang img:nth-of-type(1){
  	width: 0.81rem;
	height: 0.92rem;
  margin-right: 0.26rem;
}
.guanwang img:nth-of-type(2){
	width: 0.81rem;
	height: 0.81rem;
  margin-left: 0.17rem;

}
.lianxi{
  margin-top: 0.15rem;
  margin-left: 0.47rem;
}
.lianxi p{
  	color: #ea0a2a;
    text-align: left;
    font-size: 0.17rem;
}

.brandImg12{
  	width: 1.62rem;
	height: 0.87rem;
  margin: 0.2rem auto;
        animation-iteration-count: infinite;
  animation-duration: 4s;
}
</style>
