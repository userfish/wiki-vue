<template>
  <el-col>
    <video id="videoElement" width="300px" height="200px"></video>
    <el-button @click="play">播放</el-button>
  </el-col>

</template>

<script>
import flvjs from 'flv.js'


export default {
  name: "Rtc",
  data: () =>({
    videoList:[
      {
        src:'http://1.15.147.111:8080/live/livestream.flv'
      },

    ],
    flvPlayer: null

  }),
  mounted() {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement');
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://1011.hlsplay.aodianyun.com/demo/game.flv'
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
    }
  },
  methods:{
    play () {
      this.flvPlayer.play();
    }
  }
}


</script>

<style scoped>

</style>
