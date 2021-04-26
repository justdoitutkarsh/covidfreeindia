<template>
  
    <div class="row">
       <!-- Dropdown -->
      <div class="md-layout md-gutter">
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
          columns: ["Index","Name", "City"],
          // data :[
          //     {
          //     "name": "K.K. Hospital  ",
          //     "city": "Lucknow",
          //     },
          // ]
           data: [
        {
            "index": "1",
            "name": "Bibhuti Bhusan Dental Hospital",
            "city": "BHUBANESWAR",
            "state": "Odisha"
        },
        {
            "index": "2",
            "name": "Dr. Agarwal Eye Hospital",
            "city": "BHUBANESWAR",
            "state": "Odisha"
        },
        {
            "index": "3",
            "name": "KIDS Multispecialist Diabetic Hospital",
            "city": "BHUBANESWAR",
            "state": "Odisha"
        },
        {
            "index": "4",
            "name": "Sara Gastro & Laparoscopic Hospital",
            "city": "BHUBANESWAR",
            "state": "Odisha"
        },
        {
            "index": "5",
            "name": "Ashwini Hospital",
            "city": "BHUBANESWAR",
            "state": "Odisha"
        },
        {
            "index": "6",
            "name": "Shanti Memorial Hospital",
            "city": "BHUBANESWAR",
            "state": "Odisha"
        },
        {
            "index": "7",
            "name": "Vivekananda Hospital",
            "city": "BHUBANESWAR",
            "state": "Odisha"
        },
        {
            "index": "8",
            "name": "Action Cancer Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "9",
            "name": "Batra Hospital and Medical Research Centre",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "10",
            "name": "Bhagwati Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "11",
            "name": "Bansal Hospital \r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "12",
            "name": "Brahm Shakti Hospital ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "13",
            "name": "Bhagat Chandra Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "14",
            "name": "B.M. Gupta Hospital Pvt. Ltd. \r\n                   \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "15",
            "name": "Divya Prastha Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "16",
            "name": "Delhi Heart and Lung Institute (A Unit of Apex Heart Care Pvt. Ltd.).",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "17",
            "name": "Garg Hospital ( A Unit of Garg Heart Centre & Nursing Home)",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "18",
            "name": "Goyal Hospital & Urology Centre",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "19",
            "name": "Gupta Multispeciality Hospital\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "20",
            "name": "Indian Spinal Injuries Centre ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "21",
            "name": "Jeewan Nursing Home & Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "22",
            "name": "Jeewan Mala Hospital\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "23",
            "name": "Jain Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "24",
            "name": "Jeevan Anmol Hospital\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "25",
            "name": "Kukreja Hospital & Heart Centre Pvt. Ltd",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "26",
            "name": "Kalra Hospital SRCNC Pvt. Ltd. ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "27",
            "name": "Khandelwal Hospital & Urology Centre ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "28",
            "name": "Max Super Speciality Hospital (A Unit of Balaji Medical & Diagnostic Research Centre)",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "29",
            "name": "Metro Hospitals & Heart Institute",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "30",
            "name": "Metro Hospital & Cancer Institute",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "31",
            "name": "Malik Radix Health Care Pvt. Ltd. (Hospital) ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "32",
            "name": "Mata Chanan Devi Hospital,\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "33",
            "name": "MGS Super Specialty Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "34",
            "name": "Maharaja Agrasen Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "35",
            "name": "National Heart Institute\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "36",
            "name": "Orthoplus Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "37",
            "name": "Panchsheel Hospitals Pvt. Ltd.",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "38",
            "name": "Primus Super Specialty Hospital ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "39",
            "name": "Park Hospital \r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "40",
            "name": "RLKC Hospital & Metro Heart Institute ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "41",
            "name": "Rockland HospitalName changed to Medeor Hospital Ltd. w.e.f. 24.05.2019\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "42",
            "name": "R G Urology & Laparoscopy Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "43",
            "name": "Saket City Hospital changed to Max Smart Super specialty Hospital (A unit of Gujarmal Modi Hospital & Research Centre for Medical Sciences) \r\nw.e.f. 02.05.2016\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "44",
            "name": "Saroj Super Speciality Hospital (earlier Saroj Hospital & Heart Institute)\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "45",
            "name": "Sri Balaji Action Medical Inst.",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "46",
            "name": "Shakuntla Nursing Home & Hospital\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "47",
            "name": "Sunder Lal Jain Charitable Hospital ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "48",
            "name": "Shri Ram Singh Hospital & Heart Institute\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "49",
            "name": "Santom Hospital\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "50",
            "name": "Tirath Ram Shah Charitable Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "51",
            "name": "Apex Citi Hospital \r\n                   \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "52",
            "name": "Ashok Nursing Home \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "53",
            "name": "Irene Hospital                                            \r\n                                \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "54",
            "name": "Mangalam Medical and Surgical Centre\r\n                                   \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "55",
            "name": "Jeewan Hospital & Nursing Home Pvt. Ltd.\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "56",
            "name": "Sanjeevan Medical Research (P) Ltd.\r\n\r\nEmpanelled w.e.f. 12.05.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "57",
            "name": "NKS Hospital \r\n\r\nEmpanelled w.e.f. 24.06.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "58",
            "name": "Fortis Healthcare Ltd.\r\n\r\nEmpanelled w.e.f. 16.11.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "59",
            "name": "Rescue Hospital\r\n\r\nEmpanelled w.e.f. 23.12.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "60",
            "name": "Bhatia Global Hospital & Endosurgery Institute\r\nEmpanelled w.e.f. 08.03.2016\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "61",
            "name": "Satyabhama Hospital Pvt. Ltd.\r\nEmpanelled w.e.f.  22.11.2016\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "62",
            "name": "Shanti Mukund Hospital\r\n(SMH Curie Cancer Centre  empanelled earlier for cancer treatment is part of Shanti Mukund Hospital now)\r\nEmpanelled w.e.f. 17.03.2017\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "63",
            "name": "Pushpanjali Medical Centre (A unit of M.M. Healthcare Ltd.)\r\n\r\nEmpanelled w.e.f. 05.07.2017\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "64",
            "name": "Delhi Heart Hospital\r\n\r\nEmpanelled w.e.f. 11.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "65",
            "name": "East Delhi Medical Centre\r\n\r\nEmpanelled w.e.f. 11.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "66",
            "name": "Rosewood Hospital (A unit of JLKD Healthcare Pvt. Ltd.\r\n\r\nEmpanelled w.e.f. 11.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "67",
            "name": "Universal Centre of Health Science\r\n\r\nEmpanelled w.e.f. 11.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "68",
            "name": "Sonia Hospital (A unit of Altius Healthcare \r\nPvt. Ltd.)\r\n\r\nEmpanelled w.e.f. 11.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "69",
            "name": "Savitri Hospital\r\n\r\nEmpanelled w.e.f. 19.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "70",
            "name": "Ayushman Hospital & Health Services \r\n\r\nEmpanelled w.e.f.  09.05.2018\r\n\r\nSuspended w.e.f. 9.7.2019 to 25.09.2019\r\n\r\nSuspension revoked   w.e. f. 26.09.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "71",
            "name": "World Brain Center Hospital\r\n\r\nEmpanelled w.e.f.  09.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "72",
            "name": "Cygnus MLS Super Speciality Hospital\r\n                       Empanelled w.e.f.  \r\n09.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "73",
            "name": "Indus Valley Hospital\r\n\r\nEmpanelled w.e.f.  09.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "74",
            "name": "Kosmos Super Speciality Hospital\r\nEmpanelled w.e.f.  16.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "75",
            "name": "Venkateshwar Hospital ( A unit of All India Society for Health Aid Education and Research)\r\n\r\nEmpanelled w.e.f.  16.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "76",
            "name": "Gandhi Hospital (A unit of Pawan Gandhi Healthcare Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f.  28.06.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "77",
            "name": "Kalra Hospital, Dwarka (A Unit of Kalra Hospital SRCNC Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f.  28.06.2018",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "78",
            "name": "Jaipur Golden Hospital\r\n\r\nEmpanelled w.e.f.  28.06.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "79",
            "name": "Kukreja Hospital\r\nEmpanelled w.e.f.  28.06.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "80",
            "name": "Febris Multispeciality Hospital (A unit of Durha Vitrak Pvt. Ltd.)\r\nEmpanelled w.e.f.  09.07.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "81",
            "name": "Ansari Hospital\r\n\r\nEmpanelled w.e.f.  09.07.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "82",
            "name": "Gupta Multispeciality Hospital\r\nEmpanelled w.e.f.  09.07.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "83",
            "name": "Tarak Hospital India Pvt. Ltd.\r\n\r\nEmpanelled w.e.f.  07.08.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "84",
            "name": "Ishan Hospital\r\n\r\nEmpanelled w.e.f.  26.09.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "85",
            "name": "Aakash Healthcare Super Speciality Hospital\r\n\r\nEmpanelled w.e.f.  25.10.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "86",
            "name": "Bhagwan Mahavir Hospital     Empanelled w.e.f.  28.11.2018",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "87",
            "name": "Saroj Medical Institute\r\n\r\nEmpanelled w.e.f.  28.11.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "88",
            "name": "Maharaja Agrasen Hospital\r\n\r\nEmpanelled w.e.f.  28.11.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "89",
            "name": "K.K. Surgical & Maternity Centre\r\n\r\nEmpanelled w.e.f.  28.11.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "90",
            "name": "Konarc Hospital\r\n\r\nEmpanelled w.e.f.  11.02.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "91",
            "name": "Surya Hospital (Prop. Mishra Hospital & Nursing Home Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f.  11.02.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "92",
            "name": "Mata Roop Rani Maggo & Mahindru Hospital\r\n\r\nEmpanelled w.e.f.  11.02.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "93",
            "name": "Medstar Hospital\r\n\r\nEmpanelled w.e.f.  22.07.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "94",
            "name": "Human Care Medical Charitable Trust (Manipal Hospital) \r\n\r\nEmpanelled w.e.f. 14.11.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "95",
            "name": "Navjeevan Hospital \r\n\r\nEmpanelled w.e.f. 14.11.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "96",
            "name": "Asian Samra MultiSpeciality Hospital, \r\nEmpanelled w.e.f. 14.11.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "97",
            "name": "Kalyani Hospital, \r\nEmpanelled w.e.f. 14.11.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "98",
            "name": "Bansal Global Hospital (A unit of Keshar Devi Healthcare Pvt. Ltd.),\r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "99",
            "name": "Surya Kiran Hospital\r\n\r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "100",
            "name": "Shree Aggarsain International Hospital(A unit ofShree Aggarsain North Ex-Welfare Society)                            \r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "101",
            "name": "Makkar Multi-Speciality Hospital (A unit of Makkar Medical Centre Pvt. Ltd.), \r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "102",
            "name": "Institute of Brain and Spine (A unit of Sri Neuro Care Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "103",
            "name": "Maharaja Agarsain Multi Speciality Hospital (A unit of World Life Care Organization), \r\n\r\nEmpanelled w.e.f. 17.09.2020 \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "104",
            "name": "Rathi Hospital,\r\n\r\nEmpanelled w.e.f. 17.09.2020  ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "105",
            "name": "SMS Hospital,\r\n\r\nEmpanelled w.e.f. 17.09.2020  \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "106",
            "name": "Dr. Chaudhry's Moral Hospital Pvt. Ltd.\r\n\r\nEmpanelled w.e.f. 17.09.2020  \r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "107",
            "name": "Asian Institute of Medical \r\nSciences, \r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "108",
            "name": "Metro Heart Institute ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "109",
            "name": "Park Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "110",
            "name": "QRG Central Hospital & Research Centre\r\n\r\nEmpanelled w.e.f. 10.02.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "111",
            "name": "R G Stone Urology Laparoscopy Hospital ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "112",
            "name": "Sarvodaya Hospital (A Unit of Anshu Hospital Ltd.) ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "113",
            "name": "Santosh Multi-Speciality Hospital\r\n\r\nEmpanelled w.e.f. 19.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "114",
            "name": "Medicheck Ortho Super Speciality Hospital\r\n\r\nEmpanelled w.e.f. 09.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "115",
            "name": "Pawan Hospital\r\n\r\nEmpanelled w.e.f. 28.11.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "116",
            "name": "QRG Medicare Ltd., \r\n\r\nEmpanelled w.e.f. 14.11.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "117",
            "name": "Supreme Hospital Pvt. Ltd.,\r\n\r\nEmpanelled w.e.f. 17.09.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "118",
            "name": "Aryan Hospital\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "119",
            "name": "Kalyani Hospital Pvt. Ltd. \r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "120",
            "name": "Metro Hospitals & Heart Institute \r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "121",
            "name": "Paras Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "122",
            "name": "Park Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "123",
            "name": "Aarvy Hospital \r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "124",
            "name": "Mayom Hospital\r\n\r\nEmpanelled w.e.f. 12.11.2014\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "125",
            "name": "Neelkanth Hospital\r\n\r\nEmpanelled w.e.f. 19.04.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "126",
            "name": "Umkal Hospital, \r\n\r\nEmpanelled w.e.f. 28.11.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "127",
            "name": "Wpratiksha Hospital\r\n\r\nEmpanelled w.e.f. 22.07.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "128",
            "name": "Kriti Hospital\r\n\r\nEmpanelled w.e.f. 22.07.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "129",
            "name": "Medeor Hospital\r\n\r\nEmpanelled w.e.f.\r\n01.04.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "130",
            "name": "Yashroop Hospital (A Unit of Yasoda Medicare Pvt. Ltd.),\r\n\r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "131",
            "name": "Narayana Super Speciality Hospital (A unit of Narayana Hrudayalaya Ltd.), \r\n\r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "132",
            "name": "The Signature Hospital (A unit of Park Medicity North Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f. 11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "133",
            "name": "Aarogya Hospital, (A Unit of Kastura Medicos Ltd.)\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "134",
            "name": "Brij Medical Centre\r\n\r\nEmpanelment Suspended w.e.f. 12.01.2016\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "135",
            "name": "Chandra Laxmi Hospital ",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "136",
            "name": "Family Health Care Hospital--Name Changed to Clearmedi Hospital and Cancer Centre (A unit of Family Healthcare HospitalPvt. Ltd.)\r\nw.e.f. 21.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "137",
            "name": "Ganesh Hospital \r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "138",
            "name": "Narinder Mohan Hospital & Heart Center",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "139",
            "name": "Pushpanjali Crosslay Hospital changed to Max Super specialty Hospital (a unit of Crosslay Remedies Ltd.) \r\nw.e.f 3.11.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "140",
            "name": "Shreya Hospital\r\nEmpanelled w.e.f. 24.02.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "141",
            "name": "Shanti Gopal Hospital\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "142",
            "name": "Yashoda Hospital and Research Centre",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "143",
            "name": "Paras Hospital \r\n\r\nEmpanelled w.e.f. 12.11.2014\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "144",
            "name": "Atlanta Mediworld Multispeciality Hospital  ( A unit of RRM Services)\r\n\r\nEmpanelled w.e.f. \r\n09.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "145",
            "name": "Navin Hospital (A unit of Navin Meditech Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f. \r\n16.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "146",
            "name": "Pannalal Shyamlal Hospital\r\n\r\nEmpanelled w.e.f. \r\n07.08.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "147",
            "name": "Vasundhara Hospital (A unit of Vasundhara Nursing Home Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f. \r\n07.08.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "148",
            "name": "Anand Hospital & Chhidda Singh Yadav Trauma Centre\r\nEmpanelled w.e.f. \r\n26.09.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "149",
            "name": "Apex Health Care & Research Centre\r\n\r\nEmpanelled w.e.f. \r\n22.07.2019",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "150",
            "name": "Manav Hospital (A unit of Subham Hospital and Research Centre Pvt. Ltd.)\r\n\r\nEmpanelled w.e.f. \r\n11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "151",
            "name": "Jeevan Jyoti Hospital\r\n\r\nEmpanelled w.e.f. \r\n11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "152",
            "name": "Amicare Hospital Orthopedic & Multispeciality Centre,              Empanelled w.e.f. \r\n17.09.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "153",
            "name": "LYF Hospital, (A unit of Indrapuram Hospital Pvt. Ltd.,) \r\n\r\nEmpanelled w.e.f. \r\n17.09.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "154",
            "name": "Green City Hospital\r\nEmpanelled w.e.f. 24.02.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "155",
            "name": "Kailash Hospital Ltd.\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "156",
            "name": "Prakash Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "157",
            "name": "Satya Medical Centre Hospital",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "158",
            "name": "Sumitra Hospital\r\n\r\n\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "159",
            "name": "Surbhi Hospital\r\n\r\nEmpanelled w.e.f. 10.02.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "160",
            "name": "Sharda Hospital\r\nEmpanelled w.e.f. 24.02.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "161",
            "name": "Yatharth Wellness Hospital & Trauma Centre\r\nEmpanelled w.e.f. 10.02.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "162",
            "name": "Yatharth Wellness Super Speciality Hospital & Heart Centre\r\nEmpanelled w.e.f. 24.02.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "163",
            "name": "Navin Hospital, \r\n\r\nEmpanelled w.e.f. 12.05.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "164",
            "name": "Shivalik Medical Centre Pvt. Ltd.\r\n\r\nEmpanelled w.e.f. 12.05.2015.\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "165",
            "name": "Research Centre Pvt. \r\n\r\nEmpanelled w.e.f. 12.05.2015.\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "166",
            "name": "Fortis Hospitals Ltd.\r\n\r\nEmpanelled w.e.f. 16.11.2015\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "167",
            "name": "Apollo Hospital\r\n\r\nEmpanelled w.e.f. 21.07.2016\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "168",
            "name": "Felix Hospital (Felix Healthcare Pvt. Ltd.),\r\n\r\nEmpanelled w.e.f. 29.07.2016\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "169",
            "name": "Kumar Hospital\r\n\r\nEmpanelled w.e.f. \r\n09.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "170",
            "name": "Manas Hospital (A Unit of Sharma Medical Centre Pvt. Ltd.)\r\nEmpanelled w.e.f. \r\n09.05.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "171",
            "name": "J.S. Tomar Memorial Hospital Pvt. Ltd.\r\n\r\nEmpanelled w.e.f. \r\n07.08.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "172",
            "name": "Neo Hospital (A unit of Muskan Medical Centre Pvt. Ltd.)\r\nEmpanelled w.e.f. \r\n07.08.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "173",
            "name": "Dipakshi Nursing & Maternity Home Pvt. Ltd.",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "174",
            "name": "Sharma Medicare Pvt. Ltd.",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "175",
            "name": "Shri Ram Singh Multi Speciality Hospital\r\nEmpanelled w.e.f. \r\n28.11.2018\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "176",
            "name": "Noida Medicare Centre Ltd.,\r\n\r\nEmpanelled w.e.f. \r\n11.02.2019\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "177",
            "name": "S.J.M. Super Speciality Hospital\r\nEmpanelled w.e.f. \r\n11.06.2020\r\n",
            "city": "Delhi",
            "state": "Delhi"
        },
        {
            "index": "178",
            "name": "KRISHNA SHALBY HOSPITAL",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "179",
            "name": "UN MEHTA INSTITUTE OF CARDIOLOGY & RESEARCH CENTRE",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "180",
            "name": "INSTITUTE OF KIDNEY DISEASES AND RESEARCH CENTRE",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "181",
            "name": "AHMEDABAD INSTITUTE OF MEDICAL SERVICES",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "182",
            "name": "BODYLINE HOSPITAL",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "183",
            "name": "PAREKHS HOSPITAL",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "184",
            "name": "ASIAN BARIATRICS (AHMEDABAD BARIATRICS & COSMETICS PVT.LTD)",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "185",
            "name": "SAMVED ORTHOPAEDIC HOSPITAL",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "186",
            "name": "APOLLO CBCC CANCER CARE",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "187",
            "name": "Apollo CVHF Heart Institute (Apollo CVHF Limited)",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "188",
            "name": "Kanba Hospital (A unit of Lakahni Hospitals Pvt. Ltd.)",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "189",
            "name": "Trisha Multispeciality Hospital",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "190",
            "name": "Shah Hospital",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "191",
            "name": "Samvedana Happiness Hospital ,unit of Samvedana minds llp",
            "city": "Ahmedabad",
            "state": "Gujarat"
        },
        {
            "index": "192",
            "name": "AMAN HOSPITAL,\r\n24/30/5, AMAN COLONY, DHOBI GHAT, THORNHILL ROAD, CIVIL LINES, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "193",
            "name": "ANKUR HOSPITAL,\r\n1B/26 LAL BIHARA BAMRAULI, ALLAHABAD ",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "194",
            "name": "ASHUTOSH HOSPITAL, \r\n15/20, HASHIMPUR ROAD, ALLAHABAD – 211 002",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "195",
            "name": "ASHA HOSPITAL,\r\n89/276, MUIR ROAD, RAJAPUR, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "196",
            "name": "D R S HOSPITAL,\r\nH-1, TRANSPORT NAGAR ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "197",
            "name": "DWARKA HOSPITAL,\r\n5/4 K. P. KAKKAR ROAD, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "198",
            "name": "GURU KRIPA JAGRATI HOSPITAL & RESEARCH CENTRE,\r\n124/A/1 THORNHIL ROAD, CIVIL LINES, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "199",
            "name": "HEARTLINE CARDIAC CARE CENTRE, ALLD,\r\n14/18, ELGIN ROAD, CIVIL LINES, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "200",
            "name": "JEEVAN JYOTI HOSPITAL,\r\n162, BAI KA BAGH, LOWTHER ROAD, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "201",
            "name": "KAMLA NEHRU MEMORIAL HOSPITAL,     HASHIMPUR ROAD, ALLAHABAD – 211002\r\nNAHB Accredited",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "202",
            "name": "M.G.M HOSPITAL & RESEARCH CENTRE, 116, PIPAL GAON JHALWA, ALLAHABAD,",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "203",
            "name": "MAA SHARDA HOSPITAL, \r\n84/70, NEW BAIRAHNA, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "204",
            "name": "NARAYAN SWAROOP HOSPITAL,\r\n40A, MUNDERA MANDI,\r\nALLAHABAD,\r\nUTTAR PRADESH",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "205",
            "name": "PARVATI HOSPITAL\r\n126/50A, JLN ROAD, TAGORE TOWN, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "206",
            "name": "PRACHI HOSPITAL PVT. LTD.\r\nSECTOR-C 105, SHANTIPURAM, PHAPHAMAU, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "207",
            "name": "RAJ NURSING HOME\r\n23-A, PARK ROAD, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "208",
            "name": "SAKET MATERNITY & NURSING HOME PVT. LTD. 1203, BHS, KIDWAI NAGAR, ALLAHPUR,ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "209",
            "name": "SRIJAN VATSALYA HOSPITAL PVT. LTD.",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "210",
            "name": "SARSWATI HEART CARE & RESEARCH CENTRE (P). LTD.",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "211",
            "name": " SHAKUNTALA HOSPITAL\r\n3-B, TASKANT MARG, CIVIL LINES, ALLAHABAD – 211 001",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "212",
            "name": "VATSALYA MATERNITY & SURGICAL CENTRE\r\n6/8, ELGIN ROAD, CIVIL LINES, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "213",
            "name": "VINEETA HOSPITAL Pvt. Ltd. 10-3A, BYPASS ROAD, PHAPHAMAU, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "214",
            "name": "YASH HOSPITAL, \r\n8 B, ELGIN ROAD, CIVIL LINES, ALLAHABAD           ",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "215",
            "name": "YASHLOK HOSPITAL & RESEARCH CENTRE\r\n43A/31A, HASHIMPUR ROAD, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "216",
            "name": "SHIVAM AKSHAYVAT MULTISCPECIALITY HOSPITAL & TRAUMA CENTRE, NEAR UDYOG NAGAR GROUND, ADA ROAD, NAINI, ALLAHABAD",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "217",
            "name": "HOSPITAL AKSHAYVAT, HIG 110/111, ADA COLONY, NAINI, ALLAHABAD, UTTAR PRADESH",
            "city": "Allahabad",
            "state": "Uttar Pradesh"
        },
        {
            "index": "218",
            "name": "Apex Hospital, D.L.W., Hydil Road, Varanasi",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "219",
            "name": "Galaxy Hospital  Plot No. 4 to 7, Dayal Enclave, Mahmoorganj, Varanasi.",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "220",
            "name": "Ganga Sewa Sadan Hospial Chandpur Chauraha, Chandpur industrial area, Manduadih, Chandpur, Varanasi-221106.",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "221",
            "name": "Hari Bandhu Hospital Pvt. Ltd., Paigamberpur, Ashok Vihar Road, Panchcroshi  Churaha, Varanasi",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "222",
            "name": "Heritage Hospitals, Near Bhu Gate Lanka, Varanasi – 221005",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "223",
            "name": "Jamuna Sewa Sadan & Research Centre, S-15/47, Panchkoshi Road, Shivpur, Varanasi",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "224",
            "name": "Kids Care Nursing Home Pvt. Ltd. HIG 51/2, Kabir Nagar Road, Durgakund,  Varanasi-221005  W.E.F. Aug 2020",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "225",
            "name": "Mahashweta Hospital Pvt. Ltd, 5-10/6A-3-A-P, MA Road, Opp District Jail, Chaukaghat, Varanasi",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "226",
            "name": "Popular Medicare Ltd, N 10/62, A-2, DLW Road, Kakarmatta, Varanasi.",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "227",
            "name": "Samvedna Hospital,B22./88-G, RAVINDRA PURI NEW COLONY,VARANASI. 221005",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "228",
            "name": "Shubham Hospital, S8/108-F-5A, Maqbool Alam Road, Khajuri, Varanasi",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "229",
            "name": "Sudha Surgical Hospital Pvt. Ltd S-2/1-9T & S-251-17k, Tagor Town Colony, Orderly Bazar, Bhojuveer, Varanasi-221002   W.E.F. Aug 2020.",
            "city": "Varanasi",
            "state": "Uttar Pradesh"
        },
        {
            "index": "230",
            "name": "ABC Hospitals",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "231",
            "name": "Apollo Hospitals Enterprises Limited",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "232",
            "name": "CARE Hospitals (Visakha Hospitals and Diagnostics Ltd)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "233",
            "name": "Gayatri Vidya Parishad Institute of Health Care and Medical Technology",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "234",
            "name": "HCG Pinnacle Cancer Centre",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "235",
            "name": "Indus Hospitals (a unit of Vasugan Medical Specialities Pvt., Ltd.,)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "236",
            "name": "Mahatma Gandhi Cancer & Research Institute (a unit of Vizag Hospital & Cancer Research Centre Private Limited)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "237",
            "name": "Mycure Hospitals Unit-1 (a unit of Sahrudaya Health Care Pvt. Ltd.,)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "238",
            "name": "Mycure Hospitals Unit-2 (a unit of Sahrudaya Health Care Pvt. Ltd.,)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "239",
            "name": "OMEGA HOSPITALS(A Unit of Vizag Speciality Hospitals), Plot No. 4,Health City, Arilova, Visakhapatnam",
            "city": "Visakhapatnam",
            "state": "Andhra Pradesh"
        },
        {
            "index": "240",
            "name": "Pinnacle Hospitals Pvt. Ltd.,",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "241",
            "name": "Q1 Hospitals (a unit of Q1 Bone & Joint Hospital)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "242",
            "name": "Seven Hills Hospital (a unit of Seven Hills Healthcare Pvt., Ltd.,)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "243",
            "name": "STAR Pinnacle Heart Centre Pvt., Ltd.,",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "244",
            "name": "Visakha Institute of Medical Sciences(VIMS)",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "245",
            "name": "Lalitha Superspeciality Hospital Private Limited",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "246",
            "name": "Omega Hospitals",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "247",
            "name": "Aayush NRI LEPL Health Care (P) Ltd.",
            "city": "Hyderabad",
            "state": "Telangana"
        },
        {
            "index": "248",
            "name": "Ace Heart & Vascular Institute",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "249",
            "name": "Amar hospital, Mohali",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "250",
            "name": "DHAWAN HOSPITAL",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "251",
            "name": "Eden Hospital",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "252",
            "name": "Fortis Hospital Mohali",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "253",
            "name": "GRECIAN SUPER SPECIALITY HOSPITAL-MOHALI",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "254",
            "name": "Indus Speciality Hospital, Mohali",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "255",
            "name": "IVY Hospital Mohali",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "256",
            "name": "LANDMARK HOSPITAL-CHD",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "257",
            "name": "Max hospital",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "258",
            "name": "OJAS Hospital",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "259",
            "name": "PARAS HOSPITAL PANCHKULA",
            "city": "Chandigarh",
            "state": "Chandigarh"
        },
        {
            "index": "260",
            "name": "K.K. Hospital  ",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "261",
            "name": "SKD Hospital",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "262",
            "name": "St. Mary’s Polyclinic",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "263",
            "name": "Shekhar Hospital Pvt. Ltd",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "264",
            "name": "Raj Scanning Limited",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "265",
            "name": "Nova Hospital Limited",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "266",
            "name": "Vinayak Medicare Hospital",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "267",
            "name": "T. S. Mishra Medical College & Hospital",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "268",
            "name": "Lucknow Metro Hospital & Trauma Centre",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "269",
            "name": "Krishna Life Line Hospital",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "270",
            "name": "Raj Chandra Hospital & Research Centre",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "271",
            "name": "Lucknow Hospital & Maternity Centre",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "272",
            "name": "Mayo Medical Centre Pvt. Ltd.",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "273",
            "name": "Chandan Hospital Limited",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "274",
            "name": "Medical Care Centre and Hospital",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "275",
            "name": "Moolchand Medicity, Agra, (A Unit of Moolchand  Healthcare Private Ltd)",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "276",
            "name": "People's Heritage Hospital Pvt. Ltd.",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "277",
            "name": "Pushpanjali Hospital & Research Centre Pvt. Ltd.",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "278",
            "name": "Glean Cancer Centre & Multispecialty Hospital",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "279",
            "name": "Ganga Sheel Advanced Medical Research Institute",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "280",
            "name": "CARE HOSPITAL (A Unit of Goel Super Speciality Medical Centre Pvt. Ltd.)",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "281",
            "name": "Rohil Khand Medical College and Hospital ",
            "city": "Lucknow",
            "state": "uttar pradesh"
        },
        {
            "index": "282",
            "name": "Apollo Spectra Hospitals",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "283",
            "name": "Bhargava Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "284",
            "name": "Bhargava Medical & Trauma Centre",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "285",
            "name": "Chandni Hospital Pvt. Ltd.",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "286",
            "name": "Dhanvantri Super Speciality  Hospital (A unit of Kabir Hospital Pvt. Ltd)",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "287",
            "name": "Dwivedi Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "288",
            "name": "Emerald Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "289",
            "name": "Family Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "290",
            "name": "Fortune Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "291",
            "name": "Globus Hospital (A unit of hospital infotechpvt. Ltd.)",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "292",
            "name": "Shri Jayram Hospital &Truma Centre",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "293",
            "name": "Kanpur Medical Centre Pvt.  Ltd",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "294",
            "name": "Kulwanti Hospitals & Research Centre",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "295",
            "name": "Krishna Super Speciality Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "296",
            "name": "Lifetron Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "297",
            "name": "Madhulok Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "298",
            "name": "Madhuraj Hospital Pvt. Ltd.",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "299",
            "name": "Mangla  Multispecialty Hospital (P) Ltd.",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "300",
            "name": "Panacea Multi Super Specialty Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "301",
            "name": "Priya Hospital",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "302",
            "name": "Royal Cancer Institute &",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "303",
            "name": "Research Centre (A Unit of Oncocare Medicals Pvt. Ltd.)",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "304",
            "name": "Regency Hospital Ltd.",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "305",
            "name": "North Star Hospital (A Unit of Miracle Medicare Private Limited)",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "306",
            "name": "Naraina Hospital & Research Centre",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "307",
            "name": "New G.T.Nursing Home",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "308",
            "name": "Rahi Medical Centre (P) Ltd.",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "309",
            "name": "Saral Nursing Home",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "310",
            "name": "Sharma Nursing Home",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "311",
            "name": "SPM Hospital Research & Trauma Centre (A Unit of Tyco hospital Pvt. Ltd.)",
            "city": "Kanpur",
            "state": "uttar pradesh"
        },
        {
            "index": "312",
            "name": "B.M. Birla Heart Research Centre",
            "city": "Kolkata",
            "state": "West Bengal"
        },
        {
            "index": "313",
            "name": "Desun Hospital & Heart Institute (A Unit of P.N. Memorial Neurocentre & Research Institute Ltd.)",
            "city": "Kolkata",
            "state": "West Bengal"
        },
        {
            "index": "314",
            "name": "North City Hospital & Neuro Institute Pvt",
            "city": "Kolkata",
            "state": "West Bengal"
        },
        {
            "index": "315",
            "name": "B. P. Poddar Hospitals & Medical Research Ltd.",
            "city": "Kolkata",
            "state": "West Bengal"
        },
        {
            "index": "316",
            "name": "Narayana Superspeciality Hospital (Unit of Meridian Medical Research & Hospital Ltd)",
            "city": "Kolkata",
            "state": "West Bengal"
        },
        {
            "index": "317",
            "name": "Narayana Multi Specialty Hospital (Unit of Meridian Medical Research & Hospital Ltd.) ",
            "city": "Kolkata",
            "state": "West Bengal"
        },
        {
            "index": "318",
            "name": "B.M.R.C. Hospitals Ltd.",
            "city": "Kolkata",
            "state": "West Bengal"
        },
        {
            "index": "319",
            "name": "Dayanand Nursing Home",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "320",
            "name": "Lokpriya Hospital, ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "321",
            "name": "KMC Hospital & Research Centre,",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "322",
            "name": "Anand Hospital,",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "323",
            "name": "Dhanvantri Jeevan Rekha Ltd., ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "324",
            "name": "Metro Hospitals & Heart Institutes, ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "325",
            "name": "Yashlok Hospital & Nursing Home Pvt. Ltd., ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "326",
            "name": "Jaswant Rai Specialty Hospital,",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "327",
            "name": "Mimhans Neurosciences Hospital, ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "328",
            "name": "Meerut Kidney Hospital Pvt. Ltd., ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "329",
            "name": "Ajay Hospital,",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "330",
            "name": "Bhagya Shree Hospital ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "331",
            "name": "Valentis Cancer Hospital,",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "332",
            "name": "Jain Medical Center & Laser Eye Hospital, ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "333",
            "name": "Mrityunjay  Hospital Multispecialty & Trauma Centre,",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "334",
            "name": "Santosh Hospital, ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "335",
            "name": "Arogya Hospital ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "336",
            "name": "Hope Hospital, ",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "337",
            "name": "IIMT Life Line Hospital   w.e.f. 01-05-2018",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "338",
            "name": "Chhatrapati Shivaji Subharti Hospital           w.e.f. 01-05-2018",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "339",
            "name": "Life Line Hospital        w.e.f 01-05-2018",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "340",
            "name": "S.M. Hospital                      w.e.f 01-05-2018",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "341",
            "name": "Kailashi Super Speciality Hospital  w.e.f. 30-07-2018",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "342",
            "name": "Meerut Cancer Hospital  w.e.f. 30-07-2018",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "343",
            "name": "Sirohi Hospital and Maternity Home w.e.f. 30-07-2018",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "344",
            "name": "Sai Hospital & Critical Care Centre w.e.f. 03-06-2019",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "345",
            "name": "Shivay Hospital w.e.f. 03-06-2019",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "346",
            "name": "Hayat Hospital  w.e.f. 18-02-2020",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "347",
            "name": "Sarvodaya Hospital & Institute of Medical Science  w.e.f. 03-06-2019",
            "city": "Merrut",
            "state": "uttar pradesh"
        },
        {
            "index": "348",
            "name": "ADVANCED NEURO DIAGNOSTIC CENTRE 46, Kavi Raman Path, Nageshwar Colony, Boring Road, Patna",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "349",
            "name": "AASTHA LOK HOSPITAL PVT. LTD.N/4, Professor Colony, Near Kendriya Vidyalaya, Kankarbagh, Patna –800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "350",
            "name": "ANUPAMA HOSPITAL PVT. LTD.Khajanchi Road, Ashok Rajpath, Patna",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "351",
            "name": "AKSHAT SEVA SADANYarpur, Gardanibagh, Patna – 800 001",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "352",
            "name": "CHANAKYA HOSPITALN/7, Patrakar Nagar, Kankarbagh, Patna – 800 002",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "353",
            "name": "CURIS HOSPITALR. K. Puram More, Danapur, Khagaul Road, Patna –801503",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "354",
            "name": "DR. BIMAL HOSPITAL AND RESEARCH CENTRE PVT. LTD.Aadarsh Colony, Near Saguna More, Bailey Road, Patna – 801503",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "355",
            "name": "FORD HOSPITAL AND RESEARCH CENTRE PVT. LTD.NH-30, New Bypass, Khemnichak, Patna – 800 027",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "356",
            "name": "HEART HOSPITAL LIMITED, CHANDRALAY Kankarbagh, Patna –800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "357",
            "name": "HI-TECH EMERGENCY HOSPITAL Saguna More, Danapur, Patna",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "358",
            "name": "JEEVAK HEART HOSPITAL AND RESEARCH INSTITUTE PVT. LTD.,6, Doctors Colony,Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "359",
            "name": "MAHAVIR AROGYA SANSTHAN Near Chiraiyatand,Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "360",
            "name": "MEDICA MAGADH HOSPITAL Road No.-2B, Rajendra Nagar, Patna – 800 016",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "361",
            "name": "MGM HOSPITAL & RESEARCH CENTRE PVT. LTD.Jagat Narayan Road, Kadamkuan, Patna – 800 003",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "362",
            "name": "MEDIPARK HOSPITAL(A unit of Medipark Healthcare Pvt. Ltd.) 44, Patliputra Colony,Patna – 800 013",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "363",
            "name": "OXYGEN TRAUMA AND MULTISPECIALTY HOSPITAL Sanjeevani Path, Maurya Colony, Biscoman Golambar,Patna – 800 007",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "364",
            "name": "PALIKA VINAYAK HOSPITAL Near Bahadurpur Flyover, Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "365",
            "name": "RUBAN EMERGENCY HOSPITAL(A unit of Basudeo Health Ashraf Clinic Complex), S. P. Verma Road, Patna –800 001",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "366",
            "name": "R. N. SUPERSPECIALITY HOSPITAL AND RESEARCH CENTRE PVT. LTD.Beside Khajapura Masjid, Near Shiv Mandir, Bailey Road,Patna – 800 014",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "367",
            "name": "RAJESHWAR HOSPITAL  Near Bahadurpur Flyover, Main Road, Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "368",
            "name": "SAHYOG HOSPITAL 40, Patliputra Colony, Patna – 800 013",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "369",
            "name": "SRI SAI HOSPITAL(A unit of Akhilesh Kumar Singh Hospital Pvt. Ltd.) Plot No.-DS/2, Behind Geological Survey of India, Mahendralok Appartment, Kankarbagh, Patna –800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "370",
            "name": "A. B. EYE INSTITUTE Premchand Marg, Near Bahadurpur Gumti, Rajendra Nagar, Patna – 800016",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "371",
            "name": "ASG HOSPITAL PVT. LTD. CC-78, P. C. Colony,Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "372",
            "name": "BANKA EYE HOSPITAL AND DENTAL CARE CENTRE Opp. Loyala School, Kurji, Patna",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "373",
            "name": "C.S.N. Netralay Pvt. Ltd. Colony More, Kankarbagh, Patna- 800020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "374",
            "name": "DIVYA DRISTI EYE CENTRE PVT. LTD. Mangal Market, Sheikhpura, Raja Bazar, Patna – 800 014",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "375",
            "name": "SRI SAI LIONS NETRALAYA B-144, P. C. Colony, Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "376",
            "name": "SHEKHAR EYE CARE & LASER CENTRE Keshri Nagar, Road No.-01, Nalapar, Near Shakuntala Market, Patna – 800 024",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "377",
            "name": "SHRI BALAJI NETRALAY. Nala Road, Opp. GEE PEE Furniture, Patna – 800 027",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "378",
            "name": "SARVDRISHTI EYE HOSPITAL PVT. LTD.Deepayan, Near IC Honda, Rukuanpura, Bailey Road,Patna – 800 014",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "379",
            "name": "Vedanta Centre for ophthalmic Sciences 2nd  Floor, Legend Plaza Near Passport Office, Ashiana-Digha Road, Samanpura, Patna-800014",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "380",
            "name": "CITY DENTAL CENTRE House No.-B/2, Sector – D/1, Jagat Narayan Road, East of Shiva Jee Park, Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "381",
            "name": "ORO DENTAL SPECIALITY CLINIC Beside Vishnu Palace, Shanti Niketan, East Boring Canal Road, Patna – 800 001",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "382",
            "name": "RAMA DENTAL 9, Nehru Nagar, Near Gosai Tola, Opp. Water Tank, Patliputra, Patna – 800 013",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "383",
            "name": "CENTRAL DIAGNOSTIC 1st Floor, Sumbha Complex, West Boring Canal Road, Patna – 800001",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "384",
            "name": "INDRA DIAGNOSTIC G-127, P. C. Colony, Kankarbagh, Patna -800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "385",
            "name": "SURAKSHSA DIAGNOSTIC PRIVATE LTD. Kamini Centre, Boring Road, Patliputra Road,Patna",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "386",
            "name": "SARITA DIAGNOSTIC CENTRE (P) ltd. Oppo. A. N. College, Rose bud School Office Lane,Boring Road,Patna-800 013",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "387",
            "name": "BUDDHA CANCER CENTRE PVT. LTD.Nahar Road, Left to Nahar Chowk, Rupaspur, Bailey Road,Patna - 801503",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "388",
            "name": "MAHAVIR CANCER HOSPITAL,                  Phulwari Shari,Patna - 801505",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "389",
            "name": "S.S. HOSPITAL, Malahi Pakdi Chowk, Kankarbagh,Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "390",
            "name": "MAHAVIR AROGYA SANSTHAN Near Chiraiyatand, Kankarbagh, Patna –800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "391",
            "name": "MEDIPARK HOSPITAL (A unit of Medipark Healthcare Pvt. Ltd.) 44, Patliputra Colony,Patna – 800 013",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "392",
            "name": "PALIKA VINAYAK HOSPITAL Near Bahadurpur Flyover, Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "393",
            "name": "R. N. SUPERSPECIALITY HOSPITAL AND RESEARCH CENTRE PVT. LTD. Beside Khajapura Masjid, Near Shiv Mandir, Bailey Road, Patna – 800 014",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "394",
            "name": "RAJESHWAR HOSPITAL Near Bahadurpur Flyover, Main Road, Kankarbagh, Patna – 800 020",
            "city": "Patna",
            "state": "Bihar"
        },
        {
            "index": "395",
            "name": "RAJ HOSPITALS",
            "city": "Ranchi",
            "state": "Jharkhand"
        },
        {
            "index": "396",
            "name": "SHREE JAGANNATH HOSPITAL & RESEARCH CENTRE",
            "city": "Ranchi",
            "state": "Jharkhand"
        },
        {
            "index": "397",
            "name": "MAA RAM PYARI HOSPITAL RESEARCH CENTRE PVT. LTD.",
            "city": "Ranchi",
            "state": "Jharkhand"
        },
        {
            "index": "398",
            "name": "HILL VIEW HOSPITAL & RESEARCH CENTRE",
            "city": "Ranchi",
            "state": "Jharkhand"
        },
        {
            "index": "399",
            "name": "Asian Dwarkadas Jalan\r\r\nSuper-speciality Hospital",
            "city": "Ranchi",
            "state": "Jharkhand"
        },
        {
            "index": "400",
            "name": "Fortis Hospitals Limited Cunningham Road Limited.",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "401",
            "name": "Imperial Hospital and Research Centre (Apollo)",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "402",
            "name": "KIMS Hospital & Research Centre",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "403",
            "name": "Mallya Hospital ",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "404",
            "name": "Narayana Hrudayalaya",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "405",
            "name": "Sagar Hospitals Banshankari – DSI",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "406",
            "name": "Sagar Hospitals Jayanagar",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "407",
            "name": "Sri Shankara Cancer Hospital & Research Centre",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "408",
            "name": "Vydehi Institute of Medical Science & Research Centre",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "409",
            "name": "HealthCare Global Enterprises Ltd.",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "410",
            "name": "P D Hinduja Sindhi Hospital",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "411",
            "name": "Fortis Hospitals Limited",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "412",
            "name": "Hosmat Hospital ",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "413",
            "name": "Apollo Speciality Hospitals Jayanagar\r\n",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "414",
            "name": "Narayana Multi Speciality Hospital\r\n– HSR Layout ",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "415",
            "name": "PAN Nagarbhavi Hospitals Pvt Ltd.",
            "city": "Bangalore",
            "state": "Karnataka"
        },
        {
            "index": "416",
            "name": "M/s. TSC Hospital Private Limited, N.H By pass road, S N Nagar, Kulathoor, Thiruvananthapuram ",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "417",
            "name": "M/s. Attukal Devi Institute of Medical Sciences Ltd., Attukal, Manacaud Po., Thiruvananthapuram, Kerala 695009",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "418",
            "name": "M/s. Divya Prabha Eye Hospital, Kumarapuram, Thiruvananthapuram",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "419",
            "name": "M/s. Dr. Agarwal's Eye              Hospital,Vellayambalam, Thiruvananthapuram,",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "420",
            "name": "M/s. Chaithanya Eye Hospital, Kesavadasapuram, Thiruvananthapuram",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "421",
            "name": "M/s. Precise Specialty Eye Care,  Turbo Plus Tower, PMG Jn., Vikas Bhavan Post, Thiruvananthapuram : 695033",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "422",
            "name": "Dr. Ramachandran’s Diagnostic Services,  Kumarapuram, Trivandrum ",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "423",
            "name": "M/s. Hindlabs Diagnostic Centre & Imaging centre, Oppo. Govt. Medical College, Thiruvananthapuram",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "424",
            "name": "M/s. Devi Scans Private Limited, Kumarapuram, Thriuvananthapuram",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "425",
            "name": "Dr.Gopinath's Diagnostic Services, Ulloor Road, Medical College. P.O, Trivandrum",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "426",
            "name": "M/s. Travancore Scans pvt ltd., Oommens, TC 17/1990 (1), Pazhaya Road, Medical College Po., Thiruvananthapuram, Kerala 695011",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "427",
            "name": "India Hospitals,Gandhari Amman Kovil Rd, Santhi Nagar, Thampanoor, Thiruvananthapuram, Kerala 695001",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "428",
            "name": "M/s. Goutham Hospital +,PB No. 868, Panayappilly, Kochi – 682 005 ",
            "city": "Kochi",
            "state": "Kerala"
        },
        {
            "index": "429",
            "name": "M/s. Silverline Hospital # 53/307 A, K P Vallon Road, Kadavanthara P O., Kochi: 682020",
            "city": "Kochi",
            "state": "Kerala"
        },
        {
            "index": "430",
            "name": "M/S Rajiv Gandhi Centre for Biotechnology Medical Laboratory Services (RGCB MLS), Poojappura, Thycaud Po.,  Trivandrum: 695 014",
            "city": "Thiruvananthapuram",
            "state": "Kerala"
        },
        {
            "index": "431",
            "name": "M/s. Lakshmi Hospital, Diwan’s Road, Ernakulam: 682016  ",
            "city": "Ernakulam",
            "state": "Kerala"
        },
        {
            "index": "432",
            "name": "M/S. K.P.M Eye Hospital, Hospital Road, Ernakulam : 682 011",
            "city": "Ernakulam",
            "state": "Kerala"
        },
        {
            "index": "433",
            "name": "M/S. Comtrust Charitable Trust Eye Hospital, Mini Bypass Rd, Puthiyara, Kozhikode, Kerala 673004",
            "city": "Kozhikode",
            "state": "Kerala"
        },
        {
            "index": "434",
            "name": "DR Jacob’s Eye Care Hospital, Stadium Link Road, Kaloor Jawaharlal Nehru International Stadium, Kerala 682025",
            "city": "Ernakulam",
            "state": "Kerala"
        },
        {
            "index": "435",
            "name": "DR. BINU’S SUN RISE EYE CARE, 5/735-13, Chettipeedika, Pallikunnu PO., Kannur : 670 004  ",
            "city": "Kannur",
            "state": "Kerala"
        },
        {
            "index": "436",
            "name": "M/s. Puthalath Eye Hospital (A unit of North South Eye Care Associates Pvt. Ltd), 27/1239 C, C1, C2, Mini Bypass Road, Kalluthankadavu, Puthiyara P O., Kozhikode 673 004 ",
            "city": "Kozhikode",
            "state": "Kerala"
        },
        {
            "index": "437",
            "name": "Navodaya Cancer Hospital & Research Center",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "438",
            "name": "Jawajar Lal Nehru Cancer Hospital& Research Center",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "439",
            "name": "Narmada Trauma Center Pvt. Ltd.",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "440",
            "name": "Siddhanta Redcross Superspeciality Hospital (NABH)",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "441",
            "name": "Noble Multispeciality Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "442",
            "name": "Hajela Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "443",
            "name": "L.N. Medical College& J.K. Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "444",
            "name": "Peoples hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "445",
            "name": "Career Institute of MedicalScience",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "446",
            "name": "Mayo Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "447",
            "name": "Chirayu Medical College & Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "448",
            "name": "L.B.S. Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "449",
            "name": "Silverline Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "450",
            "name": "Navjeevan Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "451",
            "name": "Manoria Heart Care Center",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "452",
            "name": "Venus Scan & Research Center Pvt. Ltd.",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "453",
            "name": "Kotgirwar Path.Lab",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "454",
            "name": "Sewa Sadan Eye Hospital (Trust)",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "455",
            "name": "Prakash Eye Care & Laser Center",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "456",
            "name": "Tathastu Specialty Dental Clinic ( Malviya Nagar)",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "457",
            "name": "ASG Eye Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "458",
            "name": "Ajwani Eye Hospital Pvt. Ltd.",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "459",
            "name": "Vision Care & Research Centre,",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "460",
            "name": "Central Hospital (A Unit of Arush Health Care Pvt. Ltd.) B-123, Indira Vihar",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "461",
            "name": "Denasia Dental Clinic",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "462",
            "name": "Mata Shri Netralaya",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "463",
            "name": "Sudarshan Netralaya",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "464",
            "name": "Shalya Joint care",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "465",
            "name": "Sant Hiradaram Yoga & Nature cure Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "466",
            "name": "GUT GI & Liver Hospital ",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "467",
            "name": "Paliwal Hospital",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "468",
            "name": "Jaanki Hospital ",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "469",
            "name": "Tathastu Specialty Dental Clinic ( Kolar Road)",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "470",
            "name": "Tathastu Specialty Dental Clinic (Indrapuri)",
            "city": "Bhopal",
            "state": "Madhya Pradesh"
        },
        {
            "index": "471",
            "name": "Adhunik Dental Clinic",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "472",
            "name": "Aditya Super Speciality Hospital & Trauma Centre",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "473",
            "name": "Anant Nursing Home Pvt. Ltd.",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "474",
            "name": "Ashish Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "475",
            "name": "Batalia Eye Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "476",
            "name": "Best Super-Speciality Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "477",
            "name": "Bombay Hospital & Research Centre",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "478",
            "name": "Central India Kidney Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "479",
            "name": "City Hospital & Research Centre Pvt. Ltd.",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "480",
            "name": "Dr. C.R. Bhandari Memorial Hospital (Unit of Bhandari Polyclinic Pvt. Ltd)",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "481",
            "name": "Dube Surgical & Dental Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "482",
            "name": "Er. H.N. Nema Memorial Super Speciality Heart & Critical Care Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "483",
            "name": "Infinity Heart Institute (Unit of IHRC PVT. LTD) Infinityheartinstitute02@gmail.com",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "484",
            "name": "Jabalpur Hospital & Research Centre",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "485",
            "name": "Jamdar Hospital Pvt. Ltd.",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "486",
            "name": "Life Medicity Hospital (Unit of Daddaji Hospital Hospitals Pvt. Ltd. )",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "487",
            "name": "Mahakoshal Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "488",
            "name": "Marble City Hospital & Research Centre",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "489",
            "name": "Mero Hospital & Cancer Research Centre",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "490",
            "name": "National Hospital",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "491",
            "name": "Pandey Hospital Private Ltd.",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "492",
            "name": "Sanjeevan Hospital & Research Centre",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "493",
            "name": "Seth Mannulal Jagannathdas Trust Hospital & Research Centre",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "494",
            "name": "Shubham Dental Clinic",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "495",
            "name": "Swastik Multispeciality Hospital and R.C.",
            "city": "Jabalpur",
            "state": "Madhya Pradesh"
        },
        {
            "index": "496",
            "name": "Apex Hospitals",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "497",
            "name": "Apex Multispeciality Hospitals",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "498",
            "name": "Ashtvinayak Hospital & Super Speciality Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "499",
            "name": "Asian Institute of Medical Science",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "500",
            "name": "Balaji Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "501",
            "name": "Dr. R.N.Patil's Suraj Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "502",
            "name": "Life Line Multi Speciality Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "503",
            "name": "M/s S. S. Vaidya Health Care Pvt. Ltd",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "504",
            "name": "Mallika Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "505",
            "name": "MPCT Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "506",
            "name": "Niramaya Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "507",
            "name": "Panacea Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "508",
            "name": "Pinnacle Ortho Centre",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "509",
            "name": "Prachin Healthcare Multi-speciality Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "510",
            "name": "Rane Hospital Pvt. Ltd ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "511",
            "name": "Riddhi Vinayak, Critical Care & Cardiac Centre ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "512",
            "name": "Riddhi Vinayak, Multi Speciality Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "513",
            "name": "Sapana Health Care Centre ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "514",
            "name": "Shantiniketan Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "515",
            "name": "Shivam Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "516",
            "name": "Shivam Hospital, Multi Spciality & Joint Replacement Centre ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "517",
            "name": "Shree Balaji Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "518",
            "name": "Shushrusha Heart Care Center & Multi Speciality Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "519",
            "name": "Siddhivinayak Maternity & General Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "520",
            "name": "SRCC Childrens Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "521",
            "name": "Surana Hospital & Research Centre",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "522",
            "name": "Surana Sethia Hospital Research Centre",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "523",
            "name": "Surekha Criticare Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "524",
            "name": "Swami Sarwanand Hospital ",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "525",
            "name": "Terna Multi Speciality Hospital and Research Centre",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "526",
            "name": "Highland Super Specialty Hospital",
            "city": "Mumbai",
            "state": "Maharashtra"
        },
        {
            "index": "527",
            "name": "Ortho Relief Hospital & Research Centre",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "528",
            "name": "Arneja Institute of Cardiology Pvt Ltd",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "529",
            "name": "Avanti Institute of Cardiology Pvt Ltd",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "530",
            "name": "Dr. K.G Despande Memorial Centre",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "531",
            "name": "Sushrut Institute of Medical Science",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "532",
            "name": "Ganga Care  Hospital Ltd",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "533",
            "name": "Shri Radhakrishna Hospital & Research Institute",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "534",
            "name": "Crescent Hospital & Heart centre",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "535",
            "name": "Mure Memorial Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "536",
            "name": "Midas   Multispeciality Hospital Pvt Ltd",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "537",
            "name": "Shri Krishna Hrudayalaya   & Critical Care Centre",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "538",
            "name": "Ashwini kidney And Dialysis Centre Private Limited,",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "539",
            "name": "Hope Hospitals info@hopehospital.com",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "540",
            "name": "Kunal Hospital and Critical Care and TraumaCentre",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "541",
            "name": "Sengupta Hospital & Research Institute",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "542",
            "name": "Apulki Vairagade Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "543",
            "name": "Central India Institute of Hematology and Oncology(CIIHO)",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "544",
            "name": "Keshav Hospital (Unit of Laxmikeshav Research Center and Hospital Pvt Ltd)",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "545",
            "name": "Arogyam Superspeciality Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "546",
            "name": "Criticare Hospital & Research ",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "547",
            "name": "Platina Heart Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "548",
            "name": "Lotus Hospital and Research Center and Maternity Home",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "549",
            "name": "Spandan Heart Institute and research center India Pvt Ltd.",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "550",
            "name": "Janta Maternity Home & Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "551",
            "name": "Medicare Multispeciality Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "552",
            "name": "Radiance Hospital Pvt. Ltd.",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "553",
            "name": "Zenith Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "554",
            "name": "RNH Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "555",
            "name": "Shat Ayu Critical Care, Polytrauma Centre & Multispeciality Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "556",
            "name": "Cure It  Hospital Pvt Ltd",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "557",
            "name": "Columbia Hospital & Research Centre",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "558",
            "name": "Center Point Hospital & Medical Research Institute Pvt Ltd",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "559",
            "name": "G.T. Padole Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "560",
            "name": "Krims Hospitals",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "561",
            "name": "Rashtrasant Tukdoji Regional Cancer Hospital & Research Centre, Nagpur",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "562",
            "name": "New ERA Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "563",
            "name": "Vidarbha Institute of Medical Sciences (VIMS), Nagpur",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "564",
            "name": "National Cancer Institute",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "565",
            "name": "N.K.P. Salve Institute of Medical Sciences & Lata Mangeshkar Hospital ",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "566",
            "name": "Seven Star Hospital  (A Unit of Nagpur Institute of Surgical Sciences & Research Centre Pvt Ltd), ",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "567",
            "name": "ICON Hospital",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "568",
            "name": "HCG NCHRI Cancer Centre",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "569",
            "name": "Shri Bhavani Multispecialty Hospital & Research Institute",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "570",
            "name": "Mittal Institute of Medical Science",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "571",
            "name": "We Care Super Specialty Hospital ( A Unit of synergy Health tech)",
            "city": "Nagpur",
            "state": "Maharashtra"
        },
        {
            "index": "572",
            "name": "Aadhar Multispeciality Hospital-ICU",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "573",
            "name": "Apollo Speciality Hospital Pvt. Ltd.(Apollo Spectra Hospital)",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "574",
            "name": "Attharva Accident Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "575",
            "name": "Bharati Hospital & Research Center",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "576",
            "name": "Brahmchaitanya Superspeciality Hospitl Private Limited",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "577",
            "name": "Deendayal Memorial Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "578",
            "name": "Dr. Bansal Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "579",
            "name": "Dr. D.Y.Patil Medical College, Hospital and Research Centre",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "580",
            "name": "Fortune�s Sparsh Healthcare Pvt. Ltd. (Sparsh Hospital)",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "581",
            "name": "GRANT MEDICAL FOUNDATION,RUBY HALL CLINIC",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "582",
            "name": "Imax Multispeciality Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "583",
            "name": "Jeevanjyoti Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "584",
            "name": "Jivanrekha Multispeciality Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "585",
            "name": "Kohakade Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "586",
            "name": "Kotbagi Hospital Pvt. Ltd.",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "587",
            "name": "Krishna Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "588",
            "name": "Lokmanya Hospital Chinchwad",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "589",
            "name": "Lokmanya Hospital Pradhikaran",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "590",
            "name": "Makan Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "591",
            "name": "N.M. Wadia Institute of Cardiology",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "592",
            "name": "Ojas Multispeciality Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "593",
            "name": "Om Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "594",
            "name": "PAWANA HOSPITAL",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "595",
            "name": "Pioneer Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "596",
            "name": "Rajveer Health Services Pvt.Ltd. Phoenix Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "597",
            "name": "Ranka Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "598",
            "name": "RAO NURSING HOME",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "599",
            "name": "SADHU VASWANI MISSION'S MEDICAL COMPLEX - INLAKS BUDHRANI HOSPITAL & MN BUDHRANI CANCER INSTITUTE, KIRPALANI & KUNDANI EYE INSTITUTE, FABIANI BUDHRANI HEART INSTITUTE",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "600",
            "name": "SAINATH HOSPITAL",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "601",
            "name": "SAI SHREE ORTHOPEDIC SUPERSPECIALITY & JOINT REPLACEMENT CENTER",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "602",
            "name": "Sancheti Institute of Joint Replacement",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "603",
            "name": "SANJEEVAN HOSPITAL, MANAGED BY SHASHWAT MULTISPECIALITY HOSPITALS, INDIA PVT. LTD",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "604",
            "name": "SANJEEVANI HOSPITAL",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "605",
            "name": "SHARADA CLINIC",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "606",
            "name": "SHASHWAT HEALTH SERVICES PVT. LTD",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "607",
            "name": "SHASHWAT HOSPITAL (AUNDH",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "608",
            "name": "SHENDKAR HEALTHCARE AND HOPITALITY SERVICES PVT LTD. GLOBAL HOSPITAL AND RESEARCH INSTITUTE",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "609",
            "name": "Shivam Multi-Speciality And Accident Care Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "610",
            "name": "Shusrut Medical Care Society Hardikar Hospital",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "611",
            "name": "VINOD MEMORIAL MULTISPECIALITY HOSPITAL",
            "city": "Pune",
            "state": "Maharashtra"
        },
        {
            "index": "612",
            "name": "Mittal Hospital & Research Centre\"",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "613",
            "name": "Goyal Hospital & Research Centre Pvt. Ltd.",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "614",
            "name": "MEDIPULSE HOSPITAL",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "615",
            "name": "Vasundhara Hospital Limited ",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "616",
            "name": "2S WELLNESS and RESEARCH CENTRE PRIVATE LIMITED ",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "617",
            "name": "ABHISHEK HOSPITAL",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "618",
            "name": "Adinath E.N.T. & General Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "619",
            "name": "Advanced Neurology & Super Speciality Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "620",
            "name": "Amar Medical and Research Centre",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "621",
            "name": "APEX HOSPITAL MANSAROVAR PVT.LTD.,",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "622",
            "name": "Apollo Specialty Hospitals Pvt. Ltd.",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "623",
            "name": "Bhagwan Mahaveer Cancer Hospital & Research Centre",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "624",
            "name": "Bhandari Hospital and Research Centre",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "625",
            "name": "DHANVANTRI LIFE CARE PRIVATE LIMITED ",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "626",
            "name": "G.P. Shekhawati Hospital & Research Centre",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "627",
            "name": "Global Heart & General Hospital Private Limited",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "628",
            "name": "Imperial Hospital & Research Centre",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "629",
            "name": "Indowestern Brain & Spine Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "630",
            "name": "Indus Jaipur Hospital ",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "631",
            "name": "Jaipur Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "632",
            "name": "Jaipur Hospital,",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "633",
            "name": "Jeevan Rekha Critical Care And Trauma Hospital ",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "634",
            "name": "JYOTI NURSING HOME PVT. LTD.",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "635",
            "name": "Krishna Heart & General Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "636",
            "name": "Mahavir Jaipuria Rajasthan Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "637",
            "name": "Marudhar Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "638",
            "name": "METRO MANAS AROGYA SADAN HEART CARE & MULTISPECILITY HOSPITAL, JAIPUR ",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "639",
            "name": "Monilek Hospital & Research Centre",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "640",
            "name": "Narayana Hrudayalaya Limited",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "641",
            "name": "Rungta Hospital,",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "642",
            "name": "S.R.KALLA MEMORIAL GASTRO & GENERAL HOSPITAL",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "643",
            "name": "Sadhna Hospital Pvt. Ltd",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "644",
            "name": "Shri Ambe Hospital & Research Institute",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "645",
            "name": "Soni Hospital",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "646",
            "name": "Sparsh Hospital.",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "647",
            "name": "TAGORE HOSPITAL & RESEARCH INSTITUTE",
            "city": "Jaipur",
            "state": "Rajasthan"
        },
        {
            "index": "648",
            "name": "CSI KALYANI GENERAL HOSPITAL ",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "649",
            "name": "CSI RAINY MULTISPECIALITY HOSPITAL",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "650",
            "name": "NOBLE HOSPITAL",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "651",
            "name": "SOUNDARAPANDIAN BONE AND JOINT HOSPITAL AND RESEARCH INSTITUTE PVT. LTD",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "652",
            "name": "SUGAM HOSPITAL",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "653",
            "name": "FRONTIER LIFELINE HOSPITAL",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "654",
            "name": "PARVATHY ORTHO HOSPITAL PVT. LTD",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "655",
            "name": "K.K.R. ENT HOSPITAL AND RESEARCH INSTITUTE",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "656",
            "name": "TRINITY ACUTE CARE HOSPITAL",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "657",
            "name": "MAHALAKSHMI MULTI SPECIALITY HOSPITAL",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "658",
            "name": "SRI MANAKULA VINAYAGAR COLLEGE & HOSPITAL",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "659",
            "name": "PONDICHERRY INSTITUTE OF MEDICAL SCIENCES",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "660",
            "name": "SHIFA HOSPITALS ",
            "city": "Chennai",
            "state": "Tamil Nadu"
        },
        {
            "index": "661",
            "name": "Aarogyadham Super Speciality Hospital & Research Centre",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "662",
            "name": "Bharat Heart Institute Institute",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "663",
            "name": "Fortis Escorts Hospital",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "664",
            "name": "Himalayan Hospital (A unit of Swami Rama Himalayan University)",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "665",
            "name": "Kailash HospitalDehradun (A unit of M/SKailash Healthcare Ltd.)",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "666",
            "name": "Kanishk Surgical & Super Speciality Hospital",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "667",
            "name": "Krishna Medical Center (A Multi Speciality Hospital)",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "668",
            "name": "Max Super Speciality Hospital (A Unit of Max Health Care Institute Ltd.)",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "669",
            "name": "Krishna Medical Center (A Multi Speciality Hospital)",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "670",
            "name": "Max Super Speciality Hospital (A Unit of Max Health Care Institute Ltd.)",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "671",
            "name": "Shri Mahant Indiresh Hospital",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "672",
            "name": "S K Memorial",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "673",
            "name": "Subharti Hospital",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "674",
            "name": "Prem Sukh Hospital and Dialysis Centre",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "675",
            "name": "Vinod Ortho and Genisis IVF Clinic",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "676",
            "name": "Velmed Hospitals (A Unit of Bharat Heart & Super Speciality Hospitals)",
            "city": "Dehradun",
            "state": "Uttarakhand"
        },
        {
            "index": "677",
            "name": "ASG EYE CARE",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "678",
            "name": "DOWN TOWN HOSPITAL",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "679",
            "name": "HAYAT HOSPITAL",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "680",
            "name": "MARWARI HOSPITALS",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "681",
            "name": "NARAYANA SUPER SPECIALITY HOSPITAL",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "682",
            "name": "HAYAT HOSPITAL",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "683",
            "name": "MARWARI HOSPITALS",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "684",
            "name": "SRL DIAGNOSTIC SKYLAB ASSAM",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "685",
            "name": "ULTRACARE DIAGNOSTIC CENTRE",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "686",
            "name": "R. K. LIFE SERVICES PRIVATE LIMITED",
            "city": "Guwahati",
            "state": "Assam"
        },
        {
            "index": "687",
            "name": "WOODLAND HOSPITAL",
            "city": "Shillong",
            "state": "Meghalaya"
        }
                 ]
          },
      ],
      addedCities:[
        "Lucknow","Varanasi"
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
    this.table1.subTitle = result[0].title+ " in " + this.selectedCityName;
    this.table1.columns = result[0].columns;
   // let cityWiseData=result[0].cityWiseData.filter(obj=> obj.cityName == this.selectedCityName);
   // this.table1.data = cityWiseData[0].data;
   let cityWiseData=result[0].data.filter(obj=> obj.city == this.selectedCityName);
   for(let i=0;i<cityWiseData.length;i++){
     cityWiseData[i].index=i+1
   }
   this.table1.data = cityWiseData;
  // console.log(cityWiseData)
  
   //this.table1.data = cityWiseData[0].data;
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
