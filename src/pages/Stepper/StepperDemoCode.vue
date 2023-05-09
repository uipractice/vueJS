<template>
     <div class='demo-wrapper'>
      <div class="q-pa-md q-gutter-sm">
            <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="3"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 3"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="4"
        title="Create an ad"
        icon="add_comment"
        caption="Optional"
        :done="step > 4"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 5 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
      </div>

      <div class="q-pa-md q-gutter-sm">
            <q-stepper
      v-model="step2"
      ref="stepper2"
      animated
      active-color="purple"
    >
      <q-step
        :name="1"
        prefix="1"
        title="Select campaign settings"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        title="Create an ad group"
        caption="Optional"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        title="Create an ad"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper2.next()" color="deep-orange" :label="step2 === 3 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step2 > 1" flat color="deep-orange" @click="$refs.stepper2.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-stepper
      v-model="step3"
      ref="stepper3"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="settings"
        :done="step > 1"
        style="min-height: 200px;"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
        style="min-height: 200px;"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="3"
        title="Ad template"
        icon="assignment"
        style="min-height: 200px;"
      >
        This step won't show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Create an ad"
        icon="add_comment"
        style="min-height: 200px;"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper3.next()" color="primary" :label="step3 === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step3 > 1" flat color="primary" @click="$refs.stepper3.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>

      <template v-slot:message>
        <q-banner v-if="step3 === 1" class="bg-purple-8 text-white q-px-lg">
          Campaign settings are important...
        </q-banner>
        <q-banner v-else-if="step3 === 2" class="bg-orange-8 text-white q-px-lg">
          The ad group helps you to...
        </q-banner>
        <q-banner v-else-if="step3 === 3" class="bg-green-8 text-white q-px-lg">
          The Ad template is disabled - this won't be displayed
        </q-banner>
        <q-banner v-else class="bg-blue-8 text-white q-px-lg">
          The final step is creating the ad...
        </q-banner>
      </template>
    </q-stepper>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
var step = ref(1)
var step2 = ref(1)
var step3 = ref(1)
  </script>