<template>
  <div class='demo-wrapper'>
    <div class="q-pa-md q-gutter-sm">
      <q-btn push color="white" text-color="primary" label="Unread Mails">
      <q-badge color="orange" floating>22</q-badge>
    </q-btn>

    <q-btn dense color="purple" round icon="email" class="q-ml-md">
      <q-badge color="red" floating>4</q-badge>
    </q-btn>
   </div>
   <div class="q-pa-md q-gutter-sm">
      <q-btn color="teal" size="sm" label="Unread Mails">
      <q-badge color="orange" floating transparent>
        ∞
      </q-badge>
    </q-btn>

    <q-btn dense round flat icon="email">
      <q-badge color="red" floating transparent>
        4
      </q-badge>
    </q-btn>

    <div class="text-h4">
      Title
      <q-badge transparent align="middle" color="orange">
        app v3.0.0
      </q-badge>
    </div>
   </div>

   <div class="q-pa-md q-gutter-sm">
      <q-badge outline color="primary" label="Outline" />
    <q-badge outline color="orange" label="Outline" />
    <q-badge outline color="secondary" label="Outline" />

    <div class="text-h4">
      Text
      <q-badge outline align="middle" color="teal">
        v2.0.0
      </q-badge>
    </div>
   </div>
   <div class="q-pa-md q-gutter-sm">
    <q-badge rounded color="red" label="1" />
    <q-badge rounded color="primary" label="999+" />
    <q-badge rounded color="orange" label="Round" />
   </div>
   <div class="q-pa-md q-gutter-sm">
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
 </div>
</template>

<script setup>
//   import { ref } from 'vue'
</script>