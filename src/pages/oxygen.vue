<template>
  <div class="row">
       <!-- Dropdown -->

      <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="states" style="color: #66615B;">Select Your States</label>
          <md-select v-model="selectedStateName" name="states" id="states">
            <div v-for="states in addedStates" @click="selectedStatesOption()">
            <md-option :value="states">{{states}}</md-option>
            </div>
          </md-select>
        </md-field>
      </div>    
      <div class="md-layout-item">
        <md-field>
          <label for="country" style="color: #66615B;">Select Your City</label>
          <md-select v-model="selectedCityName" name="country" id="country">
            <div v-for="city in addedCities" @click="selectedCityOption()">
            <md-option :value="city">{{city}}</md-option>
            </div>
          </md-select>
        </md-field>
      </div>
    </div>
    
    <div class="hospital-cards" v-for="oxy in oxygenAvailabilityData" v-if="selectedCityName !== null">
    <md-card class="content-text-align">
      <md-card-header class="oxy-card-title">
        <md-card-header-text>
          <div class="search-type-container">
            <div class="img-container">
              <img src="../assets/img/lack-of-air.png" alt="People">
            </div>
            Oxygen
            <div class="img-container" v-if="oxy.verification_status == 'verified'">
              <img src="../assets/img/check.png" alt="People">
            </div>
          </div>
          <div class="md-title content-text-align">{{oxy.title}}</div>
          <div class="md-subhead content-text-align">{{oxy.phone_1}}</div>
        </md-card-header-text>
      </md-card-header>
        <div class="line"></div>
      <md-card-content>
       <!-- <span v-if="hospital.typeOfBedAvailable!==null">Available bed type:<br></span> -->
       <span v-if="oxy.type!==null" v-for="types in oxy.type">{{types}}<br></span>
        <!-- <span>Contact No. : {{hospital.phone1}}</span> <br> -->
        <span>Verification Status: {{oxy.verification_status}}</span> <br> 
        <span v-if="oxy.comment!==null">Comments: {{oxy.comment}}</span><br>
        <span>Verified On: {{convertTimeToIST(oxy.lastVerifiedOn)}}</span><br>
      </md-card-content>
    </md-card>
  </div>
    </div>
</template>
<script>
import { EventBus } from '../main.js'
import axios from "axios";
import moment from 'moment'

export default {
  components: {
    
  },
  data() {
    return {
    selectedCityName: null,
    selectedStateName: null,
    currentTab:'',
    addedCities:[
        "Lucknow"
      ],
    addedStates:["Uttar Pradesh"],
    oxygenAvailabilityData:[],
    allOxygenAvailabilityData:[],
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
    url: 'https://life-api.coronasafe.network/data/oxygen_v2.json',
  
    };
    let vm=this
    axios.request(options).then(function (response) {
        vm.allOxygenAvailabilityData = response.data.data;
        let state = vm.allOxygenAvailabilityData.map(stateAvailable => stateAvailable.state);
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
    let dataToSort = [...this.allOxygenAvailabilityData]
    let result=dataToSort.filter(city=> city.district.toLowerCase() == this.selectedCityName.toLowerCase());
    this.oxygenAvailabilityData = result
    }
    },
    selectedStatesOption(){
        let citiesWiseData=this.allOxygenAvailabilityData.filter(obj=> obj.state == this.selectedStateName);
        let cityInState = citiesWiseData.map(cityAvailable => cityAvailable.district);
        cityInState = [...new Set(cityInState)];
        cityInState = cityInState.sort();
        this.addedCities = cityInState;
        this.selectedCityName=null;
    },
    convertTimeToIST(date){
        var convertedDate = moment.utc(date).local().format('DD-MMM-YYYY h:mm A');
        return convertedDate;
    }
    }
};
</script>

<style lang="scss" scoped>
.hospital-cards{
    text-align: center;
    width: 50%  !important;
}
.oxy-card-title{
  background-color: #038cfc !important;
}
.content-text-align{
  text-align: left !important;
  text-transform: capitalize !important;
}
.search-type-container{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #ffffff;
}
.img-container{
  width: 1.5em;
  height: 1.5em;
  border-radius: 50% !important;
  position: relative;
  overflow: hidden;
  margin: 0 0.5em;

  img{
    display: inline;
    margin: 0 auto;
  }
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
</style>
