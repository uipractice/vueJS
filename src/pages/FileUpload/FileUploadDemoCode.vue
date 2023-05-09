<template>
  <div class='demo-wrapper'>
   <div class="q-pa-md q-gutter-sm">
   <q-file v-model="model" label="Standard" />

   <q-file filled v-model="model1" label="Filled" />

   <q-file outlined v-model="model2" label="Outlined" />
   <q-file outlined v-model="model3">
     <template v-slot:prepend>
       <q-icon name="attach_file" />
     </template>
   </q-file>
   </div>
   <div class="q-pa-md q-gutter-sm">
         <q-file color="orange" filled v-model="model4" label="Clearable">
     <template v-if="model4" v-slot:append>
       <q-icon name="cancel" @click.stop.prevent="model4 = null" class="cursor-pointer" />
     </template>
   </q-file>
   <q-file
     disable
     filled
     v-model="model5"
     hint="Disable"
     style="width: 250px"
   />

   <q-file
     readonly
     filled
     v-model="model6"
     hint="Readonly"
     style="width: 250px"
   />
   <q-file
   v-model="files"
   label="Pick files"
   filled
   multiple
   style="max-width: 300px"
 />
 <q-file
   v-model="file"
   label="Pick files with append"
   filled
   multiple
   append
   style="max-width: 300px"
 />
 <q-file
   v-model="files1"
   label="Pick files as Chips"
   outlined
   use-chips
   multiple
   style="max-width: 300px"
 />
 <q-file
     style="max-width: 300px"
     v-model="filesImages"
     filled
     rounded
     label="Restricted to images"
     multiple
     accept=".jpg, image/*"
     @rejected="onRejected"
   />

   <q-file
     style="max-width: 300px"
     v-model="filesMaxSize"
     outlined
     label="Max file size (2k)"
     multiple
     max-file-size="2048"
     @rejected="onRejected"
   />
   <q-file
     style="max-width: 300px"
     v-model="filesMaxNumber"
     standout
     label="Max number of files (3)"
     multiple
     max-files="3"
     @rejected="onRejected"
   />
   </div>

   <div class="q-pa-md q-gutter-sm">
         <q-file
     style="max-width: 300px"
     v-model="filesMaxSize1"
     filled
     label="Filtered (for <2k size)"
     multiple
     :filter="checkFileSize"
     @rejected="onRejected"
   />
   </div>
 
 </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
  const $q = useQuasar()
import { ref } from 'vue'
var model = ref(null)
var model1 = ref(null)
var model2 = ref(null)
var model3 = ref(null)
var model4 = ref(null)
var model5 = ref(null)
var model6 = ref(null)

var files = ref(null)
var files1 = ref(null)
var file = ref(null)

  var filesImages    =ref(null)
  var  filesMaxSize  = ref(null)
  var  filesMaxSize1  = ref(null)
  var  filesMaxNumber = ref(null)

function   onRejected (rejectedEntries) {
     // Notify plugin needs to be installed
     // https://quasar.dev/quasar-plugins/notify#Installation
     $q.notify({
       type: 'negative',
       message: `${rejectedEntries.length} file(s) did not pass validation constraints`
     })
   }

function checkFileSize (files) {
     return files.filter(file => file.size < 2048)
   }
</script>