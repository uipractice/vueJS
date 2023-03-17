<template>
    <div class='demo-wrapper'>
  
        <q-avatar color="red" text-color="white" icon="directions" />
        <q-avatar color="primary" text-color="white">J</q-avatar>
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
        <q-avatar size="24px" color="orange">J</q-avatar>
        <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
 
</div>
 </template>

 <script setup>
 import { ref } from 'vue'
 
 var avatarCode = ref("");
 avatarCode =`
 <q-avatar color="red" text-color="white" icon="directions" />
    <q-avatar color="primary" text-color="white">J</q-avatar>
    <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
    <q-avatar size="24px" color="orange">J</q-avatar>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>`

  const emit = defineEmits(['childToParentClicked'])

  emit('childToParentClicked',avatarCode)     
 
 </script>