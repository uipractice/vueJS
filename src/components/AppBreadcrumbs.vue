<template>
     <div class='app-breadcrumbs' style="display:flex;justify-content: space-between;">
       
    <q-breadcrumbs>
      <template v-slot:separator>
        <q-icon
          size="16px"
          name="chevron_right"
          
        />
      </template>

      <q-breadcrumbs-el label="Home"  to="/"  class="paddingTop"  />

      <q-breadcrumbs-el label="Vuejs" to="/" class="paddingTop" />
      <q-breadcrumbs-el v-if="router.currentRoute.value.name != 'home'" :label="router.currentRoute.value.name" :to="router.currentRoute.value.name" class="paddingTop" />
      <q-breadcrumbs-el v-else :label="router.currentRoute.value.name" :to="'/'" class="paddingTop" />
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
  color: #0088d1!important;
    letter-spacing: -0.01px !important;

    line-height: 27px;
    text-transform: capitalize;
    font-weight: 400;
 }
 a{
  text-decoration: none !important;
 }
 /* .q-breadcrumbs__separator{
  margin-left:0px !important
 } */
/* 
 .q-gutter-sm  >*{
    margin-left: 0px !important;
} */
.app-breadcrumbs .q-gutter-sm > *{
  margin-left: 0px !important;
}
</style>