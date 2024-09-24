<template>
  <div class="bg">
    <q-page class="flex flex-center">
      <q-form @submit="onSubmit" class="column q-gutter-md text-white" ref="signupForm">

        <q-input v-model="form.userName" required="true" label="Username" filled />
        <q-input v-model="form.firstName" required="true" label="First Name" filled />
        <q-input v-model="form.middleName" required="true" label="Middle Name" filled />
        <q-input v-model="form.lastName" required="true" label="Last Name" filled />
        <q-input v-model="form.email" required="true" label="Email" type="email" filled />
        <q-input v-model="form.password" required="true" label="Password" type="password" filled />

        <q-btn label="Sign Up" type="submit" color="primary" />

        <!-- Show error message if any -->
        <q-banner v-if="errorMessage" type="negative" class="q-mt-md">
          {{ errorMessage }}
        </q-banner>

      </q-form>
    </q-page>
  </div>

</template>

<script>
import { api } from 'boot/axios'

export default {
  data() {
    return {
      form: {
        userName: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    async onSubmit() {
      try {
        // POST request to your backend API
        const response = await api.post('/signup', this.form);
        // Handle success (e.g., navigate to login or dashboard)
        console.log('Signup successful:', response.data);
      } catch (error) {
        // Handle error
        this.errorMessage = error.response?.data?.message || 'An error occurred during signup';
      }
    }
  }
};
</script>
<style>
.bg {
  background-image: url('src/assets/su.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
