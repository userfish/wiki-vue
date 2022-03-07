<template>
  <v-row justify="space-around">
    <v-menu
        v-for="([text, rounded], index) in btns"
        :key="text"
        :rounded="rounded"
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

      <v-list>
        <v-list-item
            v-for="item in items"
            :key="item"
            link
        >
          <v-list-item-title v-text="item"></v-list-item-title>
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
    items: [...Array(4)].map((_, i) => `Item ${i}`),
    pass: "默认"

  }),
  created() {
    this.fromRight();
  },
  methods:{
    update(){
      this.items = "测试完成"
    },
    fromRight(){
      eventVue .$on("myFun",(btns)=>{   //这里最好用箭头函数，不然this指向有问题
        console.log(this.btns)
        this.btns = btns;
        console.log(this.btns)
      })
    }
  }
}
</script>

<style scoped>

</style>
