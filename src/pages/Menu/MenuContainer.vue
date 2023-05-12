<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="MenuDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`  
       
  <div class="q-pa-md">
    <div class="q-gutter-md">

      <q-btn color="primary" label="Basic Menu">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="secondary" label="Auto-Close Menu">
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <div
        class="inline bg-amber rounded-borders cursor-pointer"
        style="max-width: 300px"
      >
        <div class="fit flex flex-center text-center non-selectable q-pa-md">
          I am groot!<br>(Click me! Using touch-position)
        </div>

        <q-menu touch-position>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Branches</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Leaves</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Roots</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>

    </div>

        </div>

//idea with content

        <div class="q-pa-md q-gutter-sm">
          <q-btn color="purple" label="Account Settings">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
        </div>

// with v-modal

        <div class="q-pa-md q-gutter-sm">
          <div class="q-gutter-sm">
      <q-btn color="primary" @click="showing = true" label="Show"/>
      <q-btn color="primary" @click="showing = false" label="Hide"/>
    </div>

    <div
      style="width: 200px; height: 70px;"
      class="bg-purple text-white rounded-borders row flex-center q-mt-md"
    >
      Click me

      <q-menu v-model="showing">
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>New incognito tab</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section>Recent tabs</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>History</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </div>
      </div>
      
      //submenu

      <div>
        <q-btn color="primary" label="Click me">
        <q-menu>
          <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Open...</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Preferences</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>

              <q-menu anchor="top end" self="top start">
                <q-list>
                  <q-item
                    v-for="n in 3"
                    :key="n"
                    dense
                    clickable
                  >
                    <q-item-section>Submenu Label</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                    <q-menu auto-close anchor="top end" self="top start">
                      <q-list>
                        <q-item
                          v-for="n in 3"
                          :key="n"
                          dense
                          clickable
                        >
                          <q-item-section>3rd level Label</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                </q-list>
              </q-menu>

            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Quit</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
        
      //positioning menu

      <div>
        <div class="q-gutter-md row">

<q-btn color="primary" label="Anchor/Self Menu">
  <q-menu
    anchor="top right"
    self="top left"
  >
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup>
        <q-item-section>anchor="top right"</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>self="top left"</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-btn>

<q-btn color="primary" label="Anchor/Self Menu">
  <q-menu
    anchor="center middle"
    self="center middle"
  >
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup>
        <q-item-section>anchor="center middle"</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>self="center middle"</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-btn>

<q-btn color="primary" label="Anchor/Self Menu">
  <q-menu
    anchor="bottom right"
    self="bottom left"
  >
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup>
        <q-item-section>anchor="bottom right"</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>self="bottom left"</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-btn>

<q-btn color="primary" label="Offset Menu">
  <q-menu
    :offset="[0, 20]"
  >
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup>
        <q-item-section>:offset="[0, 20]"</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>:offset="[0, 20]"</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-btn>

<q-btn color="primary" label="Offset Menu">
  <q-menu
    :offset="[50, 10]"
  >
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup>
        <q-item-section>:offset="[50, 10]"</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>:offset="[50, 10]"</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-btn>

<q-btn color="primary" label="Offset Menu">
  <q-menu
    :offset="[-50, 10]"
  >
    <q-list style="min-width: 100px">
      <q-item clickable v-close-popup>
        <q-item-section>:offset="[-50, 10]"</q-item-section>
      </q-item>
      <q-item clickable v-close-popup>
        <q-item-section>:offset="[-50, 10]"</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</q-btn>

</div>
</div>
</div>
</div>

  import { ref } from 'vue'
  var showing = ref(false)

  
  var mobileData = ref(false)
  var bluetooth = ref(false)
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