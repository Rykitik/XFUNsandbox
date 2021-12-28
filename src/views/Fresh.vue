<template lang="pug">
.fresh 
  h1 Свежее
  .posts
    PostComponent
    PostComponent
    PostComponent
</template>

<script>
import PostComponent from "../components/elements/PostComponent";
export default {
  name: "Fresh",
  components: {
    PostComponent,
  },
  metaInfo: {
    title: "Свежее",
    titleTemplate: "%s | XFUN",
  },
};
</script>

<style scoped>
.fresh {
  padding: 15px 25px;
  margin: 0 auto;
}
.posts {
  width: 70%;
  margin: 5%;
}
</style>