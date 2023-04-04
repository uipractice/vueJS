<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="InfiniteScrollDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
       
        <div class="q-pa-md q-gutter-sm">
          <q-infinite-scroll @load="onLoad" :offset="250">
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

        <div class="q-pa-md q-gutter-sm">
          <q-btn color="primary" icon="mail" label="On Left" />
          <q-btn color="secondary" icon-right="mail" label="On Right" />
          <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
          <br>
          <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="primary" icon="shopping_cart" />
          <q-btn round color="secondary" icon="navigation" />
          <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
          <q-btn round color="brown-5" icon="directions" />
          <q-btn round color="deep-orange" icon="edit_location" />
          <q-btn round color="purple" glossy icon="local_grocery_store" />
          <q-btn round color="black" icon="my_location" />
        </div>
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