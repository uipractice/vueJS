
<script setup>
// import ref from 'vue'
import './AppBreadcrumbs.scss';
import {  RouterView } from 'vue-router'

</script>
<template>
     <div className='app-breadcrumbs'>
       
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>

      <q-breadcrumbs-el label="Home" to="/"  />
      <q-breadcrumbs-el label="Vuejs" to="/" />
     
    </q-breadcrumbs>

    </div>
</template>