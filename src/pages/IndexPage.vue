<template>
  <div class="page-container">
    <q-page class="flex justify-center items-start">
      <div class="column q-mb-md">
        <div class="col-12 col-md-4 col-lg-4 q-pa-md">
          <div class="text-h4 q-pa-md">Login muna Bossing</div>
          <div>Please Login to Continue</div>
          <div class="column">
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
                <q-icon :name="isPasswordVisible ? 'visibility' : 'visibility_off'" 
                        @click="togglePasswordVisibility"
                        :color="isPasswordVisible ? 'primary' : 'grey'" />
              </template>
            </q-input>
          </div>
          <div class="row q-mt-sm justify-center">
            <q-btn class="row q-mr-sm text-black" @click="goToSignup" color="grey-3" no-shadow>
              Sign Up
            </q-btn>
            <q-btn glossy color="grey" @click="submitLogin">
              Login
            </q-btn>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isPasswordVisible: false,
      form: {
        username: {
          value: '',
          error: false,
          msg: ''
        },
        password: {
          value: '',
          error: false,
          msg: ''
        }
      }
    }
  },
  computed: {
    passwordFieldType() {
      return this.isPasswordVisible ? 'text' : 'password';
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    goToSignup() {
      this.$router.push('/signup');
    },
    submitLogin() {
      console.log('Form data:', this.form);
      // Add your login logic here
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
</style>