<template>
  <v-app>
    <toolbars/>
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import Toolbars from "./components/nav/ToolbarsComponent";

export default {
  name: "App",
  components: {Toolbars},

}
</script>