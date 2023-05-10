<template>
   <div>
     <wrapperOfAllComponents :propsCode="buttonCode" propsDemo="InputDemoCode"></wrapperOfAllComponents>
   </div>
</template>

<script setup>

import wrapperOfAllComponents from '../../components/wrapperOfAllComponents.vue'
import { ref } from 'vue'

  var  buttonCode = ref('')
  buttonCode =`
  //input
  <template>
    // Design Over view
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Standard" />

      <q-input filled v-model="text" label="Filled" />

      <q-input outlined v-model="text" label="Outlined" />

      <q-input standout v-model="text" label="Standout" />

      <q-input standout="bg-teal text-white" v-model="text" label="Custom standout" />

      <q-input borderless v-model="text" label="Borderless" />

      <q-input rounded filled v-model="text" label="Rounded filled" />

      <q-input rounded outlined v-model="text" label="Rounded outlined" />

      <q-input rounded standout v-model="text" label="Rounded standout" />

      <q-input square filled v-model="text" label="Square filled" />

      <q-input square outlined v-model="text" label="Square outlined" />

      <q-input square standout v-model="text" label="Square standout" />
    </div>
  </div>
  
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
          // Stadard
          <q-toggle v-model="dense" label="Dense QInput" />

          <q-input v-model="text" :dense="dense" />

          <q-input v-model="text" label="Label (stacked)" stack-label :dense="dense" />
          //Filled
          <q-toggle v-model="dense" label="Dense QInput" />

          <q-input filled v-model="text" :dense="dense" />

          <q-input filled v-model="text" label="Label (stacked)" stack-label :dense="dense" />
          //Outline
          <q-toggle v-model="dense" label="Dense QInput" />

          <q-input outlined v-model="text" :dense="dense" />

          <q-input outlined v-model="text" label="Label (stacked)" stack-label :dense="dense" />

//Rounded
<q-input rounded outlined v-model="text">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>
      //Square
      <q-input square outlined v-model="text">
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>
   </div>
   </div>
   //input with search and close and icon
   <q-input filled bottom-slots v-model="text" label="Label" counter maxlength="12" :dense="dense">
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
   //Disabled
          <q-input filled v-model="text" hint="Disable" :dense="dense" disable />
   //Readonly
          <q-input filled v-model="text" hint="Readonly" :dense="dense" readonly />
  //Clearable
          <q-input
                  clearable
                  clear-icon="close"
                  filled
                  color="purple-12"
                  v-model="text"
                  label="Label"
          />

  //PAssword with toggle
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
            <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
            </template>
      </q-input>
  //Native time
            <q-input v-model="date" filled type="date" hint="Native date" />
  //number type 
            <q-input
                  v-model.number="model"
                  type="number"
                  filled
                  style="max-width: 200px"
          />
  //textarea
            <q-input
                  v-model="text"
                  filled
                  type="textarea"
            />
  //autogrow
            <q-input
                  v-model="text"
                  filled
                  autogrow
            />
  //Debouncing
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
  //async rules
                <q-input
                        ref="inputRef"
                        filled
                        v-model="model"
                        label="Required Field *"
                        :rules="[ myRule ]"
              />

            <q-btn class="q-mt-sm" label="Reset Validation" @click="reset" color="primary"/>
  //phone number
          <q-input
                  filled
                  v-model="phone"
                  label="Phone"
                  mask="(###) ### - ####"
                  fill-mask
                  hint="Mask: (###) ### - ####"
          />
  //card
          <q-input
                  filled
                  v-model="card"
                  label="Card"
                  mask="#### #### #### ####"
                  fill-mask="#"
                  hint="Mask: #### #### #### ####, FillMask: #"
          />
    </div>
</template>


import { ref } from 'vue'
import { ref } from 'vue'
  var  text = ref('')

  var   dense=  ref(false)

  var password =ref('')
  var   isPwd =ref(true)
     
  var   search= ref('')
  var     date= ref('')

  var     price= ref(0)

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