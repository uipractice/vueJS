<template>
        <q-select
          v-model="model"
          use-input
          input-debounce="0"
          label="Search by select options from dropdown"
          :options="options"
          @filter="filterFn"
          style="width: 340px"
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
  import { ref ,watch} from 'vue'
  import { menuList } from '../utils/menuList';
  import router from "@/router";
  var stringOptions = []
for(var i=0;i<menuList.value.length;i++){
  for(var j=0;j<menuList.value[i].listOfSubCom.length;j++){
     stringOptions.push(menuList.value[i].listOfSubCom[j].name);
  }
}

  export default {
    setup () {
      var options = ref([])
      options.value = stringOptions
      var model = ref("")

      watch(model,(curVal)=>{
        console.log("curVal",curVal);
        if(curVal == null){
          router.push({ path: '/', replace: true })
        }else{
        router.push({ path: '/'+curVal, replace: true })
      }
      })


      return {
        model,
        stringOptions,
        options,
  
        filterFn (val, update) {
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