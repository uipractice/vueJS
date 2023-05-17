<template>
 <div 
   class="ownGridCard"
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave">
      <img :src="logo" alt='react-logo' style="width:50px !important" />
      <div class='component-title'>{{cardObj.name}}</div>
      <div class='component-desc'>{{cardObj.desc}}</div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import './ComponentCard.css';

const props = defineProps({
  cardObj : {
    type: Object,
    required: true
  }
})
const logo = ref(props.cardObj.logoSrc);
    function mouseover(){
      logo.value = props.cardObj.hovLogo
    }
    function mouseleave(){
      logo.value = props.cardObj.logoSrc
    }
</script>
<style>

.ownGridCard{
  height: 250px;
  width: 100%;
  width: 270px;
  border: 0.5px solid rgb(236, 236, 236);
  margin: 20px 15px;
  transition: box-shadow 0.3s cubic-bezier(.4,0,.2,1);
  padding: 16px;
  border-radius: 4px;
	background: #fff;
  color: rgba(0,0,0,.87);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);




}
</style>