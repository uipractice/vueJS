<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="CheckboxDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
        <q-checkbox v-model="val" />
        <div class="q-pa-md q-gutter-sm">
        <div>
        <q-checkbox v-model="right" label="Label on Right" />
        </div>

        <div>
          <q-checkbox left-label v-model="left" label="Label on Left" />
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
            left-label
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

        <div class="q-pa-md q-gutter-sm">
          <q-checkbox disable v-model="teal" label="One Disabled" />
          <q-checkbox disable v-model="orange" label="Two Disabled" />
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
      var red= ref(false)
      var cyan= ref(true)
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