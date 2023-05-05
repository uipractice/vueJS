<template>
        <q-select
          v-model="model"
          use-input
          input-debounce="0"
          label="Search"
          :options="options"
          @filter="filterFn"
          style="width: 250px"
          behavior="menu"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:append>
          <q-icon name="search" />
        </template>
        </q-select>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { menuList } from '../utils/menuList';
  import router from "@/router";
  var stringOptions = []
for(var i=0;i<menuList.value.length;i++){
  for(var j=0;j<menuList.value[i].listOfSubCom.length;j++){
     console.log("path" , menuList.value[i].listOfSubCom[j].name);
     stringOptions.push(menuList.value[i].listOfSubCom[j].name);
  }
}

  export default {
    setup () {
      var options = ref([])
      options.value = stringOptions
      var model = ref("")
      return {
        model,
        stringOptions,
        options,
  
        filterFn (val, update) {
            console.log("val",val);
            console.log("model",model.value);
         if(model.value){
            router.push({ path: '/'+model.value, replace: true })
         }

          if (val === '') {
            update(() => {
              options.value = stringOptions
            })
            return
          }
  
          update(() => {
            const needle = val.toLowerCase()
            options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
          })
        }
      }
    }
  }
  </script>
  <style>
 .self-stretch {
    align-self: center !important;
}
.q-field__control:before, .q-field__control:after{
  bottom: 13px !important;
}
</style>