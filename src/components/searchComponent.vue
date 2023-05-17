<template>
   <q-icon name="search" v-if="!isSearch" @click="searchVisibleClick()"   style="color: #5f5f67; font-size: 20px;font-style: normal;margin-right: 30px;
    font-size: 20px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;cursor: pointer;"/>
    <q-select
          v-model="model"
          use-input
          input-debounce="0"
          :options="options"
          @filter="filterFn"
          style="width: 390px;margin-top: -9px;"
          behavior="menu"
          :dense="dense"
          v-else
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop.prevent="searchCloseClick()" class="cursor-pointer" />
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
      var isSearch = ref(false);
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
        isSearch,
        dense: ref(true),
        searchVisibleClick(){
           isSearch.value = true
        },
        searchCloseClick(){
            model.value = ""
            isSearch.value = ""
        },
        filterFn (val, update) {
        //  if(model.value){
        //     router.push({ path: '/'+model.value, replace: true })
        //  }

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
  <style scoped>
 .self-stretch {
    align-self: center !important;
}
.q-field__control:before, .q-field__control:after{
  bottom: 13px !important;
}

.search_align{
  /* background-color: black; */
}
</style>