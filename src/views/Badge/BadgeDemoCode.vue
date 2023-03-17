<template>
    <div class='demo-wrapper'>
  
      <q-badge rounded color="yellow" />
    <q-badge rounded color="green" />
    <q-badge rounded color="red" />
    <div class="q-gutter-md q-ml-none">
      <q-btn round icon="notifications">
        <q-badge floating color="red" rounded />
      </q-btn>
      <q-btn color="blue">
        Notifications
        <q-badge color="red" rounded floating />
      </q-btn>
    </div>
    <div>
      <q-badge color="blue" rounded class="q-mr-sm" />Status
    </div>
 
</div>
 </template>

 <script setup>
 import { ref } from 'vue'
 
 var badgeCode = ref("");
 badgeCode =`
 <q-badge rounded color="yellow" />
    <q-badge rounded color="green" />
    <q-badge rounded color="red" />
    <div class="q-gutter-md q-ml-none">
      <q-btn round icon="notifications">
        <q-badge floating color="red" rounded />
      </q-btn>
      <q-btn color="blue">
        Notifications
        <q-badge color="red" rounded floating />
      </q-btn>
    </div>
    <div>
      <q-badge color="blue" rounded class="q-mr-sm" />Status
    </div>`

  const emit = defineEmits(['childToParentClicked'])

  emit('childToParentClicked',badgeCode)     
 
 </script>