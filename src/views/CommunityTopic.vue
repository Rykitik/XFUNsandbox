<template lang="pug">
.topic 
  h1 Одна из тематик сообщества(Категория {{ $route.params.topicID }})
</template>
<script>
export default {
  metaInfo: {
    title: "Сообщесто",
    titleTemplate: "%s | XFUN",
  },
};
</script>
<style lang="scss" scoped>
.topic {
  padding: 15px 25px;
}
</style>