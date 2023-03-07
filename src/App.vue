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
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      

      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>
