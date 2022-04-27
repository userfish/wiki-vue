<template>
  <v-row justify="space-around">
    <v-menu
        v-for="([text, rounded], index) in btns"
        :key="text"
        :rounded=rounded
        offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
            :color="colors[index]"
            class="white--text ma-5"
            v-bind="attrs"
            v-on="on"
        >
          {{ text }}
        </v-btn>
      </template>

      <v-list
          v-for="(values,key) in subList"
          v-if="key === text"
      >
          <v-list-item
            v-for="value in values"
            link
        >
          <v-list-item-title v-text="value"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
import eventVue from "@/js/eventVue";

export default {
  name: "TopHome",
  data: ()=>({
    btns: [
      ['图片', '0']
    ],
    colors: ['deep-purple accent-4', 'error', 'teal darken-1',"green","pink","orange"],
    subList: [],

  }),
  created() {
    this.fromRight();
  },
  methods:{
    update(){
      this.items = "测试完成"
    },
    fromRight(){
      console.log("收到来自右侧的数据")
      eventVue .$on("myFun",(btns)=>{   //这里最好用箭头函数，不然this指向有问题
        console.log("父节点："+this.btns)
        this.btns = btns;
        // console.log(1111111111)
      })

      eventVue .$on("topChildFun",(subList) =>{
        console.log("子节点目录："+ subList);
        this.subList = subList;
      })
    }
  }
}
</script>

<style scoped>

</style>
