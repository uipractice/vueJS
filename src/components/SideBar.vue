<template>
    <q-layout view="hHh Lpr lff" container style="height: 500px" class="shadow-2 rounded-borders">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="230"
        :breakpoint="500"
        bordered
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuListLocal" :key="index">
              <q-item  v-ripple>
                
                <q-item-section>
                  <section>
                    <details class="details" >
                      <summary class="summary">{{ menuItem.label }}</summary>
                      <details class="details">
                       
                        <summary class="summary summary1">
                          <p v-for="(menuSubItem, index) in menuItem.listOfSubCom" :key="index">
                            <RouterLink :to="menuSubItem.path">{{ menuSubItem.name }}</RouterLink>
                          </p>
                         
                        </summary>
                      </details>
                    </details>

                  </section>
                </q-item-section>
              </q-item>
              <!-- <q-separator :key="'sep' + index"  v-if="menuItem.separator" /> -->
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
import '../css/styles.css';
import './SideBar.css';

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
<style>

.side-bar {
  width: 100% !important;
  overflow: hidden !important;
}
.sideBar {
  width: 100%;
}
section > .details > .summary {
  padding: 10px 15px 10px 25px !important;
}
</style>