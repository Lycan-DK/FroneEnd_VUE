<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5" height="100vh">
       

        <!-- <div v-for="(contact,index) in contacts" :key='index'>

            <h3>{{contact.mobile}}</h3>
          
        </div> -->
  
    <user-data-table></user-data-table>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>  

import UserDataTable from './UserDataTable'

export default {

    data(){
      return {
       contacts:[]
      }
    },
    components:{
      UserDataTable
    },
    methods:{
      fetchContacts(){
             axios.get('/user')
          .then(response=>{
              console.log(response);
              this.contacts=response.data.user;
          })
      }
    },
    mounted(){
      this.fetchContacts();
    },

    created(){
    }

}

</script>