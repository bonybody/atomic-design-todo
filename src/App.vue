<template>
  <v-app>
    <toolbars/>
    <v-main class="grey lighten-4">
      <v-btn v-for="route in routes" :key="route.name" :to="route.path">{{ route.name }}</v-btn>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import Toolbars from "./components/nav/ToolbarsComponent";
import routes from "./router/routes.js";

export default {
  name: "App",
  components: { Toolbars },
  data: () => {
    return {
      routes,
    }
  },
  mounted() {
    console.log(this.routes)
  }
}
</script>