<template>
  <div id="app">
    <div :class="isActive? index:index1" @click="yyue">
      <i class="iconfont icon-icon-test"></i>
      <audio
        ref="wrapper"
        src="/static/Chongqingflavor.mp3"
        autoplay="autoplay"
        controls
        width="0.2rem"
        height="0.2rem"
        hidden
        id="au"
      ></audio>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      index: "icon-yyue",
      index1: "icon-yue",
      isActive: true
    };
  },
  mounted() {
    this.$refs.wrapper.play();    
     // 播放音频
    var voice = document.getElementById('au');
    //调用 <audio> 元素提供的方法 play()
    voice.play();
    //判斷 WeixinJSBridge 是否存在
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        voice.play();
    } else {
        //監聽客户端抛出事件"WeixinJSBridgeReady"
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", function () {
                voice.play();
            }, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", function () {
                voice.play();
            });
            document.attachEvent("onWeixinJSBridgeReady", function () {
                voice.play();
            });
        }
    }
    //voiceStatu用來記録狀態,使 touchstart 事件只能觸發一次有效,避免與 click 事件衝突
    var voiceStatu = true;
    //监听 touchstart 事件进而调用 <audio> 元素提供的 play() 方法播放音频
    document.addEventListener("touchstart", function (e) {
        if (voiceStatu) {
            voice.play();
            voiceStatu = false;
        }
    }, false);
  },
  methods: {
    /*音乐控制 */
    yyue: function() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        this.$refs.wrapper.play();
      } else {
        this.$refs.wrapper.pause();
      }
    }
  },
  updated() {}
};
</script>

<style>
.icon-icon-test {
  font-size: 0.25rem;
  font-weight: 700;
  color: #999;
}
.icon-yyue {
  animation: 2s yyue linear infinite forwards;
  width: 0.25rem;
  border-radius: 0.12rem;
  position: fixed;
  right: 0.2rem;
  top: 0.2rem;
  z-index: 100;
}
.icon-yyue i {
  color: black;

}
.icon-yue {
  width: 0.25rem;
  position: fixed;
  right: 0.2rem;
  top: 0.2rem;
  z-index: 100;
}
/* .icon-yue i {
  color: #666;
} */
@keyframes yyue {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

audio {
  position: absolute;
}
</style>
