<template>
  <v-app>
    <v-navigation-drawer
        app
        :src="require('../../assets/right-back.png')"
    >
      <RightHome/>
      <!-- -->
    </v-navigation-drawer>


    <!-- 根据应用组件来调整你的内容 -->

    <v-main>
      <v-img
          :src="require('../../assets/backgroup.jpg')"
      />
    </v-main>

  </v-app>
</template>

<script>
import RightHome from "@/view/home/RightHome";
export default {
  name: "Home",
  components: {RightHome}
}
</script>

<style scoped>

</style>
