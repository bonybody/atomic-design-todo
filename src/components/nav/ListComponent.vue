<template>
  <!--   リスト   -->
  <v-list>

    <!--    v-list-item リスト内のアイテム一個単位 内容をラップ    -->
    <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
    >
      <v-list-item-icon>
        <v-icon class="white--text" v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text" v-text="item.title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-list>

</template>

<script>
export default {
  name: "List",
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "dashboard",
          to: "/"
        },
        {
          title: "Favorite",
          icon: "favorite",
          to: "/"
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>