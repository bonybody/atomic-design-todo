<template>
  <nav>
    <!--  ツールバー  -->
    <v-toolbar flat class="grey lighten-4">
      <!-- ドロワーを表示するボタンアイコン -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

      <!--   ツールバーに表示するメインのタイトル   -->
      <!--   uppercaseで大文字表記   -->
      <v-toolbar-title class=" grey--text">
        <span class="font-weight-light">Vuetify.js Training <span class="font-weight-bold">Bonybody</span></span>
      </v-toolbar-title>

      <!--  spacer以降は反対方向に寄せられる  -->
      <v-spacer></v-spacer>

      <v-btn href="https://github.com/bonybody/vuetify-practice" target="_blank" depressed class="grey--text">
        <span>GitHub</span>
        <v-icon right>code</v-icon>
      </v-btn>

    </v-toolbar>
    <!--  ツールバーここまで  -->

    <!--  NavigationDrawers.vue  -->
    <navigation-drawers v-model="drawer"></navigation-drawers>

  </nav>
</template>

<script>
import NavigationDrawers from "./NavigationDrawersComponent";

export default {
  name: "Toolbars",
  components: {NavigationDrawers},
  data() {
    return {
      drawer: false,
    }
  }
}
</script>

<style scoped>

</style>