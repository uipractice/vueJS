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
 //perent component code
<template>
  <div>
    <div v-if="listOfExpensionItem.length">
      <ExpensionItem :listOfExpensionItem="listOfExpensionItem" :isAddItem="isAddItem" :isRemove="isRemoveItem" @removeItem="onRemoveItemclick" @addItem="onAddItemClick"></ExpensionItem>
    </div>
   
    <div>
      <table>
        <tr>
          <th>options</th>
          <th>values</th>
        </tr>
        <tr>
          <td>Add item</td>
          <td><q-toggle v-model="isAddItem" /></td>
        </tr>
        <tr>
          <td>Remove item</td>
          <td><q-toggle v-model="isRemoveItem"  /></td>
        </tr>
      </table>
    </div>
   
 </div>
</template>


   import { ref } from 'vue'
   import ExpensionItem from './ExpensionItem.vue';

  var isAddItem = ref(false)
  var isRemoveItem = ref(false)
   var listOfExpensionItem = ref([])
  
  listOfExpensionItem.value = [

    {
      "id":1,
      "icon":"perm_identity",
     "label":"Account settings",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    },
    {
      "id":2,
      "icon":"signal_wifi_off",
     "label":"Wifi settings",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    },
    {
      "id":3,
      "icon":"drafts",
     "label":"Drafts",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    },
    {
      "id":4,
      "icon":"assessment",
     "label":"assessment",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    }
   ]
   function onRemoveItemclick(item){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ remove",item)
       
    for (var i = 0; i < listOfExpensionItem.value.length; i++) {
      if (listOfExpensionItem.value[i].id === item.id) {
        listOfExpensionItem.value.splice(i, 1);
        break;
      }
    }
    console.log("after remove",listOfExpensionItem.value);
   }
  
   function onAddItemClick(){
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ add")

    listOfExpensionItem.value.push(
      {
      "id":5,
      "icon":"drafts",
     "label":"extra assessment",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    }
    )

      
   }
  
 //child component code


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