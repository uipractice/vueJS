<template>
     <div class='demo-wrapper'>
      <div v-if="columnsUsersLoading">
              Loading...
            </div>
    <q-table
      flat bordered
      title="Treats"
      :rows="resUsers.data"
      :columns="columnsUsers"
      color="primary"
      row-key="name"
      v-else
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'

import exportFile from 'quasar/src/utils/export-file.js';import useQuasar from 'quasar/src/composables/use-quasar.js';

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


function wrapCsvValue (val, formatFn, row) {
  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

console.log("@@ resUsers.data", resUsers.value);

    const $q = useQuasar()
    function  exportTable () {
        // naive encoding to csv format
        const content = [columnsUsers.map(col => wrapCsvValue(col.label))].concat(
          resUsers.value.data.map(row => columnsUsers.map(col => wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format,
            row
          )).join(','))
        ).join('\r\n')

        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )

        if (status !== true) {
          $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
          })
        }
      }
    


  </script>