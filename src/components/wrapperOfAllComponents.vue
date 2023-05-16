<template>
    <div class="componentWrapper">
     <h5 class='btn-title' style="margin: 10px 0 20px;
    font-weight: 700;
    text-align: left;
    font-size: 18px;">{{ router.currentRoute.value.name?  router.currentRoute.value.name:'component' }}</h5>
      <div class="step-tabs-wrapper">
        <q-tabs
        v-model="tab"
        no-caps
        outside-arrows
        mobile-arrows
        align="left"
        >
          <q-tab name="demo" label="Demo" />
          <q-tab name="code" label="Code" />
          
        </q-tabs>
  
        <q-separator />
        <q-tab-panels v-model="tab" animated style="padding: 10px 30px;">
          <q-tab-panel name="demo"  label="Demo">
            <!-- <div class="text-h6" >demo</div> -->
            <!-- prop name{{propsObj.propsDemo }}
            {{ compoNames }} -->
              <div v-for="(compoName,index) in finalCompoName" :key="index">
             
                <component  :is="compoName">
                   
                </component>  

                
            </div>
          </q-tab-panel>
  
          <q-tab-panel name="code" label="Code">
            <!-- <div class="text-h6">code</div> -->
            <div  class="jsx-code-wrapper">
                <h6>Vue Quasar code</h6>
                <pre class="language-javascript" v-highlightjs style="margin-right: 20px; background: rgb(255, 255, 255);">
                    <code class="javascript"   style="background: white !important;">
                        {{ propsObj.propsCode }}
                    </code>
                </pre>
              </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div> 
  </template>
  <script setup>
import router from "@/router";
import { ref,computed  } from 'vue'
import ButtonDemoCode from '@/pages/Button/ButtonDemoCode.vue';
import AvatarDemoCode from '@/pages/Avatar/AvatarDemoCode.vue';
import BadgeDemoCode from '@/pages/Badge/BadgeDemoCode.vue';
import BreadCrumbsDemoCode from '@/pages/BreadCrumbs/BreadCrumbsDemoCode.vue';
import CardsDemoCode from '@/pages/Cards/CardsDemoCode.vue';
import CircularProgressDemoCode from '@/pages/CircularProgress/CircularProgressDemoCode.vue';
import DialogDemoCode from '@/pages/Dialog/DialogDemoCode.vue';
import InputDemoCode from '@/pages/Input/InputDemoCode.vue';
import DropdownDemoCode from '@/pages/Dropdown/DropdownDemoCode.vue';
import FileUploadDemoCode from '@/pages/FileUpload/FileUploadDemoCode.vue';
import FormDemoCode from '@/pages/Form/FormDemoCode.vue';
import RadioDemoCode from '@/pages/Radio/RadioDemoCode.vue';
import CheckboxDemoCode from '@/pages/Checkbox/CheckboxDemoCode.vue';
import ToggleDemoCode from '@/pages/Toggle/ToggleDemoCode.vue';
import QdateDemoCode from '@/pages/Qdate/QdateDemoCode.vue';
import InnerLoadingDemoCode from '@/pages/InnerLoading/InnerLoadingDemoCode.vue';
import MenuDemoCode from '@/pages/Menu/MenuDemoCode.vue';
import PaginationDemoCode from '@/pages/Pagination/PaginationDemoCode.vue';
import TooltipDemoCode from '@/pages/Tooltip/TooltipDemoCode.vue';
import TabsDemoCode from '@/pages/Tabs/TabsDemoCode.vue';
import StepperDemoCode from '@/pages/Stepper/StepperDemoCode.vue';
import TableDemoCode from '@/pages/Table/TableDemoCode.vue';
import InfiniteScrollDemoCode from '@/pages/InfiniteScroll/InfiniteScrollDemoCode.vue';
import NotifyDemoCode from '@/pages/Notify/NotifyDemoCode.vue';
import PopupEditingTableDemoCode from '@/pages/Table/PopupEditingTableDemoCode.vue';
import ServerSideTableDemoCode from '@/pages/Table/ServerSideTableDemoCode.vue';
import ExportToCSVTableDemoCode from '@/pages/Table/ExportToCSVTableDemoCode.vue';

import '../css/styles.css'


 var compoNames = [ButtonDemoCode,AvatarDemoCode,BadgeDemoCode,BreadCrumbsDemoCode,CardsDemoCode,CircularProgressDemoCode,DialogDemoCode,InputDemoCode,DropdownDemoCode,FileUploadDemoCode,FormDemoCode,RadioDemoCode,CheckboxDemoCode,ToggleDemoCode,QdateDemoCode,InnerLoadingDemoCode,MenuDemoCode,PaginationDemoCode,TooltipDemoCode,TabsDemoCode,StepperDemoCode,TableDemoCode,InfiniteScrollDemoCode,NotifyDemoCode,PopupEditingTableDemoCode,ServerSideTableDemoCode,ExportToCSVTableDemoCode]

 const propsObj = defineProps({
    propsCode : {
    type: String,
    required: true
  },
  propsDemo: String,
   
})

var  tab = ref('demo')
var filterCompoNames = []

filterCompoNames =compoNames.filter(compo=>{
        if(compo.__name == propsObj.propsDemo){
          return compo
        }
})

const finalCompoName = computed(()=>{
  return filterCompoNames
})



</script>
<style>
/* pre{
overflow-x: scroll;
} */
h6{
    margin: 0px !important;
}
code{
    padding: 5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  word-break: break-all;
  word-wrap: break-word;
  color: #333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
code{
 min-height: 700px !important;
}
pre{
    padding: 0 !important;
  margin: 0  !important;
  font-size: 0 !important;
  line-height: 0 !important;
  word-break: break-all;
  word-wrap: break-word;
  color: #333;
  background-color: #f5f5f5;
  border: none;
  border-radius: 0 !important;
}
.jsx-code-wrapper{
    margin-top: 0px !important;
}
</style>