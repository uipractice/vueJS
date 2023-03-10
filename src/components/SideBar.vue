<template>
    <q-layout view="hHh Lpr lff" container style="height: 300px" class="shadow-2 rounded-borders hcus">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuListLocal" :key="index">
              <q-item  v-ripple>
                
                <q-item-section>
                  <details>
                    <summary>{{ menuItem.label }}</summary>
                    <p v-for="(menuSubItem, index) in menuItem.listOfSubCom" :key="index">
                       <RouterLink :to="menuSubItem.path">{{ menuSubItem.name }}</RouterLink>
                    </p>
                   
                  </details>
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <RouterView />
        </q-page>
      </q-page-container>
    </q-layout>
</template>
<script>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import {menuList} from '../utils/menuList'

console.log("menulist from utils",menuList);

const menuListLocal = menuList.value

export default {
  setup () {
    return {
      drawer: ref(true),
      menuListLocal
    }
  }
}

</script>