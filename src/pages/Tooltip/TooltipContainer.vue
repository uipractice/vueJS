<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="TooltipDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
        <q-btn label="Hover me" color="primary">
        <q-tooltip>
          Some text as content of Tooltip
        </q-tooltip>
      </q-btn>

      <div
        class="inline bg-amber rounded-borders cursor-pointer"
        style="max-width: 300px"
      >
        <div class="fit flex flex-center text-center non-selectable q-pa-md">
          I am groot!<br>(Hover me!)
        </div>

        <q-tooltip>
          I am groot!
        </q-tooltip>
      </div>
        
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="primary" label="Flip">
        <q-tooltip
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          Here I am!
        </q-tooltip>
      </q-btn>

      <q-btn color="primary" label="Scale Menu">
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          Here I am!
        </q-tooltip>
      </q-btn>

      <q-btn color="primary" label="Rotate">
        <q-tooltip
          transition-show="rotate"
          transition-hide="rotate"
        >
          Here I am!
        </q-tooltip>
      </q-btn>

        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-btn color="primary" icon="mail" label="On Left" />
          <q-btn color="secondary" icon-right="mail" label="On Right" />
          <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right" />
          <br>
          <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-btn color="indigo">
        Hover
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>top</em>
          (<q-icon name="keyboard_arrow_up"/>)
        </q-tooltip>
      </q-btn>

      <q-btn color="red">
        Over
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>right</em>
          (<q-icon name="keyboard_arrow_right"/>)
        </q-tooltip>
      </q-btn>

      <q-btn color="purple">
        These
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>left</em>
          (<q-icon name="keyboard_arrow_left"/>)
        </q-tooltip>
      </q-btn>

      <q-btn color="amber">
        Buttons
        <q-tooltip anchor="bottom middle" self="top middle" :offset="[10, 10]">
          <strong>Tooltip</strong> on <em>bottom</em>
          (<q-icon name="keyboard_arrow_down"/>)
        </q-tooltip>
      </q-btn>
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