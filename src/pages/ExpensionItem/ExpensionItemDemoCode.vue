
<template>
  <div>
    <div v-if="listOfExpensionItem.length">
      <ExpensionItem :listOfExpensionItem="listOfExpensionItem"></ExpensionItem>
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
          <td><q-toggle v-model="isRemoveItem"  @click="isRemoveItemClick()"/></td>
        </tr>
      </table>
    </div>
   
 </div>
</template>


  <script setup>
   import { ref } from 'vue'
   import ExpensionItem from './ExpensionItem.vue';

  var isAddItem = ref(false)
  var isRemoveItem = ref(false)
   var listOfExpensionItem = ref([])
  
  listOfExpensionItem.value = [
    {"icon":"perm_identity",
     "label":"Account settings",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    },
    {"icon":"signal_wifi_off",
     "label":"Wifi settings",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    },
    {"icon":"drafts",
     "label":"Drafts",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    },
    {"icon":"assessment",
     "label":"assessment",
     "caption":"John Doe",
     "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupticommodi magni quaerat ex numquam dolorum officiis modi facere maiores architecto suscipit ist eveniet doloribus ullam aliquid",
         
    }
   ]

   function isRemoveItemClick(){
    console.log("isRemoveItemClick",isRemoveItem.value);
   }
  </script>