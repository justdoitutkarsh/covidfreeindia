<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <!-- <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div> -->
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <!-- <div class="row">

      <div class="col-12">
        <chart-card title="Users behavior"
                    sub-title="24 Hours performance"
                    :chart-data="usersChart.data"
                    :chart-options="usersChart.options">
          <span slot="footer">
            <i class="ti-reload"></i> Updated 3 minutes ago
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card title="Email Statistics"
                    sub-title="Last campaign performance"
                    :chart-data="preferencesChart.data"
                    chart-type="Pie">
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-12">
        <chart-card title="2015 Sales"
                    sub-title="All products including Taxes"
                    :chart-data="activityChart.data"
                    :chart-options="activityChart.options">
          <span slot="footer">
            <i class="ti-check"></i> Data information certified
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>

    </div> -->

    <div class="card-expansion">
    <!-- <md-card>
      <md-card-media>
        <img src="@/assets/img/vaccine-center.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">VACCINE CENTERS</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button></md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card> -->

    <!-- Vaccine Centers -->

     <!-- <md-card> 
      <div v-on:click="nagivateToPage('vaccine-centers')">
      <md-card-media>
        <img src="@/assets/img/vaccine-center.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">VACCINE CENTERS</div>
      </md-card-header>
       </div>
    </md-card> -->

    <!-- PLASMA -->
    <!-- <md-card>
      <div v-on:click="nagivateToPage('plasma')">
      <md-card-media>
        <img src="@/assets/img/plasma.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">PLASMA DONORS</div>
      </md-card-header>
      </div>
    </md-card> -->

     <!-- HOSPITAL AVAILABILITY -->
    <md-card>
      <div v-on:click="nagivateToPage('hospital')">
      <md-card-media>
        <img src="@/assets/img/hosptial.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">HOSPITAL BEDS</div>
      </md-card-header>
      </div>
    </md-card>

     <!-- Oxygen AVAILABILITY -->
    <md-card>
      <div v-on:click="nagivateToPage('oxygen')">
      <md-card-media>
        <img src="@/assets/img/oxygen.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Oxygen</div>
      </md-card-header>
      </div>
    </md-card>

    <!-- MEDICAL ADVICE -->
    <!-- <md-card>
      <div v-on:click="nagivateToPage('medicalAdvice')">
      <md-card-media>
        <img src="@/assets/img/contact-doctor.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">MEDICAL ADVICE</div>
      </md-card-header>
      </div>
    </md-card> -->
    <!-- Near By Medical Shops -->
     <!-- <md-card>
       <div v-on:click="nagivateToPage('medicalshops')">
      <md-card-media>
        <img src="@/assets/img/medicine.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">MEDICINES</div>

      </md-card-header>
       </div>
    </md-card> -->
    <!-- Ambulance Service -->
      <!-- <md-card>
        <div v-on:click="nagivateToPage('ambulanceService')">
      <md-card-media>
        <img src="@/assets/img/AMBULANCE.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">AMBULANCE SERVICE</div>
       
      </md-card-header>
      </div>
    </md-card> -->
   <!-- FOOD FACILITY -->
     <!-- <md-card>
      <div v-on:click="nagivateToPage('foodFacility')">
      <md-card-media>
        <img src="@/assets/img/CoronaGroceries.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">FOOD FACILITY</div>

      </md-card-header>
    </div>
    </md-card> -->
     <!-- NGO HELPLINE -->
     <!-- <md-card>
      <div v-on:click="nagivateToPage('ngo')">
      <md-card-media>
        <img src="@/assets/img/ngo.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">NGO'S PROVIDING RELIEF</div>
        
      </md-card-header>
      </div>
    </md-card> -->
    <!-- Register Yourself -->
     <md-card>
      <div v-on:click="nagivateToPage('register')">
      <md-card-media>
        <img src="@/assets/img/join-us.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">REGISTER WITH US</div>
        <!-- <div class="md-subhead">Subtitle here</div> -->
      </md-card-header>
      </div>
    </md-card>
  </div>
 
  </div>
  
</template>

<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from 'chartist';
import axios from "axios";
import { EventBus } from '../main.js'

export default {
  components: {
    StatsCard,
    ChartCard,
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "warning",
          icon: "ti-stats-up",
          title: "Active",
          value: "105GB",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          icon: "ti-stats-down",
          title: "Discharged",
          value: "$1,345",
          footerText: "Last day",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          icon: "ti-heart-broken",
          title: "Deaths",
          value: "23",
          footerText: "In the last hour",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          icon: "ti-pulse",
          title: "Total Vaccination",
          value: "13.5 crore",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ],
      usersChart: {
        data: {
          labels: [
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM",
            "3:00AM",
            "6:00AM"
          ],
          series: [
            [287, 385, 490, 562, 594, 626, 698, 895, 952],
          ]
        },
        options: {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false
        }
      },
      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: "245px"
        }
      },
      preferencesChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6]
        },
        options: {}
      },
      covidData:[]
    };
  },
  
  mounted(){
  const options = {
  method: 'GET',
  url: 'https://www.mohfw.gov.in/data/datanew.json',
  // headers: {
  //   'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
  //   'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  // }
};
let vm=this
axios.request(options).then(function (response) {
	// console.log(response.data);
  vm.covidData=response.data;
  var result=vm.covidData.filter(obj=> obj.sno == "11111");
  // console.log(result)
  vm.statsCards[0].value=result[0].new_active;
  vm.statsCards[1].value=result[0].new_cured;
  vm.statsCards[2].value=result[0].new_death;
}).catch(function (error) {
	console.error(error);
});

  },
  methods: {
    nagivateToPage(path){
      sessionStorage.selectedTab = path;
      this.$router.push(path)
    }
  }
};
</script>
<style>
 .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .md-title{
    text-align: center;
    font-weight: bold;
    font-size: 20px  !important;
  }
  .md-theme-default{
    background: white  !important;
    color: black  !important;
    font-weight: bold  !important;
  }
  .md-card{
    margin: 10px 20px 20px 0px;
    transition: transform .2s; /* Animation */
  }
  img{
    max-height: 150px;
  }

  .zoom {
  padding: 50px;
  background-color: green;
  transition: transform .2s; /* Animation */
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.md-card:hover {
  transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}



</style>
