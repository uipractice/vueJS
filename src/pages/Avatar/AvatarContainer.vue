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
    <div class="q-pa-md q-gutter-sm">
      <q-avatar color="red" text-color="white" icon="directions" />
      <q-avatar color="primary" text-color="white">J</q-avatar>
      <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
      <q-avatar size="24px" color="orange">J</q-avatar>
      <q-avatar size="24px" color="orange">J</q-avatar>

      <q-avatar square color="red" text-color="white" icon="directions" />
      <q-avatar square color="primary" text-color="white">J</q-avatar>
      <q-avatar square size="100px" font-size="82px" color="teal" text-color="white" icon="directions" />
      <q-avatar square size="24px" color="orange">J</q-avatar>
      <q-avatar square>
      <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
    </div>
    <div class="q-pa-md q-gutter-y-md">
      <div class="q-gutter-sm">
        <q-chip>
          <q-avatar color="red" text-color="white">50</q-avatar>
          Emails
        </q-chip>
        <q-chip>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          John
        </q-chip>
      </div>

      <div class="q-gutter-x-sm">
        <q-btn round>
          <q-avatar size="28px">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
          </q-avatar>
        </q-btn>
        <q-btn round>
          <q-avatar size="32px">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
          </q-avatar>
        </q-btn>
        <q-btn round>
          <q-avatar size="40px">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
          </q-avatar>
        </q-btn>
      </div>

      <q-item clickable v-ripple>
          <q-item-section side>
            <q-avatar rounded size="48px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
              <q-badge floating color="teal">new</q-badge>
            </q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label>Mary</q-item-label>
            <q-item-label caption>2 new messages</q-item-label>
          </q-item-section>
        <q-item-section side>
            3 min ago
        </q-item-section>
      </q-item>

      <q-banner rounded class="bg-primary text-white">
          <template v-slot:avatar>
            <q-avatar icon="signal_wifi_off" color="white" text-color="primary" />
          </template>

          You have lost connection to the internet. This app is offline.

          <template v-slot:action>
            <q-btn flat color="white" label="Turn ON Wifi" />
          </template>
        </q-banner>
  </div>
  <div class="q-pa-md q-gutter-sm" style="height: 80px">
      <q-avatar
      v-for="n in 5"
      :key="n"
      size="40px"
      class="overlapping"
      :style="left: {n * 25}px "
      >
        <img :src="https://cdn.quasar.dev/img/avatar{n + 1}.jpg">
      </q-avatar>
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