<template>
    <v-list>
      <v-container>
        <v-row>
          <v-col>
            <v-avatar
                color="grey darken-1"
                size="64"
            ><v-img :src="require('@/assets/topic.jpg')"/></v-avatar>
          </v-col>
          <v-col align-self="center"
                 style="color: red"
          >闲来没事做的一个页面</v-col>
        </v-row>
      </v-container>

      <v-divider dark></v-divider>
      <v-list-item
          v-for="[icon, text, id,color] in links"
          @click="routeTop(id)"
      >
        <v-list-item-icon>
          <v-icon :color=color
                  size=50px
          >{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
              style="font-size: 25px; color:#00fdee"
          >{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>


</template>

<script>
import TopHome from "@/view/home/TopHome";
import { mdiAccount } from '@mdi/js';
import eventVue from "@/js/eventVue";

export default {
  name: "RightHome",
  data: () => ({
    links: [
      ['mdi-home', '首页','v-index','blue'],
      ['mdi-heart-plus', '收藏标签','v-label','pink'],
      ['mdi-menu', '智能小工具','v-tool','orange'],
      ['mdi-book-open-page-variant', '博客','v-blog','black'],
      ['mdi-gift-outline', '个人简介','v-self','#00d8fe'],
    ],
    //给tophome传递的数据
    btns: [

    ],
    colors: ['deep-purple accent-4', 'error', 'teal darken-1',"green","pink","orange"],
    items: [...Array(4)].map((_, i) => `Item ${i}`),
    pass: "测试"
  }),
  comments:{
    TopHome,
  },
  props:['data.pass'],
  methods:{
    //收藏标签跳转
    routeTop(id){
      console.log("应用标签跳转"+id);
      switch (id){
        case "v-index":
          this.btns = [
            ['图片', '0'],
            ['图片', '0'],
            ['图片', '0'],
            ['图片', '0'],
            ['图片', 'lg'],
            ['图片', 'b-xl'],
          ];break;
        case "v-label":
          this.btns = [
            ['技术', '0'],
            ['案例', '0'],
            ['素材', '0'],
            ['游戏', '0'],
            ['视频', '0'],
            ['其它', 'b-xl'],
          ];break;
        case "v-tool":
          this.btns = [
            ['在线视频播放', '0'],
            ['在线解压', '0'],
            ['文本提取', '0'],
            ['格式转换', '0'],
            ['webrtc直播', '0'],
            ['其它', 'b-xl'],
          ];break;
        case "v-blog":
          this.btns = [
            ['图片', '0'],
            ['图片', '0'],
            ['图片', '0'],
            ['图片', '0'],
            ['图片', 'lg'],
            ['图片', 'b-xl'],
          ];break;
        case "v-self":
          this.btns = [
            ['图片', '0'],
            ['图片', '0'],
            ['图片', '0'],
            ['图片', '0'],
            ['图片', 'lg'],
            ['图片', 'b-xl'],
          ];break;
      }
      eventVue .$emit("myFun",this.btns);
      },
    test(id){
      console.log(id+this.pass)
      this.pass = "点击后";
    }


  }
}
</script>

<style scoped>

</style>
