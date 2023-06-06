
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


  <script setup>
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
  </script>