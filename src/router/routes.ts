import LoginPage from "@/pages/Login.vue";
import { AppLayout } from "@/layouts";
import HomePage from "@/pages/Home.vue";
import DashboardPage from "@/pages/Dashboard.vue";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/dashboard",
    name: "dashboardpage",
    component: AppLayout,
    redirect: "/dashboard/home",
    meta: {
      title: "Tableaud de bord",
    },
    children: [
      {
        path: "home",
        name: "dashboardpage",
        component: DashboardPage,
        meta: {
          title: "Home",
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
