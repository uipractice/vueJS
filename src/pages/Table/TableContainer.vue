<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="TableDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
  <template>
     <div class='demo-wrapper'>
           <div class="q-pa-md q-gutter-sm">
            <h6>Basic</h6>
            <div v-if="columnsUsersLoading">
              Loading...
            </div>
            <q-table
                  title="Treats"
                  :rows="resUsers.data"
                  :columns="columnsUsers"
                  row-key="name"
                  v-else
            />
           </div>
      
      <div class="q-pa-md q-gutter-sm">
            <h6>sticky</h6>
            <q-table
                  class="my-sticky-header-column-table"
                  flat bordered
                  title="Treats"
                  :rows="rows"
                  :columns="columns"
                  row-key="name"
            />
      </div>

      <div class="q-pa-md q-gutter-sm">
            <h6>virtual scroll</h6>
            <div id="q-app" style="min-height: 100vh;">
             <div class="q-pa-md">
                  <q-table
                  style="height: 400px"
                        class="my-sticky-virtscroll-table"
                        virtual-scroll
                        flat bordered
                        v-model:pagination="pagination"
                        :rows-per-page-options="[0]"
                        :virtual-scroll-sticky-size-start="48"
                        row-key="index"
                        title="Treats"
                        :rows="rows"
                        :columns="columns"
                  />
             </div>
             </div>     
      </div>
      <div class="q-pa-md q-gutter-sm">
            <h6>selection table</h6>
            <q-table
                  flat bordered
                  title="Treats"
                  :rows="resComments.data"
                  :columns="columnsComments"
                  row-key="name"
                  :selected-rows-label="getSelectedString"
                  selection="multiple"
                  :loading="columnsCommentsLoading"
                  v-model:selected="selected"
            />

            <div class="q-mt-md">
                  Selected: {{ JSON.stringify(selected) }}
            </div>
      </div>
    </div>
  </template>

 
   import { ref } from 'vue'

   import axios from 'axios';
    var resUsers = ref('')
    var columnsUsersLoading = ref('false')
    
    columnsUsersLoading.value = true;
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
    
    // handle success
    columnsUsersLoading.value = false
    console.log("@@resUsers",response);
    resUsers.value = response
    console.log("@@resUsers",resUsers);

    })
    .catch(function (error) {
    // handle error
        console.log(error);
  })
//rows and columns are same for every table
   let  rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]
const columns = [{
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const columnsUsers = [{
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
  { name: 'phone', label: 'Phone', field: 'phone', sortable: true },
  { name: 'website', label: 'Website', field: 'website' },
  { name: 'company', label: 'Company', field: row=>row.company.name },
  { name: 'address', label: 'Address', field: row=>row.address.city }
]
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
function customSort (rows, sortBy, descending) {
        const data = [...rows]

        if (sortBy) {
          data.sort((a, b) => {
            const x = descending ? b : a
            const y = descending ? a : b

            if (sortBy === 'name') {
              // string sort
              return x[ sortBy ] > y[ sortBy ] ? 1 : x[ sortBy ] < y[ sortBy ] ? -1 : 0
            }
            else {
              // numeric sort
              return parseFloat(x[ sortBy ]) - parseFloat(y[ sortBy ])
            }
          })
        }

        return data
      }

   //this is for selection table
   const selected = ref([])
  function getSelectedString () {
        return selected.value.length === 0 ? '' : '{selected.value.length} record {selected.value.length > 1 ? 's' : ''} selected of {resComments.value.data.length}'
      }

     //this for virtual scroll table 
  var pagination =ref({
        rowsPerPage: 0
      })
       rows = []
       const seed = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
    ]
      for (let i = 0; i < 1000; i++) {
      rows = rows.concat(seed.slice(0).map(r => ({ ...r })))
      }
      rows.forEach((row, index) => {
      row.index = index
      })


<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  height: 310px

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 600px

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #00b4ff

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #00b4ff

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px

    
    
</style>
        `
</script>
<style>

.componentWrapper{
  margin-top: 10px;
  margin-left: 30px;
}
.step-tabs-wrapper {
    border: 1px solid rgba(0,0,0,.125);
    width: 100% !important;
    margin-bottom: 0px !important;
    margin-left: 0px !important;
    border-radius: 10px;
    min-height: 600px
}

</style>