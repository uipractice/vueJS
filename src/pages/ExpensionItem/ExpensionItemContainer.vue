<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="ExpensionItemDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
  <template>
  <div class="q-pa-md" >
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Account settings"
        caption="John Doe"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="signal_wifi_off"
        label="Wifi settings"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="drafts"
        label="Drafts"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item icon="assessment" label="Disabled" disable>
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

//   import { ref } from 'vue'
 
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