<template>

  <div  v-if= "type == 'v-index'"><Index/></div>
  <div  v-else-if="type == 'v-tool'" ><Rtc/></div>
</template>

<script>
import Index from "@/view/center/Index";
import eventVue from "@/js/eventVue";
import Rtc from "@/view/tool/Rtc";

export default {
  components:{
    Index,
    Rtc
  },
  data:() => ({
    type: 'v-index'
  }),
  created() {
    this.fromRight();
  },
  methods:{
    fromRight() {
      eventVue .$on('midFun',(type) => {
        console.log(222222222)
        this.type = type;
        console.log(this.type)
      })
    }
  }
}
</script>

<style scoped>

</style>
