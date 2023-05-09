<template>
     <div class='demo-wrapper'>

      <div class="q-pa-md q-gutter-sm">
            <q-radio v-model="shape" val="line" label="Line" />
      <q-radio v-model="shape1" val="rectangle" label="Rectangle" />
      <q-radio v-model="shape2" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="line" label="Line" />
      <q-radio v-model="shape3" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="rectangle" label="Rectangle" />
      </div>

      <div class="q-pa-md q-gutter-sm">
            <q-radio disable v-model="shape4" val="line" label="Line Disabled" />
      <q-radio disable v-model="shape5" val="rectangle" label="Rectangle Disabled" />
      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-radio v-model="shape6" val="orange" color="orange" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Orange</q-item-label>
          <q-item-label caption>With description </q-item-label>
        </q-item-section>
      </q-item>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <h5>checkbox group :select one of them</h5>
      <q-option-group
            :options="options"
            type="radio"
            v-model="group"
          />
   
      </div>
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'
   var shape =ref('line')
   var shape1 =ref('line')
   var shape2 =ref('line')
   var shape3 =ref('line')
   var shape4 =ref('line')
   var shape5 =ref('line')
   var shape6 =ref('line')
    var group= ref(null)

    var  options= [
        { label: 'Battery too low Group', value: 'bat' },
        { label: 'Friend request Group', value: 'friend', color: 'green' },
        { label: 'Picture uploaded Group', value: 'upload', color: 'red' }
      ]
  </script>