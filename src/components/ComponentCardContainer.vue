<template>
   <div class='components-grid'>
    <div v-for="(menuItem,index) in menuListLocal" :key="index">
      <h3 class='component-type-desc'>{{ menuItem.label }}</h3>
      <div   class='component-grid-container3 ownGrid'>
        <div v-for="(subItem,index) in menuItem.listOfSubCom" :key="index">
          <RouterLink :to="subItem.path" style="textDecoration:none">
          <ComponentCard  :cardObj="subItem" ></ComponentCard>
        </RouterLink> 
        </div>
      </div>
    </div> 
  </div>
</template>
<script setup>
import './ComponentCardContainer.css';
import ComponentCard from './ComponentCard.vue'
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import { menuList } from '../utils/menuList';

var menuListLocal = ref([])
menuListLocal = menuList

console.log("@@@ menulist in card",menuListLocal);
</script>
<style>
.ownGrid{
  display: grid;
  gap: 50px;
  grid-template-columns: 300px 300px 300px;
}
</style>