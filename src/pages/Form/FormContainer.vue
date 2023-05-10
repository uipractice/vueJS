<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="FormDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
<div class='demo-wrapper'>
<div class="q-pa-md" style="max-width: 400px">

  <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      >
  <q-input
      filled
      v-model="name"
      label="Your name *"
      hint="Name and surname"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Please type something']"
  />

  <q-input
      filled
      type="number"
      v-model="age"
      label="Your age *"
      lazy-rules
      :rules="[
        val => val !== null && val !== '' || 'Please type your age',
        val => val > 0 && val < 100 || 'Please type a real age'
      ]"
  />

  <q-toggle v-model="accept" label="I accept the license and terms" />

  <div>
    <q-btn label="Submit" type="submit" color="primary"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
 </div>



import { useQuasar } from 'quasar'
import { ref } from 'vue'

  const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

  

   function   onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      }

   function   onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    
  



        `
</script>
<style>

.componentWrapper{
  margin-top: 10px;
  margin-left: 30px;
}
.step-tabs-wrapper {
    border: 1px solid rgba(0,0,0,.125);
    width: 100% !important;
    margin-bottom: 0px !important;
    margin-left: 0px !important;
    border-radius: 10px;
    min-height: 600px
}

</style>