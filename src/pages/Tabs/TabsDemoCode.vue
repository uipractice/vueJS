<template>
     <div class='demo-wrapper'>
      <div class="q-pa-md q-gutter-sm">
            <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>

      <q-tabs
        v-model="tab"
        inline-label
        class="bg-purple text-white shadow-2"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>

      <q-tabs
        v-model="tab"
        no-caps
        class="bg-orange text-white shadow-2"
      >
        <q-tab name="mails" label="Mails" />
        <q-tab name="alarms" label="Alarms" />
        <q-tab name="movies" label="Movies" />
      </q-tabs>

      </div>

      <div class="q-pa-md q-gutter-sm" style="max-width: 300px">
            <q-tabs
                  v-model="tab"
                  inline-label
                  outside-arrows
                  mobile-arrows
                  class="bg-primary text-white shadow-2"
                  >
                  <q-tab name="mails" icon="mail" label="Mails with mobile screen with arrow" />
                  <q-tab name="alarms" icon="alarm" label="Alarms  with mobile screen with arrow" />
                  <q-tab name="movies" icon="movie" label="Movies" />
                  <q-tab name="photos" icon="photo" label="Photos" />
                  <q-tab name="videos" icon="slow_motion_video" label="Videos" />
                  <q-tab name="addressbook" icon="people" label="Address Book" />
      </q-tabs>

      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <q-btn flat label="Homepage" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink stretch>
        <q-tab name="tab1" label="Tab 1" />
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>
    <q-tabs
        v-model="tab"
        class="bg-primary text-white shadow-2"
      >
        <q-tab name="mails" icon="mail" label="Mails">
          <q-badge color="red" floating>2</q-badge>
        </q-tab>
        <q-tab name="alarms" icon="alarm" label="Alarms">
          <q-badge color="red" floating>10+</q-badge>
        </q-tab>
        <q-tab alert name="movies" icon="movie" label="Movies" />
      </q-tabs>
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'
var tab = ref('mails')
  </script>