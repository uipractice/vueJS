<template>
     <div class='demo-wrapper'>
      
            <div class="q-pa-md flex flex-center">
    <q-circular-progress
      :value="value"
      size="50px"
      color="orange"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="90px"
      :thickness="0.2"
      color="orange"
      center-color="grey-8"
      track-color="transparent"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="orange"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="50px"
      :thickness="0.22"
      color="orange"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="75px"
      :thickness="0.6"
      color="orange"
      center-color="grey-8"
      class="q-ma-md"
    />

    <q-circular-progress
      :value="value"
      size="40px"
      :thickness="0.4"
      color="orange"
      track-color="grey-3"
      center-color="grey-8"
      class="q-ma-md"
    />
  </div>

  <div class="q-pa-md flex flex-center">
    <q-circular-progress
      show-value
      class="text-light-blue q-ma-md"
      :value="value"
      size="50px"
      color="light-blue"
    />

    <q-circular-progress
      show-value
      class="text-white q-ma-md"
      :value="value"
      size="90px"
      :thickness="0.2"
      color="orange"
      center-color="grey-8"
      track-color="transparent"
    >
      <q-icon name="volume_up" />
    </q-circular-progress>

    <q-circular-progress
      show-value
      font-size="12px"
      :value="value"
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ value }}%
    </q-circular-progress>

    <q-circular-progress
      show-value
      font-size="16px"
      class="text-red q-ma-md"
      :value="value"
      size="60px"
      :thickness="0.05"
      color="red"
      track-color="grey-3"
    >
      <q-icon name="volume_up" class="q-mr-xs" />
      {{ value }}
    </q-circular-progress>

    <q-circular-progress
      show-value
      font-size="10px"
      class="q-ma-md"
      :value="value"
      size="80px"
      :thickness="0.25"
      color="primary"
      track-color="grey-3"
    >
      <q-avatar size="60px">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
      </q-avatar>
    </q-circular-progress>
  </div>
  <div class="q-pa-md flex flex-center">
    <q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="lime"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="90px"
      :thickness="0.2"
      color="lime"
      center-color="grey-8"
      track-color="transparent"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="lime"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="50px"
      :thickness="0.22"
      rounded
      color="lime"
      track-color="grey-3"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="75px"
      :thickness="0.6"
      color="lime"
      center-color="grey-8"
      class="q-ma-md"
    />

    <q-circular-progress
      indeterminate
      size="40px"
      :thickness="0.4"
      font-size="50px"
      color="lime"
      track-color="grey-3"
      center-color="grey-8"
      class="q-ma-md"
    />
  </div>

    </div>
  </template>

  <script setup>
  var  value = 81
//   import { ref } from 'vue'
  </script>