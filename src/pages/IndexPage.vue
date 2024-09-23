<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-4 q-pa-md">
        <div class="text-center">
          <q-img 
          class="logo"
          src="src/assets/Poke_Ball.webp" 
          width="200px"></q-img>
        </div>
        <div class="text-h4 q-pa-md ">Login sa Bossing</div>
        <div>Please Login to Continue</div>
        <div class="column">
          <q-input 
            outlined
            label="Enter username *"
            v-model="form.email.value"
            :error="form.email.error"
            :error-message="form.email.msg">
            <template v-slot:prepend>
              <q-icon name="email"></q-icon>
            </template>
          </q-input>
          <q-input 
            class="q-mt-sm"
            outlined
            label="Enter password *"
            v-model="form.password.value"
            :error="form.password.error"
            :error-message="form.password.msg">
            <template v-slot:prepend>
              <q-icon name="lock "></q-icon>
            </template>
            <template v-slot:append>
              <q-icon name="visibility_off "></q-icon>
            </template>
          </q-input>
        </div>
        <div class="column q-mt-sm">
          <q-btn
            glossy
            color="deep-orange"
            @click="submitLogin">
            Login
          </q-btn>
        </div>
        <div clas>

        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-8 text-center">
        <q-img
        class="login-logo"
        src="src/assets/charizard.png"
        >
        </q-img>
      </div>
    </div>
  </q-page> 
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  email: {
    value: '',
    required: true,
    email: true
  },
  password: {
    value: '',
    required: true,
  }
})

const submitLogin = () =>{

  
}
</script>
<style>
.login-logo {
  width: 80%;

}
</style>