<template>
  <q-layout view="hHh lpr fFf">

    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="src/assets/poke.png">
          </q-avatar>
          Pukemon
        </q-toolbar-title>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>

      <q-tabs align="left">
        <!-- <q-route-tab to="/items" label="Item" /> -->
        <!-- <q-route-tab to="/practice" label="practice" /> -->
        <!-- <q-route-tab to="/page3" label="Page Three" /> -->
      </q-tabs>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {

    return {
    
    }
  }
}
</script>