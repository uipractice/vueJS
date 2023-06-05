
<template>
  <div class="q-pa-md" >
    <q-list bordered class="rounded-borders" v-for="(item,index) in list" :key="item">
     
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

   var list = ref([])

  list.value = [
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
  </script>