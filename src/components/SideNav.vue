 <template lang="pug">
nav.sideNav
    .navItem
      router-link(:to="{ name: 'Feed' }") Популярное
    .navItem
      router-link(:to="{ name: 'Fresh' }") Свежее
    .navItem
      router-link(:to="{ name: 'Subscriptions' }") Подписки
    .navItem
      router-link(:to="{ name: 'Topic', params: { topicID: 1 } }") TUB
    .navItem
      router-link(:to="{ name: 'Topic', params: { topicID: 2 } }") Minecraft
    .navItem
      router-link(:to="{ name: 'Topic', params: { topicID: 3 } }") HYPPER
</template>
<style lang="scss" scoped>
.sideNav {
  position: sticky;
  overflow-y: scroll;
  min-height: 100vh;
  min-width: 280px;
  max-width: 280px;
  width: 25%;
  background-color: #F2F2F2;
  overflow: hidden;
  padding-top: 35px;  
}
.sideNav a {
  padding: 8px 8px 8px 32px;
  margin: 0 auto;
  text-decoration: none;
  font-size: 20px;
  color: #000;
  display: block;
}
.sideNav a:hover {
  opacity: 0.8;
}
.sideNav a:active {
  opacity: 0.4;
}
.router-link-exact-active {
  width: 60%;
  background-color: #FDFDFD;
  border-radius: 10px;
}
@media screen and (max-height: 450px) {
  .sideNav {
    padding-top: 15px;
  }
  .sideNav a {
    font-size: 18px;
  }
}
</style>