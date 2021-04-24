<template>
  
    <div class="row">
       <!-- Dropdown -->
      <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="country" style="color: #66615B;">Select Your City</label>
          <md-select v-model="country" name="country" id="country" :md-selected="selectedCityOption()">
            <md-option value="Lucknow">Lucknow</md-option>
            <!-- <md-option value="Kanpur">Kanpur</md-option> -->
          </md-select>
        </md-field>
      </div>
    </div>

      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">
            </paper-table>
          </div>
        </card>
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
import { bus } from '../main'
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
      country: null,
      // table2: {
      //   title: "Table on Plain Background",
      //   subTitle: "Here is a subtitle for this table",
      //   columns: [...tableColumns],
      //   data: [...tableData]
      // }
    };
  },
  methods: {
    selectedCityOption(){
      console.log(this.country)
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
</style>
