<template>
     <div class='demo-wrapper'>
          
      
      <div class="q-pa-md q-gutter-sm">
            
         <q-checkbox v-model="val" />
  
      </div>

     
      <div class="q-pa-md q-gutter-sm">
           <h5> {{ selection }}</h5>
      <q-checkbox v-model="selection" val="teal" label="Teal Array" color="teal" />
      <q-checkbox v-model="selection" val="orange" label="Orange Array" color="orange" />
      <q-checkbox v-model="selection" val="red" label="Red Array" color="red" />
      <q-checkbox v-model="selection" val="cyan" label="Cyan Array" color="cyan" />
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-checkbox disable v-model="teal1" label="One Disabled" />
      <q-checkbox disable v-model="orange2" label="Two Disabled" />
      <q-item tag="label" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="color" val="orange" color="orange" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Orange</q-item-label>
          <q-item-label caption>With description</q-item-label>
        </q-item-section>
      </q-item>
      </div>
      <div class="q-pa-md q-gutter-sm">
            <div>
        <q-checkbox v-model="right" label="Label on Right" />
      </div>

      

      <div>
        <q-checkbox
          v-model="right2"
          label="Swipe"
          checked-icon="swipe_left"
          unchecked-icon="swipe_right"
          color="green"
          keep-color
        />
      </div>

      <div>
        <q-checkbox
         
          v-model="left2"
          label="I agree"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
        />
      </div>
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-checkbox v-model="teal" label="Teal" color="teal" />
      <q-checkbox v-model="orange" label="Orange" color="orange" />
      <q-checkbox v-model="red" label="Red" color="red" />
      <q-checkbox v-model="cyan" label="Cyan" color="cyan" />
    
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  var val = ref('')
      var left=ref(true)
      var right= ref(false)
      var left2= ref(true)
      var right2= ref(false)
var selection= ref(['red'])
var color= ref(['cyan'])
     var teal= ref(true)
     var orange= ref(false)
     var teal1= ref(true)
     var orange2= ref(false)
     var red= ref(false)
     var cyan= ref(true)
  </script>