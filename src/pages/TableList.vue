<template>
  
    <div class="row">
       <!-- Dropdown -->
      <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="country" style="color: #66615B;">Select Your City</label>
          <md-select v-model="selectedCityName" name="country" id="country" :md-selected="selectedCityOption()">
            <md-option value="Lucknow">Lucknow</md-option>
            <!-- <md-option value="Kanpur">Kanpur</md-option> -->
          </md-select>
        </md-field>
      </div>
    </div>

      <div class="col-12"> 
        <card :title="table1.title" :subTitle="table1.subTitle" v-if="selectedCityName !== null && showTable">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">
            </paper-table>
          </div>
        </card>
        <p v-if="selectedCityName === null" class="heading-no-city-selected">Please select your city</p>
        <p v-if="noRecordFound && selectedCityName !== null" class="heading-no-city-selected">No Record Found !!!</p>
      </div>

      <!-- <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                         :columns="table2.columns">

            </paper-table>
          </div>
        </card>
      </div> -->

    </div>
</template>
<script>
import { PaperTable } from "@/components";
import { EventBus } from '../main.js'
const tableColumns = ["Index", "Name", "Area","Contact"];
const tableData = [
  {
    index: 1,
    name: "Utkarsh Pandey",
    area: "Hazaratganj",
    contact:"8318383307"
  },
];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "Oxygen Supply Contacts",
        subTitle: "Contact details for Oxygen Supply in your city",
        columns: [...tableColumns],
        data: [...tableData]
      },
      selectedCityName: null,
      // table2: {
      //   title: "Table on Plain Background",
      //   subTitle: "Here is a subtitle for this table",
      //   columns: [...tableColumns],
      //   data: [...tableData]
      // }
      currentTab:'',
      noRecordFound:true,
      showTable:false,
      dataToDisplay:[
        {
          selectedTab:"vaccine-centers",
          title: "Vaccine Centers",
          subTitle: "Contact details for Vaccine Centers in your city",
          columns: ["Index", "Name", "Area","Contact"],
          cityWiseData:[
          {
            cityName:"Lucknow",
            data :[
              {
                index: 1,
                name: "Utkarsh Pandey",
                area: "Lucknow Test",
                contact:"8318383307"
              },
              {
                index: 1,
                name: "Utkarsh Pandey",
                area: "Lucknow Test",
                contact:"8318383307"
              },
          ]
          },
          {
            cityName:"Kanpur",
            data :[
              {
                index: 1,
                name: "Utkarsh Pandey",
                area: "Varanasi",
                contact:"8318383307"
              },
          ]
          },
          ],
          //columns: ["Index", "Name", "Area","Contact"],
          // data :[
          //     {
          //       index: 1,
          //       name: "Utkarsh Pandey",
          //       area: "Varanasi",
          //       contact:"8318383307"
          //     },
          // ]
        },
      ]
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
  },
  methods: {
    selectedCityOption(){
    if(this.selectedCityName!==null){
    let result=this.dataToDisplay.filter(obj=> obj.selectedTab == this.currentTab);
    if(result.length!==0){
    this.noRecordFound=false;
    this.showTable=true;
    this.table1.title = result[0].title;
    this.table1.subTitle = result[0].subTitle;
    this.table1.columns = result[0].columns;
    let cityWiseData=result[0].cityWiseData.filter(obj=> obj.cityName == this.selectedCityName);
    this.table1.data = cityWiseData[0].data;
    }
    else{
      this.noRecordFound = true; 
      this.showTable=false;
    }
    }
    }
  }

};
</script>
<style>
.md-layout{
  width: 100%;
}
.md-field{
  width: 200px  !important;
  float: right;
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
