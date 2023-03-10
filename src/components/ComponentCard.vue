<template>
 <div 
      class='component-card' 
      v-on:mouseover="mouseover"
      v-on:mouseleave="mouseleave">
      <img :src="logo" class='compo-logo' alt='react-logo'/>
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