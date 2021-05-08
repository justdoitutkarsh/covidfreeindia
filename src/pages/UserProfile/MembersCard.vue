<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="member in members" :key="member.name">
            <div class="col-3">
              <div class="avatar">
                <img :src="member.image" alt="Circle Image" class="rounded img-fluid">
              </div>
            </div>
            <div class="col-6">
              {{member.name}}
              <br>
              <!-- <span :class="getStatusClass(member.status)">
                <small>{{member.status}}</small>
              </span> -->
              <a :href=member.status v-if="member.profile==='linkedin'">
               Linked <i class="ti-linkedin"></i>
              </a>
              <a :href=member.status v-if="member.profile==='instagram'">
               Instagram <i class="ti-instagram"></i>
              </a>
              
            </div>

            <!-- <div class="col-3">
              <p-button type="success" outline icon>
                <i class="fa fa-envelope"></i>
              </p-button>
            </div> -->
          </div>
        </li>
      </ul>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "Team members",
      members: [
        {
          image: require("@/assets/img/utkarsh-pic.png"),
          name: "Utkarsh Pandey",
          status: "//www.linkedin.com/in/utkarsh-pandey-99a365143",
          profile:"linkedin"
        },
        {
          image: require("@/assets/img/aditi.jpeg"),
          name: "Aditi Chaudhary",
          status: "//www.instagram.com/aditichaudhary._?igshid=w34yvsa1jhdw",
          profile:"instagram"
        },
        {
          image: require("@/assets/img/hasan.png"),
          name: "Ijtaba Hasan",
          status: "//www.linkedin.com/in/ijtaba-hasan-39b9aa15a",
          profile:"linkedin"
        },
        {
          image: require("@/assets/img/saurav.png"),
          name: "Saurav Kumar",
          status: "//www.linkedin.com/in/saurav-kumar-a3ab96172",
          profile:"linkedin"
        },
        {
          image: require("@/assets/img/shubham.png"),
          name: "Shubham Harsh",
          status: "//www.linkedin.com/in/shubham-kumar-harsh-5182449b",
          profile:"linkedin"
        },
        
        // {
        //   image: require("@/assets/img/chauhan.png"),
        //   name: "Abhishek Chauhan",
        //   status: "//www.linkedin.com/in/abhishek5695/",
        //   profile:"linkedin"
        // },
        
        
        
        // {
        //   image: require("@/assets/img/faces/face-1.jpg"),
        //   name: "Flume",
        //   status: "Busy"
        // }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Offline":
          return "text-muted";
        case "Available":
          return "text-success";
        case "Busy":
          return "text-danger";
        default:
          return "text-success";
      }
    }
  }
};
</script>
<style>
.row{
  margin-bottom: 20px;
}
</style>
