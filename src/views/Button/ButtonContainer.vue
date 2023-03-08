<template>
    <q-card class="qCard">
      <q-tabs
      v-model="tab"
      no-caps
      outside-arrows
      mobile-arrows
      align="left"
      class="shadow-2"
      >
        <q-tab name="demo" label="demo" />
        <q-tab name="code" label="code" />
        
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="demo">
          <div class="text-h6" >demo</div>
            <ButtonDemo></ButtonDemo>
          
        </q-tab-panel>

        <q-tab-panel name="code">
          <div class="text-h6">code</div>
           <ButtonCode></ButtonCode>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
</template>

<script setup>
import ButtonCode from './ButtonCode.vue';
import ButtonDemo from './ButtonDemo.vue';
import { ref } from 'vue'
  var  tab = ref('demo')


</script>
<style>
.qCard{
min-height: 100vh !important;

}
</style>