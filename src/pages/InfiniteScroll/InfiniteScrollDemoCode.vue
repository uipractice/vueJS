<template>
     <div class='demo-wrapper'>
      <button @click="reverseClick()">Reverse</button>
      <div class="q-pa-md q-gutter-sm" style="min-height: 5vh;" v-if="!isReverse">
            <h6>Infinite scroll</h6>
            <div class="q-pa-md" style="height: 20vh;">
            <q-infinite-scroll @load="onLoad" :offset="5">
                  <div v-for="(item, index) in items" :key="index" class="caption">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
                  </div>
                  <template v-slot:loading>
                  <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px" />
                  </div>
                  </template>
            </q-infinite-scroll>
            </div>
      </div>

      <div class="q-pa-md q-gutter-sm" style="min-height: 5vh;" v-else>
            <h6>Reverse Infinite scroll</h6>
            <div class="q-pa-md" style="height: 20vh;">
            <q-infinite-scroll @load="onLoad" reverse>
                  <template v-slot:loading>
                  <div class="row justify-center q-my-md">
                  <q-spinner color="primary" name="dots" size="40px" />
                  </div>
                  </template>

                  <div v-for="(item, index) in items" :key="index" class="caption q-py-sm">
                  <q-badge class="shadow-1">
                  {{ items.length - index }}
                  </q-badge>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                  </div>
          </q-infinite-scroll>
      </div>

      </div>
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'
   const items = ref([ {}, {}, {}, {}, {}, {}, {} ])

   var isReverse = ref(false)

    function onLoad (index, done) {
            setTimeout(() => {
            items.value.push({}, {}, {}, {}, {}, {}, {})
            done()
            }, 2000)
    }
    function reverseClick(){
      console.log("@@@ reverseClick",isReverse);
      isReverse.value = true
      console.log("@@@ reverseClick",isReverse);
    }

  </script>