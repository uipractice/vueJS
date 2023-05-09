<template>
     <div class='demo-wrapper'>
      <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
                  <q-select v-model="model4" :options="options" label="Standard" />

            <q-select filled v-model="model1" :options="options" label="Filled" />

            <q-select outlined v-model="model9" :options="options" label="Outlined" />

            <q-select standout v-model="model3" :options="options" label="Standout" />
            </div>
            </div>
      
      <div class="q-pa-md q-gutter-sm">
            <q-select rounded outlined bottom-slots v-model="model" :options="options" label="Label" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
        <template v-slot:before>
          <q-icon name="flight_takeoff" />
        </template>

        <template v-slot:append>
          <q-icon v-if="model !== ''" name="close" @click.stop.prevent="model = ''" class="cursor-pointer" />
          <q-icon name="search" @click.stop.prevent />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>
      </div>

      <div class="q-pa-md q-gutter-sm">
            <div class="q-gutter-md row">
      <q-select
        disable
        filled
        v-model="model5"
        :options="options"
        hint="Disable"
        style="width: 250px"
      />

      <q-select
        readonly
        filled
        v-model="model6"
        :options="options"
        hint="Readonly"
        style="width: 250px"
      />

      <q-select
        disable
        readonly
        filled
        v-model="model7"
        :options="options"
        hint="Disable and readonly"
        style="width: 250px"
      />
    </div>
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-select
        filled
        v-model="model8"
        use-input
        input-debounce="0"
        label="Simple filter"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="dialog"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-select
        filled
        v-model="multiple"
        multiple
        :options="options"
        label="Multiple"
        style="width: 250px"
      />
      <q-select
        filled
        v-model="model2"
        multiple
        :options="options"
        counter
        max-values="2"
        hint="Max 2 selections"
        style="width: 250px"
      />
      <q-badge color="secondary" multi-line>
        Model: "{{ model10 }}"
      </q-badge>

      <q-select
        filled
        v-model="model10"
        :options="options"
        stack-label
        label="Standard"
        :display-value="`Company: ${model10 ? model10 : '*none*'}`"
      >
        <template v-slot:append>
          <q-icon
            v-if="model10 !== null"
            class="cursor-pointer"
            name="clear"
            @click.stop.prevent="model10 = null"
          />
        </template>
      </q-select>
      <q-select
          filled
          v-model="model11"
          multiple
          :options="options"
          use-chips
          stack-label
          label="Multiple selection"
        />
      </div>
      <div class="q-pa-md q-gutter-sm">
      <q-select
        filled
        v-model="model12"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="options"
        @filter="filterFn"
        hint="Basic filtering"
        style="width: 250px; padding-bottom: 32px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'
   var model =ref(null)
      var model1 =ref(null)
      var model3 =ref(null)
      var model4 =ref(null)
      var model5 =ref(null)
      var model6 =ref(null)
      var model7=ref(null)
      var model8 =ref(null)
      var model9 =ref(null)
      var model10 =ref(null)
      var model11 =ref(null)
      var model12 =ref(null)
 


      var dense =ref(false)
      var denseOpts = ref(false)
     const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
      const options = ref(stringOptions);
      var multiple =ref(null)
      var model2=ref(null)
      function filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }
        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
  </script>