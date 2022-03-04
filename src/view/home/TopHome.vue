<template>
  <v-list-item>

    <v-toolbar-title id="test" ref="test">初始化界面 {{items}}  </v-toolbar-title>
  </v-list-item>

</template>

<script>
export default {
  name: "TopHome",
  data: ()=>({
    items: "test",
  }),
  methods:{
    update(){
      this.items = "测试完成"
    }
  }
}
</script>

<style scoped>

</style>
