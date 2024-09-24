<template>
  <div class="page-container">
    <q-page class="flex justify-center items-start">
      <div class="column q-mb-md">
        <div class="col-12 col-md-4 col-lg-4 q-pa-md">
          <div class="text-h4 q-pa-md ">Login muna Bossing</div>
          <div>Please Login to Continue</div>
          <div class="column">
            <q-input outlined label="Enter username *" v-model="form.email.value" :error="form.email.error"
              :error-message="form.email.msg">
              <template v-slot:prepend>
                <q-icon name="email"></q-icon>
              </template>
            </q-input>
            <q-input class="q-mt-sm" outlined label="Enter password *" v-model="form.password.value"
              :error="form.password.error" :error-message="form.password.msg">
              <template v-slot:prepend>
                <q-icon name="lock "></q-icon>
              </template>
              <template v-slot:append>
                <q-icon name="visibility_off "></q-icon>
              </template>
            </q-input>
          </div>
          <div class="row q-mt-sm">
            <q-btn class="row q-mr-sm" @click="goToSignup" color="grey-3" no-shadow>
              Sign Up
            </q-btn>
            <q-btn glossy color="deep-orange" @click="submitLogin">
              Login
            </q-btn>
          </div>
          <div clas>
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
      form: {
        email: {
          value: '',
          required: true,
          email: true
        },
        password: {
          value: '',
          required: true
        }
      }
    };
  },
  methods: {
    goToSignup() {
      this.$router.push('/signup');  // Programmatic navigation to the signup page
    },
    onsubmit() {
      console.log('Form data:', this.form);
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