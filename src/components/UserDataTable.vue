<template>
  <div>
     

    <v-data-table
      :headers="headers"
      :items="contacts"
      :search="search"
      :pagination.sync="pagination"
      hide-actions
      class="elevation-1"
    >





      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.admin }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

     
  </div>
</template>

<script>
  export default {
    data: () => ({
       search: '',
       pagination:{rowsPerPage:20},
      dialog: false,
      headers: [
       
        { text: 'Name', value: 'Name' },
        { text: 'Admin', value: 'Admin' },
        { text: 'Actions', value: 'id', sortable: false }
      ],
      contacts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
      },
      defaultItem: {
        name: '',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
       
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
        fetchContacts(){
             axios.get('/user')
          .then(response=>{
              console.log(response);
              this.contacts=response.data.users;
              console.log(this.contacts)
          })
      },
      initialize(){
          this.fetchContacts();
      },
      

      editItem (item) {
        this.editedIndex = this.contacts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        console.log (item)
        axios.put('/user/'+item.public_id)
          .then(response=>{
            console.log(response);
            this.fetchContacts();
            
          })
      },

      deleteItem (item) {
        console.log(item);
        
        const index = this.contacts.indexOf(item)
          console.log('deleted data');

          axios.delete('/user/'+item.public_id)
          .then(response=>{
            console.log(response);
            this.fetchContacts();
          })

      },

     

      
    }
  }
</script>