<template>
     <div class='demo-wrapper'>
      <div class="q-pa-md q-gutter-sm">
            <q-toggle v-model="value" />
            <q-toggle
            v-model="value1"
            color="green"
            />
            <q-toggle
                  v-model="value2"
                  label="On Right"
                  />
      </div>

      <div class="q-pa-md q-gutter-sm">
            <q-toggle color="blue" label="Blue" v-model="selection" val="blue" />
            <q-toggle color="yellow" label="Yellow" v-model="selection" val="yellow" />
            <q-toggle color="green" label="Green" v-model="selection" val="green" />
            <q-toggle color="red" label="Red" v-model="selection" val="red" />
            <div>
              Model: {{selection}}
            </div>
          </div>
      <div class="q-pa-md q-gutter-sm">
            <q-toggle
                  v-model="value3"
                  color="primary"
                  disable
                  label="Disabled"
            />
            <q-item tag="label" v-ripple>
                  <q-item-section>
                  <q-item-label>Friend request</q-item-label>
                  <q-item-label caption>Allow notification</q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                  <q-toggle color="green" v-model="notifications" val="friend" />
                  </q-item-section>
           </q-item>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  var value = ref(true)
  var value1 = ref(true)
  var value2 = ref(true)
  var value3 = ref(true)
  var selection = ref([])
  var notifications = ref(['friend'])
  </script>