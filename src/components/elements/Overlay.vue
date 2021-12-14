<template lang="pug">
.overlay
  .bg
    .overlayContent 
      slot
</template>
<style scoped>
.overlay {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 25;
}
.bg {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  padding: 150px 0;
  position: fixed;
  position: absolute;
  overflow: hidden;
  z-index: 26;
}
.overlayContent {
  position: fixed;
  display: flex;
  margin: auto;
  overflow: hidden;
  left: 0;
  right: 0;
  min-width: 700px;
  width: 60%;
  height: 70vh;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  z-index: 65;
}
</style>
// changeOverlayView() {
//       this.overlay = !this.overlay;
//     },