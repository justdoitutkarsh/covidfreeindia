<template>
  
    <div class="row">
     
     <!-- <p>Register with us</p> -->
     
        <div @click="openGoogleForm('plasma-donation')" class="btn-register">
         <p-button class="btn-donate-plasma" type="primary" outline>Register to donate Plasma</p-button>
        </div>
        <div @click="openGoogleForm('resources')" class="btn-register">
         <p-button class="btn-donate-plasma" type="primary" outline>Add resource/leads on information related to COVID</p-button>
        </div>
    </div>
</template>
<script>

import {Button as PButton} from '@/components'

export default {

  components: {
    PButton
  },
  data() {
    return {
     
      
      
    };
  },
  computed: {
    
  },
  mounted(){
   
  },
  methods: {
    openGoogleForm(type){
       if(type==='plasma-donation'){
           window.open("https://forms.gle/EU55hqWheiZfyQfK9", "_blank");    
       }
       if(type==='resources'){
           window.open("https://forms.gle/DBrGBJMafqHfmFE39", "_blank");    
       }
       
    }
  }

};
</script>
<style lang="scss" scoped>
.btn-register{
    width: 100%;
    .btn-donate-plasma{
        width: 100%;
        margin-bottom: 20px;
    }
}
</style>
