<template>
     <div class='demo-wrapper'>
           
      
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
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'
var current =ref(3)
  </script>