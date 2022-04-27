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
import eventVue from "@/js/eventVue";

import request from '@/api/home/index'


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
    subList:[]
  }),
  comments:{
    TopHome,
  },
  props:['data.pass'],
  methods:{
    //收藏标签跳转
    routeTop(leftType){
      console.log("应用标签跳转"+leftType);
      //请求tophome的数据类型
      request.getRequest('/back-home/getTopData',{leftType: leftType}).then(response => {

        //父节点
        let list = response.data.topList;
        // console.log(response);
        this.btns = [];
        for (let i = 0; i < list.length; i++) {
          this.btns.push([list[i],true])
          // console.log(this.btns)
        }
        eventVue .$emit("myFun",this.btns);

        //子节点
        this.subList = response.data.subList;
        console.log(this.subList)
        eventVue .$emit("topChildFun",this.subList);

        eventVue .$emit("midFun",leftType);
      }).catch(error => {
        console.error(error)
      })
      console.log(this.btns)

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
