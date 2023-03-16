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
            <div class="text-h6">code</div>
            <pre>
               
              {{ propsObj.propsCode }}
          </pre>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div> 
  </template>
  <script setup>
import router from "@/router";
import { ref } from 'vue'
import ButtonDemoCode from '@/views/Button/ButtonDemoCode.vue';


 var compoNames = [ButtonDemoCode]

 const propsObj = defineProps({
    propsCode : {
    type: String,
    required: true
  },
  propsDemo: String,
   
})

var  tab = ref('demo')

</script>