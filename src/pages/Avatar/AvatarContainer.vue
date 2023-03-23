<template>
  <div>
    <wrapperOfAllComponents :propsCode="avatarCode" propsDemo="AvatarDemoCode"></wrapperOfAllComponents>
  </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
// import './ButtonContainer.css'
import { ref } from 'vue'

 var  avatarCode = ref('')
 avatarCode =`
 <q-avatar color="red" text-color="white" icon="directions" />
    <q-avatar color="primary" text-color="white">J</q-avatar>
    <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
    <q-avatar size="24px" color="orange">J</q-avatar>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
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