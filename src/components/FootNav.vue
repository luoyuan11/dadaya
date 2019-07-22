<template>
  <div id="FootNav">
    <router-link tag="div" v-for="(icon,index) in icons" :key="index" :to="icon.inkto" :class="isactive? 'yan1':'' "  @click="bian">
      <span :class="[icon.iconName,'iconfont']"></span>
      <span>{{icon.CName}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FootNav",
  data() {
    return {
      icons: [
        { iconName: "icon-market", CName: "市场" , inkto:"/Market"},
        { iconName: "icon-zhengfangti", CName: "产品", inkto:"/Product" },
        { iconName: "icon-pinpai", CName: "品牌" , inkto:"/Brand"},
        { iconName: "icon-youshi", CName: "优势", inkto:"/Advantage"},
        { iconName: "icon-touzi", CName: "投资", inkto:"/Profit"},
        { iconName: "icon-fuwu2", CName: "服务" , inkto:"/Cserver"}
      ],
      isactive:false
    };
  },
  methods:{
    bian:function(){
        this.isactive=true
    }
  }
};
</script>

<style scoped>
#FootNav {
  position: fixed;
  bottom: 0;
  height: 0.4rem;
  background: #eb191b;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  align-items: center;
  width: 100%;
  z-index: 104;
}
#FootNav div span{
  display:block;
}
.router-link-active{
  color: rgb(226, 211, 79);
}
</style>
