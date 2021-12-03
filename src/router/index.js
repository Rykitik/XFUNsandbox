import Vue from "vue";
import VueRouter from "vue-router";
import Feed from "../views/Feed.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Feed",
    component: Feed
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const originalPush = router.replace;
router.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }

  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err;
    }

    return Promise.reject(err);
  });
};

export default router;
