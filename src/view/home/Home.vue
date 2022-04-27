<template>
  <v-app app
  >
    <v-navigation-drawer
        app
        :value=visit
        :src="require('@/assets/right-back.png')"
        fixed
    >
      <RightHome/>
    </v-navigation-drawer>

    <v-img
        :src="require('@/assets/backgroup.jpg')"
    >
      <v-app-bar app
                 :value=true
                 shaped
                 color=rgba(0,0,0,0)
                 :elevation=10
                 :collapse=!visit
                 :collapse-on-scroll=true
      >


          <v-app-bar-nav-icon @click="getApp()"
                              style="color: rgba(0,0,0,0)"
          ><v-img
              :src="require('@/assets/icon.png')"
              contain
              height=65
              width=65
              align=left
          />
          </v-app-bar-nav-icon>
        <TopHome/>
      </v-app-bar>


      <v-main app>
        <MidHome/>
      </v-main>
    </v-img>

  </v-app>
</template>

<script>
import RightHome from "@/view/home/RightHome";
import TopHome from "@/view/home/TopHome";
import MidHome from "@/view/home/MidHome";

export default {
  name: "Home",
  components: {
    RightHome,
    TopHome,
    MidHome
  },
  data: () => ({
    drawer: null,
    visit: false
  }),
  methods: {
    //应用栏显示
    getApp() {
      console.log(this.visit);
      if (this.visit) this.visit = false;
      else this.visit = true;
    }
  }
}
</script>

<style scoped>

</style>
