<template>
  <q-layout>
    <q-page-container>
      <div class="page-container">
        <q-page class="flex justify-center items-start">
          <div class="column q-mb-md">
            <div class="col-12 col-md-4 col-lg-4 q-pa-md">
              <div class="text-h4 q-pa-md">Login muna Bossing</div>
              <div>Please Login to Continue</div>
              <div class="column">
                <q-form @submit="submitLogin">
                  <q-input required="true" outlined label="Enter username *" v-model="form.username.value"
                    :error="form.username.error" :error-message="form.username.msg">
                    <template v-slot:prepend>
                      <q-icon name="email"></q-icon>
                    </template>
                  </q-input>

                  <q-input required="true" :type="passwordFieldType" class="q-mt-sm" outlined label="Enter password *"
                    v-model="form.password.value" :error="form.password.error" :error-message="form.password.msg">
                    <template v-slot:prepend>
                      <q-icon name="lock"></q-icon>
                    </template>
                    <template v-slot:append>
                      <q-icon class="cursor-pointer" :name="isPasswordVisible ? 'visibility' : 'visibility_off'"
                        @click="togglePasswordVisibility" :color="isPasswordVisible ? 'primary' : 'grey'" />
                    </template>
                  </q-input>
                  <div class="row q-mt-sm justify-end">
                    <q-btn class="row q-mr-sm text-black" @click="goToSignup" color="grey-3" no-shadow>
                      Create an account
                    </q-btn>
                    <q-btn glossy color="grey" type="submit">
                      Login
                    </q-btn>
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import { api } from 'boot/axios';

export default {
  setup() {
    const router = useRouter()
    const form = reactive({
      username: { value: '', error: false, msg: '' },
      password: { value: '', error: false, msg: '' }
    })
    const isPasswordVisible = ref(false)
    const passwordFieldType = ref('password')

    const togglePasswordVisibility = () => {
      isPasswordVisible.value = !isPasswordVisible.value
      passwordFieldType.value = isPasswordVisible.value ? 'text' : 'password'
    }

    const goToSignup = () => {
      router.push('/signup');
    }

    const submitLogin = async () => {

      try {
        const response = await api.post('/login', {
          userName: form.username.value,
          password: form.password.value
        })

        const { access_token, refresh_token } = response.data
        localStorage.setItem('accessToken', access_token)
        localStorage.setItem('refreshToken', refresh_token)

        // Redirect to a protected route after successful login
        router.push('/home')
      } catch (error) {
        if (error.response && error.response.data) {
          form.username.error = true
          form.username.msg = error.response.data.message || 'Login failed. Please try again.'
        }
      }
    }

    return {
      form,
      submitLogin,
      togglePasswordVisibility,
      goToSignup,
      passwordFieldType,
      isPasswordVisible
    }
  }
}


</script>

<style>
.page-container {
  background-image: url('src/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.cursor-pointer {

  cursor: pointer;

}
</style>