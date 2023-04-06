<template>
     <div class='demo-wrapper'>
      <div class="q-pa-md q-gutter-sm">
            <q-btn color="purple" @click="showNotif" label="Show Notification" />
      </div>

      <div class="q-pa-md q-gutter-sm">
            <q-btn color="purple" @click="showNotif2" label="Show Notification With icon" />
      </div>
      <div class="q-pa-md q-gutter-sm">
            <q-btn color="purple" @click="showNotif3" label="Show Notifications" />
      </div>
      <div class="q-pa-md">
      <q-btn no-caps color="primary" @click="triggerTwice" label="Trigger twice with custom badge" />
      </div>
      <div class="q-pa-md">
    <q-btn no-caps color="purple" @click="showNotif4" label="Show HTML Notification" />
  </div>

  <div class="q-pa-md q-gutter-y-sm column items-center">
    <div>
      <div class="row q-gutter-sm">
        <q-btn round size="sm" color="secondary" @click="showNotif5('top-left')">
          <q-icon name="arrow_back" class="rotate-45" />
        </q-btn>
        <q-btn round size="sm" color="accent" @click="showNotif5('top')">
          <q-icon name="arrow_upward" />
        </q-btn>
        <q-btn round size="sm" color="secondary" @click="showNotif5('top-right')">
          <q-icon name="arrow_upward" class="rotate-45" />
        </q-btn>
      </div>
    </div>

    <div>
      <div class="row q-gutter-sm">
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif5('left')">
            <q-icon name="arrow_back" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif5('center')">
            <q-icon name="fullscreen_exit" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif5('right')">
            <q-icon name="arrow_forward" />
          </q-btn>
        </div>
      </div>
    </div>

    <div>
      <div class="row q-gutter-sm">
        <div>
          <q-btn round size="sm" color="secondary" @click="showNotif5('bottom-left')">
            <q-icon name="arrow_forward" class="rotate-135" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="accent" @click="showNotif5('bottom')">
            <q-icon name="arrow_downward" />
          </q-btn>
        </div>
        <div>
          <q-btn round size="sm" color="secondary" @click="showNotif5('bottom-right')">
            <q-icon name="arrow_forward" class="rotate-45" />
          </q-btn>
        </div>
      </div>
    </div>
  </div>
    </div>
  </template>

  <script setup>
//   import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

function showNotif () {
        $q.notify({
          message: 'Jim pinged you.',
          color: 'purple'
        })
      }

   function   showNotif2 () {
        $q.notify({
          message: 'Jim pinged you.',
          icon: 'announcement'
        })
      }

  function    showNotif3 () {
        $q.notify({
          message: 'Jim just pinged you.',
          color: 'primary',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          actions: [
            { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
          ]
        })

        $q.notify({
          message: 'Jim just pinged you.',
          color: 'primary',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          actions: [
            { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } },
            { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
          ]
        })
      }

  function    triggerTwice () {
        $q.notify({
          message: 'Jim pinged you.',
          color: 'purple',
          badgeColor: 'yellow',
          badgeTextColor: 'dark',
          badgeClass: 'shadow-3 glossy my-badge-class'
        })

        $q.notify({
          message: 'Jim pinged you.',
          color: 'purple',
          badgeColor: 'yellow',
          badgeTextColor: 'dark',
          badgeClass: 'shadow-3 glossy my-badge-class'
        })
      }
    function  showNotif4 () {
        $q.notify({
          message: '<em>I can</em> <span style="color: red">use</span> <strong>HTML</strong>',
          html: true
        })
      }


      const alerts = [
  { color: 'negative', message: 'Woah! Danger! You are getting good at this!', icon: 'report_problem' },
  { message: 'You need to know about this!', icon: 'warning' },
  { message: 'Wow! Nice job!', icon: 'thumb_up' },
  { color: 'teal', message: 'Quasar is cool! Right?', icon: 'tag_faces' },
  { color: 'purple', message: 'Jim just pinged you', avatar: 'https://cdn.quasar.dev/img/boy-avatar.png' },
  { multiLine: true, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.' }
]

function showNotif5 (position) {
        const { color, textColor, multiLine, icon, message, avatar } = alerts[
          Math.floor(Math.random(alerts.length) * 10) % alerts.length
        ]
        const random = Math.random() * 100

        const twoActions = random > 70
        const buttonColor = color ? 'white' : void 0

        $q.notify({
          color,
          textColor,
          icon: random > 30 ? icon : null,
          message,
          position,
          avatar,
          multiLine,
          actions: twoActions
            ? [
                { label: 'Reply', color: buttonColor, handler: () => { /* console.log('wooow') */ } },
                { label: 'Dismiss', color: 'yellow', handler: () => { /* console.log('wooow') */ } }
              ]
            : (random > 40
                ? [{ label: 'Reply', color: buttonColor, handler: () => { /* console.log('wooow') */ } }]
                : null
              ),
          timeout: Math.random() * 5000 + 3000
        })
      }
  </script>