<template>
     <div class='demo-wrapper'>
      <div class="q-pa-md q-gutter-sm">
        <div v-if="columnsCommentsLoading">
              Loading...
        </div>
            <q-table
            flat bordered
            title="Treats"
            :rows="resComments.data"
            :columns="columnsComments"
            row-key="name"
            binary-state-sort
            v-else
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
            <q-popup-edit v-model="props.row.email" title="Update Email" buttons v-slot="scope">
              <q-input type="text" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="body" :props="props">
            <div class="text-pre-wrap">{{ props.row.body }}</div>
            <q-popup-edit v-model="props.row.body" v-slot="scope" title="Update Body" buttons>
              <q-input type="textarea" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
        
         
        </q-tr>
      </template>
    </q-table>
      </div>
    </div>
  </template>

<script setup>
 import { ref } from 'vue'


 import axios from 'axios';
    var resComments = ref('')
    var columnsCommentsLoading = ref('false')
    
    columnsCommentsLoading.value = true;
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(function (response) {
    
    // handle success
    columnsCommentsLoading.value = false
    console.log("@@resComments",response);
    resComments.value = response
    console.log("@@resComments",resComments);

    })
    .catch(function (error) {
    // handle error
        console.log(error);
  })

const columnsComments = [{
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
  { name: 'body', label: 'body', field: 'body', sortable: true },
 
]

</script>