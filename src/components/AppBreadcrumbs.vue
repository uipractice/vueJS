<template>
     <div class='app-breadcrumbs' style="display:flex;justify-content: space-between;">
       
    <q-breadcrumbs>
      <template v-slot:separator>
        <q-icon
          size="16px"
          name="chevron_right"
          
        />
      </template>

      <q-breadcrumbs-el label="Home"  to="/"  class="paddingTop" />

      <q-breadcrumbs-el label="Vuejs" to="/" class="paddingTop" />
      <q-breadcrumbs-el :label="router.currentRoute.value.name" :to="router.currentRoute.value.name" class="paddingTop" />
    </q-breadcrumbs>
    <searchComponent></searchComponent>

    </div>
</template>


<script setup>
// import { ref  } from 'vue'
import './AppBreadcrumbs.scss';
import router from "@/router";
import searchComponent from "./searchComponent.vue";


</script>

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