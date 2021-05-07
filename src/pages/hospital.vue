<template>
  <div class="row">
  <notifications></notifications>
  <!-- <div class="row">
    <div class="col-md-3">
      <p-button type="default" block @click.native="notifyVue('top', 'center')">Top Center</p-button>
    </div>
  </div> -->
       <!-- Dropdown -->
      <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="states" style="color: #66615B;">Select Your States</label>
          <md-select v-model="selectedStateName" name="states" id="states">
            <div v-for="states in addedStates" @click="selectedStatesOption()">
            <md-option :value=states>{{states}}</md-option>
            </div>
            <!-- <md-option value="Kanpur">Kanpur</md-option> -->
          </md-select>
        </md-field>
      </div>    
      <div class="md-layout-item">
        <md-field>
          <label for="country" style="color: #66615B;">Select Your City</label>
          <md-select v-model="selectedCityName" name="country" id="country">
            <div v-for="city in addedCities" @click="selectedCityOption()">
            <md-option :value=city>{{city}}</md-option>
            </div>
            <!-- <md-option value="Kanpur">Kanpur</md-option> -->
          </md-select>
        </md-field>
      </div>
    </div>

     <div class="government-hospital-links" v-if="selectedCityName !== null " @click="openGovernmentWebsiteForSelectedState()">
      <p-button type="success" block>
        <!-- <marquee direction="right"> -->
        CLICK HERE FOR HOSPITAL BEDS AVAILABILITY ON GOVERNMENT COVID-19 WEBSITE IN {{stateNameToDisplay}}
        <!-- </marquee> -->
        </p-button>
    </div>
    
    <div class="hospital-cards" v-for="hospital in hospitalAvailabilityData" v-if="selectedCityName !== null">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{hospital.title}}</div>
          <div class="md-subhead">{{hospital.availability}}</div>
        </md-card-header-text>

        <!-- <md-menu md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="doACall">
              <span>Call</span>
              <md-icon>phone</md-icon>
            </md-menu-item>

            <md-menu-item @click="sendMessage">
              <span>Send a message</span>
              <md-icon>message</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu> -->
      </md-card-header>
        <div class="line"></div>
      <md-card-content>
        <span v-if="hospital.typeOfBedAvailable!==null">Available bed type:<br></span>
       <span v-if="hospital.typeOfBedAvailable!==null" v-for="types in hospital.typeOfBedAvailable">{{types}}<br></span>
        <span>Contact No. : {{hospital.phone_1}}</span> <br>
        <span>Verification Status: {{hospital.verification_status}}</span> <br> 
        <span v-if="hospital.comment!==null">Comments: {{hospital.comment}}</span>
        <br><span>Checked on: {{convertTimeToIST(hospital.lastVerifiedOn)}}</span><br>
      </md-card-content>

      <!-- <md-card-actions md-alignment="left">
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions> -->
    </md-card>
  </div>
    </div>
</template>
<script>
import { EventBus } from '../main.js'
import axios from "axios";
import moment from 'moment'
import jsonResponse from '../assets/json/static-data.json'

export default {
  components: {
    
  },
  data() {
    return {
    selectedCityName: null,
    selectedStateName: null,
    stateNameToDisplay:'',
    currentTab:'',
    addedCities:[
        "Lucknow"
      ],
    addedStates:[],
    hospitalAvailabilityData:[],
    allHospitalAvailabilityData:[],
    governemntWebsites:jsonResponse.govtWebsites,
     type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
    };
  },
  computed: {
    
  },
  mounted(){
    this.currentTab=sessionStorage.selectedTab
    EventBus.$on('setPathName',(value)=>{
      sessionStorage.selectedTab = value;
      this.currentTab=sessionStorage.selectedTab
      this.selectedCityName=null;
    })
    if(this.selectedStateName===null){
        this.selectedCityName=null;
        this.addedCities=[];
    }
    const options = {
    method: 'GET',
    url: 'https://life-api.coronasafe.network/data/hospital_v2.json',
    };
    let vm=this
    axios.request(options).then(function (response) {
        vm.allHospitalAvailabilityData = response.data.data;
       // let city = vm.allHospitalAvailabilityData.map(cityAvailable => cityAvailable.district);
        let state = vm.allHospitalAvailabilityData.map(stateAvailable => stateAvailable.state);
       // vm.addedCities = city;
       state = [...new Set(state)];
        state = state.sort();
        vm.addedStates = state;
    }).catch(function (error) {
        console.error(error);
    });

  },
  methods: {
    selectedCityOption(){
    if(this.selectedCityName!==null){
    //console.log(this.hospitalAvailabilityData)
    let dataToSort = [...this.allHospitalAvailabilityData]
    // dataToSort.sort(function(a, b) {
    // var textA = a.availability
    // var textB = b.availability
    // return  (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    // });
    let result=dataToSort.filter(city=> city.district.toLowerCase() == this.selectedCityName.toLowerCase());
    this.hospitalAvailabilityData = result
    this.stateNameToDisplay = this.selectedStateName;
    }
    else{
     
    }
    },
    selectedStatesOption(){
      let citiesWiseData=this.allHospitalAvailabilityData.filter(obj=> obj.state == this.selectedStateName);
      let cityInState = citiesWiseData.map(cityAvailable => cityAvailable.district);
      cityInState = [...new Set(cityInState)];
      cityInState = cityInState.sort();
      this.addedCities = cityInState;
      this.selectedCityName=null; 
    },
    convertTimeToIST(date){
        var convertedDate = moment.utc(date).local().format('DD-MMM-YYYY h:mm A');
        return convertedDate;
    },
    openGovernmentWebsiteForSelectedState(){
      let websitelink = this.governemntWebsites.filter(link =>link.state.toLowerCase() === this.stateNameToDisplay.toLowerCase())
      if(websitelink.length !==0){
        window.open(websitelink[0].link);    
      }
      else{
        this.notifyVue('top', 'center')
      }
      
    },

      notifyVue (verticalAlign, horizontalAlign) {
        //const color = Math.floor((Math.random() * 4) + 1)
        const color = 4
        this.$notify(
          {
            message: 'GOVERNMENT COVID-19 WEBSITE NOT AVAILABLE FOR SELECTED STATE',
            // icon: 'fa fa-gift',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
};
</script>

<style lang="scss" scoped>
.government-hospital-links{
  width: 100%;
  margin: 20px;
}
.hospital-cards{
    text-align: center;
    width: 50%  !important;
}
.line{
    border-bottom: 1px solid grey;
    margin: 0px 15px;
}
.md-card {
    width: 95%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    //outline: solid;
    //outline-color: #D2691E;
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;
        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
}
.md-layout{
  width: 100%;
}
.md-field{
  width: 100%  !important;
  float: left;
}
.md-layout-item{
  padding-right: 0px !important;
}
.md-theme-default
{
  background: #f4f3ef !important; 
}
.md-list-item-text{
  color: black;
  /* font-weight: bold; */
  font-size: 15px  !important;
}
.heading-no-city-selected{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    font-size: 20px;
    font-weight: bold; 
}

.vue-notifyjs.notifications{
  .alert{
   z-index: 100;
  }
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);

  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}


</style>
