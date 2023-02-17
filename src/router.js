import Vue from "vue";
import Router from "vue-router";
import Home from "./view/home.vue";
import Index from "./view/index.vue";
import leaveMessage from "../../social/src/view/chat/leave_message";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        // {
        //   path: '/leavemessage',
        //   name: 'leavemessage',
        //   component: leaveMessage,
        //   meta: {
        //     backgroundImage: 'social_null_bg.jpg',
        //     index: 1
        //   }
        // }
      ]
    }]
});
