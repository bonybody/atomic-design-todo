<template>
  <nav>
    <!--  ツールバー  -->
    <v-toolbar flat class="grey lighten-4">
      <!-- ドロワーを表示するボタンアイコン -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>

      <!--   ツールバーに表示するメインのタイトル   -->
      <!--   uppercaseで大文字表記   -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Vuetify.js Training</span>
        <span> Bonybody</span>
      </v-toolbar-title>

      <!--  spacer以降は反対方向に寄せられる  -->
      <v-spacer></v-spacer>

      <v-btn depressed class="grey--text">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
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