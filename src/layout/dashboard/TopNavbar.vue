<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <!-- <p>Oxygen Suppiler Details</p> -->
      <a class="navbar-brand" href="#">{{routeName}}</a>
<!-- <button class="navbar-toggler navbar-burger"
              type="button"
              @click="toggleSidebar"
              :aria-expanded="$sidebar.showSidebar"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button> -->
       <!-- <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-panel"></i>
              <p>Stats</p>
            </a>
          </li>
          <drop-down class="nav-item"
                     title="Select Your City"
                     title-classes="nav-link"
                     icon="ti-bell">
            <a class="dropdown-item" href="#">Notification 1</a>
            <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a>
          </drop-down>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </a>
          </li>
        </ul>
      </div> 
       -->
    </div>
    
    <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item" style="margin-right: 2vw;">
        <md-field>
          <label for="country" style="color: #66615B;">Select State</label>
          <md-select v-model="country" name="country" id="country" md-dense>
            <md-option value="australia">Lucknow</md-option>
            <!-- <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option> -->
          </md-select>
        </md-field>
      </div>

    </div>
  </div>

    </nav>
</template>
<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.use(VueMaterial)

export default {
  
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      movies: [],
      country: null,
      font: null
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    }
  }
};
</script>
<style>

.md-field.md-theme-default.md-focused .md-input, .md-field.md-theme-default.md-focused .md-textarea, .md-field.md-theme-default.md-has-value .md-input, .md-field.md-theme-default.md-has-value .md-textarea{
  -webkit-text-fill-color: rgb(102, 97, 91);

}
.md-field.md-theme-default:after {
    background-color: rgb(102, 97, 91);
}
.md-icon.md-theme-default.md-icon-image svg {
    fill:  rgb(102, 97, 91);
    
}

</style>
