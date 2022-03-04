<template>
    <v-list>
      <v-container>
        <v-row>
          <v-col>
            <v-avatar
                color="grey darken-1"
                size="64"
            ></v-avatar>
          </v-col>
          <v-col>以下为初始化测试功能</v-col>
        </v-row>
      </v-container>

      <v-divider dark></v-divider>
      <v-list-item
          v-for="[icon, text, id] in links"
          :key="icon"
          link
          @click="routeTop(id)"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
              style="color: red;font-size: 25px"
          >{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>


</template>

<script>
import TopHome from "@/view/home/TopHome";

export default {
  name: "RightHome",
  data: () => ({
    links: [
      ['mdi-inbox-arrow-down', '收藏标签','v-label'],
      ['mdi-inbox-arrow-up', '智能小工具','v-rtc'],
    ],
  }),
  comments:{
    TopHome
  },
  methods:{
    //收藏标签跳转
    routeTop(id){
      console.log("收藏标签跳转"+id);
      if (id == 'v-label'){
        console.log("收藏标签跳转测试"+TopHome);
        this.$refs.TopHome = "修改";
      }
    }


  }
}
</script>

<style scoped>

</style>
