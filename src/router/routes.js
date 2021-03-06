import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import register from "../../src/pages/register.vue"
import aboutUs from '../pages/aboutUs.vue';
import hosptial from '../pages/hospital.vue';
import oxygen from '../pages/oxygen.vue';
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "WELCOME",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "Ambulance Service",
        component: TableList
      },
      {
        path: "vaccine-centers",
        name: "VACCINE CENTERS",
        component: TableList
      },
      {
        path: "plasma",
        name: "PLASMA",
        component: TableList
      },
      {
        path: "medicalAdvice",
        name: "MEDICAL ADVICE",
        component: TableList
      },
      {
        path: "medicalshops",
        name: "MEDICINES",
        component: TableList
      },
      {
        path: "ambulanceService",
        name: "AMBULANCE SERVICE",
        component: TableList
      },
      {
        path: "foodFacility",
        name: "FOOD FACILITY",
        component: TableList
      },
      {
        path: "ngo",
        name: "NGO'S PROVIDING RELIEF",
        component: TableList
      },
      {
        path: "register",
        name: "REGISTER WITH US",
        component: register
      },
      {
        path: "aboutUs",
        name: "ABOUT US",
        component: aboutUs
      },
      {
        path: "hospital",
        name: "HOSPITAL BEDS",
        component: hosptial
      },
      {
        path: "oxygen",
        name: "Oxygen",
        component: oxygen
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
