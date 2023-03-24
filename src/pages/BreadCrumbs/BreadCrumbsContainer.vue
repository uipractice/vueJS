<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="BreadCrumbsDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
  //Basic
  <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Breadcrumbs" />
  </q-breadcrumbs>

  <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" />
  </q-breadcrumbs>

  <q-breadcrumbs class="text-grey">
    <q-breadcrumbs-el icon="home" />
    <q-breadcrumbs-el icon="widgets" />
    <q-breadcrumbs-el icon="navigation" />
  </q-breadcrumbs>
    
  //custome separator
  <q-breadcrumbs separator="---" class="text-orange" active-color="secondary">
    <q-breadcrumbs-el icon="home" />
    <q-breadcrumbs-el label="Components" icon="widgets" />
    <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
  </q-breadcrumbs>

  <q-breadcrumbs class="text-grey" active-color="purple">
    <template v-slot:separator>
        <q-icon
          size="1.2em"
          name="arrow_forward"
          color="purple"
        />
    </template>

    <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
    </q-breadcrumbs>

    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
     </template>

      <q-breadcrumbs-el label="Home" icon="home" />
      <q-breadcrumbs-el label="Components" icon="widgets" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
  </q-breadcrumbs>

  //router links
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
      <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" />
      <q-breadcrumbs-el label="Build" icon="build" />
    </q-breadcrumbs>
  </div>

  // In Qtoolbar
    <div class="q-pa-md q-gutter-sm">
      <div class="bg-cyan text-white">
      <q-toolbar>
      <q-btn flat round dense icon="assignment_ind" />

      <q-toolbar-title>Quasar</q-toolbar-title>

      <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
      <q-btn flat round dense icon="gamepad" />
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar>
    </div>
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