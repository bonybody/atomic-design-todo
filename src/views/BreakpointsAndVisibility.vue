<template>
  <div class="main">
    <h1>this is a Breakpoints & Visibility page</h1>

    <!-- mdサイズ以下で要素が隠れる -->
    <v-btn class="hidden-md-and-down">hidden-md-and-down</v-btn>

    <!--  mdサイズ以下で要素が表示される  -->
    <v-btn class="hidden-md-and-up">hidden-md-and-up</v-btn>

    <!--  smサイズでのみ表示される  -->
    <v-btn class="hidden-sm-only">hidden-md-only</v-btn>
  </div>
</template>

<script>
export default {
  name: "BreakpointsAndVisibility"
}
</script>

<style scoped>

</style>