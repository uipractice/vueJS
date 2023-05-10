<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="RadioDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
      <q-radio v-model="shape" val="line" label="Line" />
      <q-radio v-model="shape" val="rectangle" label="Rectangle" />
      <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="line" label="Line" />
      <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="rectangle" label="Rectangle" />
        
      <div class="q-pa-md q-gutter-sm">
          <q-radio disable v-model="shape" val="line" label="Line" />
          <q-radio disable v-model="shape" val="rectangle" label="Rectangle" />
      </div>
      // group
      <div class="q-pa-md q-gutter-sm">
          <h5>checkbox group :select one of them</h5>
          <q-option-group
                :options="options"
                type="radio"
                v-model="group"
                />
      </div>

      <div class="q-pa-md q-gutter-sm">
        <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="color" val="orange" color="orange" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Orange</q-item-label>
              <q-item-label caption>With description </q-item-label>
            </q-item-section>
        </q-item>
      </div>

   import { ref } from 'vue'
   var shape =ref('line')
   var group= ref(null)

   var  options= [
        { label: 'Battery too low', value: 'bat' },
        { label: 'Friend request', value: 'friend', color: 'green' },
        { label: 'Picture uploaded', value: 'upload', color: 'red' }
      ]
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