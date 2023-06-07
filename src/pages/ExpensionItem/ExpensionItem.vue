
<template>
  <div class="q-pa-md">
    <div style="margin-bottom: 10px;">
      <q-btn v-if="isAddItem" color="white" text-color="black" label="Add item" @click="addItemClick()">
      </q-btn>
    </div>
    <q-list bordered class="rounded-borders" v-for="item in listOfExpensionItem" :key="item">

      <q-expansion-item expand-separator :icon="item.icon" :label="item.label" :caption="item.caption">
        <q-card>
          <q-card-section>
            {{ item.description }}
            <div>
              <q-btn v-if="isRemove" color="white" text-color="black" label="Remove" @click="removeItem(item)">
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>


    </q-list>
  </div>
</template>
  
  
<script setup>
import { ref } from 'vue'
const props = defineProps({
  listOfExpensionItem: Array,
  isRemove: Boolean,
  isAddItem: Boolean
})

const emit = defineEmits()


function removeItem(item) {
  emit("removeItem", item);
}
function addItemClick() {
  emit("addItem");
}
</script>