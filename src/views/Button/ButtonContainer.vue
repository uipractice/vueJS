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
            <ButtonDemoCode @childToParentClicked="showButtonCode"></ButtonDemoCode>
          
        </q-tab-panel>

        <q-tab-panel name="code">
          <div class="text-h6">code</div>
          <pre>
          {{ buttonCode }}
        </pre>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div> 
</template>

<script setup>
import ButtonDemoCode from './ButtonDemoCode.vue';
import './ButtonContainer.css'
import { ref } from 'vue'
import router from "@/router";
 
console.log("router d",router.currentRoute.value, typeof router.currentRoute.value);

  var  tab = ref('demo')
  var  buttonCode = ref('')
  const showButtonCode = perameter =>{
      buttonCode.value = perameter
  }
</script>
<style>
.qCard{
min-height: 100vh !important;

}
.componentWrapper{
  margin-top: 10px;
  margin-left: 30px;
}




.step-tabs-wrapper {
    
    border: 1px solid rgba(0,0,0,.125);


    width: 100% !important;
   
    margin-bottom: 0px !important;
    margin-left: 0px !important;

    padding: 7px;
    border-radius: 10px;
    min-height: 600px
}

</style>