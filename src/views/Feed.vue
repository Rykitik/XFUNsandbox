<template lang="pug">
.feed 
  h1 Популярное
  .posts
    PostComponent
    PostComponent
    PostComponent
</template>

<script>
import PostComponent from "../components/elements/PostComponent";
export default {
  name: "Feed",
  components: {
    PostComponent,
  },
  metaInfo: {
    title: "Новости",
    titleTemplate: "Новстная лента",
    htmlAttrs: {
      lang: "ru",
      amp: true,
    },
  },
};
</script>

<style scoped>
.feed {
  padding: 15px 25px;
  margin: 0 auto;
}
.posts {
  width: 70%;
  margin: 5%;
}
</style>
