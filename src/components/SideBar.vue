<template>
    <q-layout view="hHh Lpr lff" container  class="shadow-2 rounded-borders">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="500"
        bordered
        class="q-pt-lg"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuListLocal" :key="index">
              <q-item>
                <q-item-section>
                  <section>
                    <details class="details" >
                      <summary class="summary">{{ menuItem.label }}</summary>
                      <details class="details">
                        <summary class="summary summary1">
                          <p v-for="(menuSubItem, index) in menuItem.listOfSubCom" :key="index" style="margin: 0px !important;">
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
  padding: 10px 15px 0px 25px !important;
}
a.router-link-active{
  color: #0088D1 !important;
}
</style>