<template>
     <div class='demo-wrapper'>
      <div class="q-gutter-md">
      <q-file v-model="model" label="Standard" />

      <q-file filled v-model="model" label="Filled" />

      <q-file outlined v-model="model" label="Outlined" />
      <q-file outlined v-model="model">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-file color="orange" filled v-model="model" label="Clearable">
        <template v-if="model" v-slot:append>
          <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
        </template>
      </q-file>
      <q-file
        disable
        filled
        v-model="model"
        hint="Disable"
        style="width: 250px"
      />

      <q-file
        readonly
        filled
        v-model="model"
        hint="Readonly"
        style="width: 250px"
      />
      <q-file
      v-model="files"
      label="Pick files"
      filled
      multiple
      style="max-width: 300px"
    />
    <q-file
      v-model="file"
      label="Pick files with append"
      filled
      multiple
      append
      style="max-width: 300px"
    />
    <q-file
      v-model="files"
      label="Pick files as Chips"
      outlined
      use-chips
      multiple
      style="max-width: 300px"
    />
    <q-file
        style="max-width: 300px"
        v-model="filesImages"
        filled
        rounded
        label="Restricted to images"
        multiple
        accept=".jpg, image/*"
        @rejected="onRejected"
      />

      <q-file
        style="max-width: 300px"
        v-model="filesMaxSize"
        outlined
        label="Max file size (2k)"
        multiple
        max-file-size="2048"
        @rejected="onRejected"
      />
      <q-file
        style="max-width: 300px"
        v-model="filesMaxNumber"
        standout
        label="Max number of files (3)"
        multiple
        max-files="3"
        @rejected="onRejected"
      />
      </div>

      <div class="q-pa-md q-gutter-sm">
            <q-file
        style="max-width: 300px"
        v-model="filesMaxSize"
        filled
        label="Filtered (for <2k size)"
        multiple
        :filter="checkFileSize"
        @rejected="onRejected"
      />
      </div>
    
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  var model = ref(null)
 var files = ref(null)
 var file = ref(null)
  </script>