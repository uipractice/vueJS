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
         :rows="filteredData.length != 0?filteredData: resComments"
         :columns="columnsComments"
         row-key="name"
         binary-state-sort
         v-model:pagination="pagination"
         @request="handleRequest"
        :filter="searchText"
        :filter-method="handleFilter"
        >
        <template v-slot:top-right>
            <q-input v-model="searchText" borderless dense debounce="300"  placeholder="Search by name"></q-input>
           
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
var orignalRows=ref('')


pagination = ref({
      page: 1,
      rowsPerPage: 6,
      rowsNumber :0
    })

  function handleFilter(props){
    console.log("@@ handle filter",props);
  }

const  fetchProduct = (page = 0) =>{
  console.log("calling fetch product");
  columnsCommentsLoading.value = true;
  axios.get(`https://reqres.in/api/products?page=${page}`)
 .then(function (response) {
 
 // handle success
 columnsCommentsLoading.value = false
 console.log("@@resComments",response);
 resComments.value = response.data.data;
 console.log("@@resComments",resComments);
 orignalRows.value = response.data.data;
 pagination.value.page = response.data.page
 pagination.value.rowsPerPage = response.data.per_page
 pagination.value.rowsNumber = response.data.total

 })
 .catch(function (error) {
 // handle error
     console.log(error);
})
}
function filterMethoadByName(res){
 
    console.log("res of map",res,typeof res,res.name);
    
    var resName = res.name
console.log("searchText",searchText);
      if(resName.includes(searchText.value)){
        console.log("res.name.includes(res)",res.name.includes(res));
        return res
      }
    
}
var filteredData = ref('')
function getFilterData(filter){
  console.log("......calling get filter data");
  console.log("filter",filter);
  console.log("orignalRows",orignalRows,typeof orignalRows);
   var filterData=  orignalRows.value.filter(filterMethoadByName)
   resComments.value = []
   console.log("calling rescomments",resComments.value);
   for(var i=0;i<filterData.length;i++){
       resComments.value.push(filterData[i])
   }
   resComments.value = filterData;
   console.log("filterData",filterData);
   filteredData.value = filterData
   console.log("resComments",resComments.value);
}

function handleRequest(props){
  console.log("......calling handle request");
  console.log("props filter",props);
    if(props.filter.length == 0){
        resComments.value = orignalRows.value
        filteredData.value = []
    }
    fetchProduct(props.pagination.page)
    if(props.filter){
      getFilterData(props.filter)
    }
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