<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="QdateDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =` 
        <div class="q-pa-md q-gutter-sm">
          <q-date v-model="date" />
          <q-date
            v-model="date"
            minimal
          />
        </div>

        <div class="q-pa-md q-gutter-sm">
          <div class="q-pb-sm">
            Model: {{ days }}
          </div>

        <q-date v-model="days" multiple />
        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-date v-model="model" range />
           <q-date
            v-model="date"
            default-view="Years"
          />
          <q-date
          //reset to today's date
          <q-date
          v-model="date"
          today-btn
        />
        <q-date
        v-model="date"
        :events="eventsFn"
      />
    <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
        </div>
        <div class="q-pa-md q-gutter-sm">
            <q-btn icon="event" round color="primary">
            <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
            <q-date v-model="proxyDate">
            <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Cancel" color="primary" flat v-close-popup />
                  <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
            </div>
            </q-date>
            </q-popup-proxy>
            </q-btn>
            <q-input filled v-model="date" mask="date" :rules="['date']">

              //input
              
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
      </div>
        
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