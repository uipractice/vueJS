<template>
     <div class='demo-wrapper'>
         <div class="q-pa-md q-gutter-sm">
            <q-date v-model="date" landscape />
            <q-date
            v-model="date"
            minimal
            disable
            />
      </div>

      <div class="q-pa-md q-gutter-sm">
            <div class="q-pb-sm">
                   Model: {{ days }}
            </div>

      <q-date v-model="days" multiple />
      </div>
      <div class="q-pa-md q-gutter-sm">
            <div class="q-pb-sm">
            Model: {{ model }}
          </div>

          <q-date v-model="model" range />
           <q-date
            v-model="date"
            default-view="Years"
       />
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
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'
   var date = ref('2019/02/01')
    var days = ref([ '2019/02/01', '2019/02/10' ])
    var model = ref({ from: '2020/07/08', to: '2020/07/17' })
   function eventsFn (date) {
        const parts = date.split('/')
        return parts[ 2 ] % 2 === 0
      }

      // const date = ref('2019/03/01')
    const proxyDate = ref('2019/03/01')
   function updateProxy () {
        proxyDate.value = date.value
      }

      function  save () {
        date.value = proxyDate.value
      }
  </script>