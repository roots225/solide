import LoginPage from "@/pages/Login.vue";
import { AppLayout } from "@/layouts";
import HomePage from "@/pages/Home.vue";

export const routes = [
  {
    path: "/",
    component: AppLayout,
    redirect: (to: any, from: any, next: any) => {
      return false
        ? {
            name: "login",
          }
        : "/home";
    },
    children: [
      {
        path: "home",
        name: "homepage",
        component: HomePage,
        meta: {
          title: "Login",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      title: "Login",
    },
  },
];
