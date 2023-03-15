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
          <q-tab name="demo" label="demo" />
          <q-tab name="code" label="code" />
          
        </q-tabs>
  
        <q-separator />
  
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="demo">
            <div class="text-h6" >demo</div>
              <!-- <ButtonDemoCode @childToParentClicked="showButtonCode"></ButtonDemoCode> -->
            
          </q-tab-panel>
  
          <q-tab-panel name="code">
            <div class="text-h6">code</div>
            <pre>
            <!-- {{ buttonCode }} -->
          </pre>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div> 
  </template>
  <script setup>
import router from "@/router";
 
 console.log("router d",router.currentRoute.value, typeof router.currentRoute.value);
</script>