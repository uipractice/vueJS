
<script setup>
// import ref from 'vue'
import './AppBreadcrumbs.scss';
import {  RouterView } from 'vue-router'

</script>
<template>
     <div class='app-breadcrumbs'>
       
    <q-breadcrumbs >
      <template v-slot:separator>
        <q-icon
          size="16px"
          name="chevron_right"
          
        />
      </template>

      <q-breadcrumbs-el label="Home"  to="/"  class="paddingTop" />

      <q-breadcrumbs-el label="Vuejs" to="/" class="paddingTop" />
      <q-breadcrumbs-el label="Button" to="/" class="paddingTop" />
     
    </q-breadcrumbs>

    </div>
</template>
<style>
 .paddingTop{
  padding-top: 0px !important;
  font-size: 14px !important;
    color: rgb(0, 136, 209) !important;
    letter-spacing: -0.01px !important;
 }
 a{
  text-decoration: none !important;
 }
</style>