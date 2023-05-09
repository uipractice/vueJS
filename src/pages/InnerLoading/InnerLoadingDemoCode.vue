<template>
     <div class='demo-wrapper'>
           
      <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" @click="showTextLoading">
      Show it
    </q-btn>

    <q-card class="relative-position card-example" flat bordered>
      <q-card-section class="q-pb-none">
        <div class="text-h6">Lorem Ipsum</div>
      </q-card-section>

      <q-card-section>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div v-show="showSimulatedReturnData">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
          </div>
        </transition>
      </q-card-section>

      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>

      </div>

      <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" @click="showTextLoading2">
      Show it with label
    </q-btn>

    <q-card class="relative-position card-example" flat bordered>
      <q-card-section class="q-pb-none">
        <div class="text-h6">Lorem Ipsum</div>
      </q-card-section>

      <q-card-section>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div v-show="showSimulatedReturnData2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
          </div>
        </transition>
      </q-card-section>

      <q-inner-loading
        :showing="visible2"
        label="Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />
    </q-card>
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" @click="showTextLoading1">
      Show it label props
    </q-btn>

    <q-card class="relative-position card-example" flat bordered>
      <q-card-section class="q-pb-none">
        <div class="text-h6">Lorem Ipsum</div>
      </q-card-section>

      <q-card-section>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <div v-show="showSimulatedReturnData1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel magna eu risus laoreet tristique. Nulla ut fermentum elit, nec consequat augue. Morbi et dolor nec metus tincidunt pellentesque. Nullam non semper ante. Fusce pellentesque sagittis felis quis porta. Aenean condimentum neque sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis dictum interdum eros.
          </div>
        </transition>
      </q-card-section>

      <q-inner-loading
        :showing="visible1"
        label="Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />
    </q-card>
      </div>
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'

    const visible = ref(false)
    const visible1 = ref(false)
    const visible2 = ref(false)

    const showSimulatedReturnData = ref(false)
const showSimulatedReturnData1 = ref(false)
const showSimulatedReturnData2 = ref(false)

   function showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      }
      function showTextLoading1 () {
        visible1.value = true
        showSimulatedReturnData1.value = false

        setTimeout(() => {
          visible1.value = false
          showSimulatedReturnData1.value = true
        }, 3000)
      }
      function showTextLoading2 () {
        visible2.value = true
        showSimulatedReturnData2.value = false

        setTimeout(() => {
          visible2.value = false
          showSimulatedReturnData2.value = true
        }, 3000)
      }
  </script>