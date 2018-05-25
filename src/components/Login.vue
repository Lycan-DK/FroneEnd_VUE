<template>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="name" label="Name" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click='logIn'>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
</template>


<script>  

export default {

    data(){
      return {
        name:null,
        password:null
      }
    },

    methods: {

      logIn(){
        axios.get('/login',{Username:this.name,Password:this.password})
        .then((response)=>{
            console.log(response.data.admin)
            let accessToken=response.data.token;
            localStorage.setItem('token',accessToken);
            localStorage.setItem('user',response.data.name);
            localStorage.setItem('admin',response.data.admin);
            console.log(response.data.name)
            console.log(response.data.admin)

            window.isSignedIn=true;

            Bus.$emit('loggedIn');
            this.$router.push('/');
        })
        .catch((error)=>{
            console.log(error);
        })
        
      }
    }

}

</script>

