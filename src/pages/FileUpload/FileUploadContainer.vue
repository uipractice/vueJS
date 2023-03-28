<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="FileUploadDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
  //File upload Standard
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
          <q-file color="orange" filled v-model="model" label="Label">
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
    //apending files
    <q-file
      v-model="files"
      label="Pick files"
      filled
      multiple
      append
      style="max-width: 300px"
    />
    //As a chip
    <q-file
      v-model="files"
      label="Pick files"
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
//Filter
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