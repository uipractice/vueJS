<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SideBar from './components/SideBar.vue';
import AppBreadcrumbs from './components/AppBreadcrumbs.vue';
 import './App.css';

</script>

<template>
  
  <Header></Header>
  <AppBreadcrumbs></AppBreadcrumbs>
  <div class="side-bar">
      <SideBar></SideBar>
   </div>
 <Footer></Footer>
</template>
