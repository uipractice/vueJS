<template>
    <div class="componentWrapper">
     <h3 class='btn-title'>{{ router.currentRoute.value.name?  router.currentRoute.value.name:'component' }}</h3>
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
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="demo"  label="Demo">
            <!-- <div class="text-h6" >demo</div> -->
            <!-- prop name{{propsObj.propsDemo }} -->
              <div v-for="(compoName,index) in compoNames" :key="index">
             
                <component v-if="compoName.__name == propsObj.propsDemo" :is="compoName"></component>  

                
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
import { ref } from 'vue'
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


import '../css/styles.css'


 var compoNames = [ButtonDemoCode,AvatarDemoCode,BadgeDemoCode,BreadCrumbsDemoCode,CardsDemoCode,CircularProgressDemoCode,DialogDemoCode,InputDemoCode,DropdownDemoCode,FileUploadDemoCode]

 const propsObj = defineProps({
    propsCode : {
    type: String,
    required: true
  },
  propsDemo: String,
   
})

var  tab = ref('demo')

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