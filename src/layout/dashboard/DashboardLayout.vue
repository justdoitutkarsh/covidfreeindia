<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
          <sidebar-link to="/dashboard" name="WELCOME" icon="ti-user"/>
          <!-- <sidebar-link to="/table-list" name="Ambulance Service " icon="ti-view-list-alt"/> -->
          <!-- <sidebar-link to="/vaccine-centers" name="VACCINE CENTERS" icon="ti-heart"/> -->
          <!-- <sidebar-link to="/plasma" name="PLASMA DONORS" icon="ti-server"/> -->
          <sidebar-link to="/hospital" name="HOSPITAL BEDS" icon="ti-support"/>
           <sidebar-link to="/oxygen" name="OXYGEN" icon="ti-pulse"/>
          <!-- <sidebar-link to="/medicalAdvice" name="MEDICAL ADVICE" icon="ti-comments"/> -->
          <!-- <sidebar-link to="/medicalshops" name="MEDICINES" icon="ti-support"/> -->
          <!-- <sidebar-link to="/ambulanceService" name="AMBULANCE SERVICE" icon="ti-truck"/> -->
          <!-- <sidebar-link to="/foodFacility" name="FOOD FACILITY" icon="ti-shopping-cart"/> -->
          <!-- <sidebar-link to="/ngo" name="NGO'S PROVIDING RELIEF" icon="ti-info"/> -->
          <sidebar-link to="/register" name="REGISTER WITH US" icon="ti-hand-open"/>
        <!-- <sidebar-link to="/stats" name="User Profile" icon="ti-user"/> -->
        <sidebar-link to="/aboutUs" name="About Us" icon="ti-info"/>
        <!-- <sidebar-link to="/table-list" name="Table List" icon="ti-view-list-alt"/> -->
        <!-- <sidebar-link to="/typography" name="Typography" icon="ti-text"/> -->
        <!-- <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/> -->
        <!-- <sidebar-link to="/maps" name="Map" icon="ti-map"/> -->
        <!-- <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/> -->
      </template>
      <!-- <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import { EventBus } from '../../main.js'
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  mounted(){
  
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    selectedTab(){
      console.log('tab')
    }
  }
};
</script>
