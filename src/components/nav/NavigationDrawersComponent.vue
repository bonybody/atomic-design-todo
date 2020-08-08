<template>
  <!--  ナビゲーションドロワー  -->
  <!--  temporary ドロワー外クリックで閉じれる  -->
  <v-navigation-drawer :value="value" @input="$emit('input', $event)" app temporary class="primary">
    <list/>
  </v-navigation-drawer>

</template>

<script>
import List from "./ListComponent";
export default {
  name: "NavigationDrawers",
  components: {List},
  props: {
    value: Boolean
  }
}
</script>

<style scoped>

</style>