<template>
   <div class='' style="padding-bottom: 50px;">
    <div v-for="(menuItem,index) in menuListLocal" :key="index">
      <h3 class='component-type-desc'>{{ menuItem.label }}</h3>
      <div   style="display: flex;flex-wrap: wrap;">
        <div v-for="(subItem,index) in menuItem.listOfSubCom" :key="index" >
          <RouterLink :to="subItem.path">
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
  /* gap: 50px; */
  row-gap: 20px;
    column-gap: 0px;
  grid-template-columns: repeat(3, 1fr) 
}
</style>