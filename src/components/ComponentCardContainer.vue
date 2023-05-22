<template>
   <div class='' style="padding-bottom: 50px;">
    <div class='app-title' style="marginTop: '-10px'">
        <img src="https://vuejs.org/images/logo.png" class='react-logo' alt='vue logo' />
        <h3 class='react-components-title'>Vuejs Components</h3>
      </div>
      <div class='app-desc'>
        On this page you'll find a collection of components of vuejs used in our projects, which we thought might be 
        helpful and easy your work. To use this components you just need to refer code section for usage of the component. If you are facing any issues or want to provide feedback 
        please contact our team.
      </div><br />
      <div class='app-desc'>
        Versions are implemented as follows:  :Vuejs 3.0.0,  quasar: 2.12.0
      </div>
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



.app-header {
  /* display: flex; */
  flex-direction: column;
  margin-left: 140px;
  margin-top: 30px;
  margin-right: 50px;
}
.react-logo{
    height: 80px;
    width: 80px;
    margin-left: 20px;
}
.react-components-title {
  margin-top: 40px;
  font-size: 28px;
  color: #023047;
  font-size: 28px;
  line-height: 25px;
  margin-bottom: 18px;
  font-weight: 700;
}
.app-title {
  display: flex;
  flex-direction: row;
}\=-.app-desc {
  color: #87878d;
  text-align: left;
  margin-left: 45px;
  font-size: 14px;
}
</style>