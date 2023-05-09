<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="PaginationDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`  
<div class="q-pa-md q-gutter-sm">
  <q-pagination
    v-model="current"
    :max="5"
  />
</div>

<div class="q-pa-md q-gutter-sm">
  <q-pagination
    v-model="current"
    :max="5"
    input
  />
</div>

<div class="q-pa-md q-gutter-sm">
  <q-pagination
    v-model="current"
    color="black"
    :max="10"
    :max-pages="6"
    :boundary-numbers="false"
  />
  <q-pagination
    v-model="current"
    :max="5"
    direction-links
  />
</div>

import { ref } from 'vue'
var current =ref(3)
        `
</script>
<style>

.componentWrapper{
  margin-top: 10px;
  margin-left: 30px;
}
.step-tabs-wrapper {
    border: 1px solid rgba(0,0,0,.125);
    width: 100% !important;
    margin-bottom: 0px !important;
    margin-left: 0px !important;
    border-radius: 10px;
    min-height: 600px
}

</style>