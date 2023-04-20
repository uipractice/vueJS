<template>
  <div class='demo-wrapper'>
   <div class="q-pa-md q-gutter-sm">
     <div v-if="columnsCommentsLoading">
           Loading...
     </div>
      <q-table
      v-else
         flat bordered
         title="Treats"
         :rows="resComments.data.data"
         :columns="columnsComments"
         row-key="name"
         binary-state-sort
         v-model:pagination="pagination"
         @request="handleRequest"
        :filter="searchText"
        >
        <template v-slot:top-right>
            <q-input v-model="searchText" borderless dense debounce="300"  placeholder="Search"></q-input>
           
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
 
var pagination = ref({})
var searchText= ref("")

pagination = ref({
      page: 1,
      rowsPerPage: 6,
      rowsNumber :0
    })

  function handleFilter(props){
    console.log("@@ handle filter",props);
  }

const  fetchProduct = (page = 0) =>{
  columnsCommentsLoading.value = true;
  axios.get(`https://reqres.in/api/products?page=${page}`)
 .then(function (response) {
 
 // handle success
 columnsCommentsLoading.value = false
 console.log("@@resComments",response);
 resComments.value = response
 console.log("@@resComments",resComments);

 pagination.value.page = response.data.page
 pagination.value.rowsPerPage = response.data.per_page
 pagination.value.rowsNumber = response.data.total

 })
 .catch(function (error) {
 // handle error
     console.log(error);
})
}

function handleRequest(props){
  console.log("props",props);
    fetchProduct(props.pagination.page)
}

fetchProduct()
const columnsComments = [{
 name: 'name',
 required: true,
 label: 'Name',
 align: 'left',
 field: row => row.name,
 sortable: true
},
{ name: 'year', align: 'center', label: 'year', field: 'year', sortable: true },
{ name: 'color', align: 'center', label: 'color', field: 'color', sortable: true }

]

</script>