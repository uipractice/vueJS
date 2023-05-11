<template>
     <div class='demo-wrapper'>
      <div class="q-pa-md q-gutter-sm" style="max-width: 300px">
      <q-input v-model="text" label="Standard" />

      <q-input filled v-model="text1" label="Filled" />

      <q-input outlined v-model="text2" label="Outlined" />

      <q-input standout v-model="text3" label="Standout" />

      <q-input standout="bg-teal text-white" v-model="text4" label="Custom standout" />

      <q-input borderless v-model="text5" label="Borderless" />

      <q-input rounded filled v-model="text6" label="Rounded filled" />

      <q-input rounded outlined v-model="text7" label="Rounded outlined" />

      <q-input rounded standout v-model="text8" label="Rounded standout" />

      <q-input square filled v-model="text9" label="Square filled" />

      <q-input square outlined v-model="text10" label="Square outlined" />

      <q-input square standout v-model="text11" label="Square standout" />
    </div>
      
      <div class="q-pa-md q-gutter-sm">
         <q-toggle v-model="dense1" label="Dense QInput" />
         <q-input v-model="text12" :dense="dense1" />
         <q-input v-model="text13" label="Label (stacked)" stack-label :dense="dense1" />

         <q-toggle v-model="dense2" label="Dense QInput" />
            <q-input filled v-model="text14" :dense="dense2" />
            <q-input filled v-model="text15" label="Label (stacked)" stack-label :dense="dense2" />

            <q-toggle v-model="dense3" label="Dense QInput" />
            <q-input outlined v-model="text16" :dense="dense3" />
            <q-input outlined v-model="text17" label="Label (stacked)" stack-label :dense="dense3" />
            <q-input rounded outlined v-model="text18">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>
      <q-input square outlined v-model="text19">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>
      </div>

      <div class="q-pa-md q-gutter-sm">
            <q-input filled bottom-slots v-model="text20" label="Label" counter maxlength="12" :dense="dense">
        <template v-slot:before>
          <q-icon name="flight_takeoff" />
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>
      <q-input filled v-model="text21" hint="Disable" :dense="dense" disable />
      <q-input
        clearable
        clear-icon="close"
        filled
        color="purple-12"
        v-model="text22"
        label="Clearable"
      />

<q-input filled v-model="text23" hint="Readonly" :dense="dense" readonly />
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input v-model="date" filled type="date" hint="Native date" />
      <q-input
      v-model.number="model"
      type="number"
      filled
      style="max-width: 200px"
    />
    <q-input
      v-model="text24"
      filled
      type="textarea"
    />
    <q-input
      v-model="text25"
      filled
      autogrow
      placeholder="autogrow"
      style="max-width: 200px"
    />
    <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
        hint="Debouncing 500ms"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-input
      ref="inputRef"
      filled
      v-model="model"
      label="Required Field *"
      :rules="[ myRule ]"
    />

    <q-btn class="q-mt-sm" label="Reset Validation" @click="reset" color="primary"/>
      <q-input
        filled
        v-model="phone"
        label="Phone"
        mask="(###) ### - ####"
        fill-mask
        hint="Mask: (###) ### - ####"
      />

      <q-input
        filled
        v-model="card"
        label="Card"
        mask="#### #### #### ####"
        fill-mask="#"
        hint="Mask: #### #### #### ####, FillMask: #"
      />
      <q-field
  filled
  v-model="price"
  label="Price with v-money directive"
  hint="Mask: $ #,###.00 #"
>
  <template v-slot:control="{ id, floatingLabel, modelValue, emitValue }">
    <input :id="id" class="q-field__input text-right" :value="modelValue" @change="e => emitValue(e.target.value)"  v-show="floatingLabel">
  </template>
</q-field>
      </div>
    </div>
  </template>

  <script setup>
   import { ref } from 'vue'
   var  text = ref('')

   var  text1 = ref('')
   var  text2 = ref('')
   var  text3 = ref('')
   var  text4 = ref('')
   var  text5 = ref('')
   var  text6 = ref('')
   var  text7= ref('')
   var  text8 = ref('')
   var  text9 = ref('')
   var  text10 = ref('')
   var  text11 = ref('')
   var  text12 = ref('')
   var  text13 = ref('')
   var  text14 = ref('')
   var  text15 = ref('')
   var  text16 = ref('')
   var  text17 = ref('')
   var  text18 = ref('')
   var  text19 = ref('')
   var  text20 = ref('')
   var  text21 = ref('')
   var  text22 = ref('')
   var  text23 = ref('')
   var  text24 = ref('')
   var  text25 = ref('')

   var   dense=  ref(false)
   var   dense1=  ref(false)
   var   dense2=  ref(false)
   var   dense3=  ref(false)

       var password =ref('')
       var   isPwd =ref(true)
     
       var   search= ref('')
       var     date= ref('')

       var     price= ref(0)
      var phone = ref('')
      var card = ref('')
      
       const inputRef = ref(null)
       var model = ref('')

    function   myRule (val) {
        // simulating a delay

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // call
            //  resolve(true)
            //     --> content is valid
            //  resolve(false)
            //     --> content is NOT valid, no error message
            //  resolve(error_message)
            //     --> content is NOT valid, we have error message
            resolve(!!val || '* Required')

            // calling reject(...) will also mark the input
            // as having an error, but there will not be any
            // error message displayed below the input
            // (only in browser console)
          }, 1000)
        })
      }

    function  reset () {
        inputRef.value.resetValidation()
      }
  </script>