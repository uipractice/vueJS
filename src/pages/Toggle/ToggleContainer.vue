<template>
  <div>
    <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="ToggleDemoCode"></wrapperOfAllComponents>
  </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

var buttonCode = ref('')
buttonCode = `
    <div class="q-pa-md q-gutter-sm">
      <q-toggle v-model="value" />
      <q-toggle
        v-model="value"
        color="green"
      />
      <q-toggle
        v-model="value"
        label="On Right"
      />
    </div>

    <div class="q-pa-md q-gutter-sm">
      <div class="q-pa-md q-gutter-sm">
          <q-toggle color="blue" label="Blue" v-model="selection" val="blue" />
          <q-toggle color="yellow" label="Yellow" v-model="selection" val="yellow" />
          <q-toggle color="green" label="Green" v-model="selection" val="green" />
          <q-toggle color="red" label="Red" v-model="selection" val="red" />
          <div>
            Model: {{selection}}
          </div>
          <q-toggle
            v-model="value"
            color="primary"
            disable
            label="Disabled"
          />
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Friend request</q-item-label>
              <q-item-label caption>Allow notification</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="green" v-model="notifications" val="friend" />
            </q-item-section>
          </q-item>
      </div>
    </div>
        

  import { ref } from 'vue'
  var value = ref(true)
  var selection = ref([])
  var notifications = ref(['friend'])
        `
</script>
<style>
.componentWrapper {
  margin-top: 10px;
  margin-left: 30px;
}

.step-tabs-wrapper {
  border: 1px solid rgba(0, 0, 0, .125);
  width: 100% !important;
  margin-bottom: 0px !important;
  margin-left: 0px !important;
  border-radius: 10px;
  min-height: 600px
}
</style>