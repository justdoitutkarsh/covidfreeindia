<template>
    <div class="row">
        <p class="msg">
        This is a non-profit website for live tracking of COVID resources. <br><br>All information is taken from respective government websites. 
        To further avoid hassle, we suggest that you call the resources of your choice before going there to confirm the availability shown here. 
        This is a small initiative from us. <br><br>
        We are a group of volunteers who have tried to contribute our bit in facing this  Covid19 pandemic by collecting 
        and veryfying all the data that is being circulated all over the internet in the form of website, spreadsheets, 
        instagram stories and post and place it in one place so that it is easily accessible.<br> 
        We would really appreciate if you could help us in anyway. Please register with us if you wish to volunteer or just 
        drop any information of plasma, hospitals etc in the link provided for the same on the site.
        <br><br>
        If you have links to data for more cities please feel free to share at coronafreebharat@gmail.com
        <br><br><br>    
        </p> 
       
      <div class="col-xl-4 col-lg-5 col-md-6">
        <!-- <user-card>

        </user-card> -->
        <members-card>

        </members-card> 
        
       
      </div>
      <!-- <div class="col-xl-8 col-lg-7 col-md-6">
        <edit-profile-form>

        </edit-profile-form>
      </div> -->
      
    </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
export default {
  components: {
    EditProfileForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
.msg{
    font-weight: bold; 
    margin-left: 20px;
}
</style>
