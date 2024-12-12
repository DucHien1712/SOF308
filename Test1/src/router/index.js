import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../components/EntryPage.vue";
import NotificationPage from "../components/NotificationPage.vue";

const routes = [
  { path: "/", component: EntryPage }, // Trang Entry
  { path: "/notification", component: NotificationPage }, // Trang Thông báo
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
