<template lang="pug">
.post
  .postHeader
    .postHeaderImage
      img(src="~@/assets/logoTUB.jpg")
    .postHeaderInfo
      h5.postAuthor TUB
      .postDate 17 ноя в 10:23
  .postContent
    .postInfo
      .wallPost
        .wallPostText Кто готов к зиме?
        .pageSizedThumbs
          a(onclick="", aria-label="фотография")
            img(src="~@/assets/post.jpg")
        .wraps
          .likeWrap(v-if="isLiked", @click="changeLikeState")
            img(src="~@/assets/heart.png", width="60%")
            .count 2
          .likeWrap(v-else, @click="changeLikeState") 
            img(src="~@/assets/like.png", width="60%")
            .count 1
          .commentWrap 
            img(src="~@/assets/repost.png", width="60%")
            .count 3
</template>
<script>
export default {
  data() {
    return {
      isLiked: false,
    };
  },
  methods: {
    changeLikeState() {
      this.isLiked = !this.isLiked;
    },
  },
};
</script>  
<style scoped>
.wraps {
  margin-top: 5px;
}
.post {
  width: 100%;
  background-color: #FFF;
  padding: 15px 25px 10px 25px;
  border-radius: 10px;
  margin-bottom: 35px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25));
}
.postHeader {
  display: flex;
  align-items: center;
  width: 100%;
}
.postHeaderImage img {
  border-radius: 180px;
  width: 45px;
}
.pageSizedThumbs img {
  width: 100%;
  height: auto;
}
.postHeaderInfo {
  margin: 0 15px;
}
.postAuthor {
  font-size: 20px;
}
.postDate {
  font-size: 12.5px;
  opacity: 0.6;
}
.wallPostText {
  margin: 10px 0;
  font-size: 18px;
}
.wraps {
  display: flex;
}
.likeWrap,
.commentWrap {
  display: flex;
  justify-content: space-between;
  background-color: #F2F2F2;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 3px;
}
.likeWrap:hover,
.commentWrap:hover {
  background-color: #FFEDED;
  cursor: pointer;
}
.likeWrap img,
.commentWrap img {
  width: 50%;
  height: auto;
}
</style>