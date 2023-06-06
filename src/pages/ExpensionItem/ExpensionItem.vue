
<template>
    <div class="q-pa-md" >
      <q-list bordered class="rounded-borders" v-for="item in listOfExpensionItem" :key="item">
       
        <q-expansion-item
          expand-separator
          :icon="item.icon"
          :label="item.label"
          :caption="item.caption"
        >
          <q-card>
            <q-card-section>
                  {{ item.description }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
  
      
      </q-list>
    </div>
  </template>
  
  
    <script setup>
     import { ref } from 'vue'
     const props = defineProps({
        listOfExpensionItem: Array
            })
    </script>