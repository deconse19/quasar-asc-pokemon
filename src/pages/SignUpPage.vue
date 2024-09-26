<template>
  <q-layout>
    <q-page-container>
      <div class="bg">
        <q-page class="flex flex-center">
          <q-card flat bordered class="signUp q-pa-md" elevated elevation="10" v-bind:style="{ opacity: 0.7 }">
            <q-card-section>
              <div class="text-black text-h2">SignUp</div>
            </q-card-section>
            <q-card-section>
              <q-form @submit="onSubmit" class="column q-gutter-sm text-white" ref="signupForm">
                <q-input v-model="form.userName" required="true" label="Username" filled />
                <q-input v-model="form.firstName" required="true" label="First Name" filled />
                <q-input v-model="form.middleName" required="true" label="Middle Name" filled />
                <q-input v-model="form.lastName" required="true" label="Last Name" filled />
                <q-input v-model="form.email" required="true" label="Email" type="email" filled />
                <q-input v-model="form.password" required="true" label="Password" type="password" filled />

                <q-btn label="Sign Up" type="submit" color="primary" />

                <q-banner v-if="errorMessage" type="negative" class="q-mt-md">
                  {{ errorMessage }}
                </q-banner>
              </q-form>
            </q-card-section>
          </q-card>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { api } from 'boot/axios'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {

    const router = useRouter();
    const form = ref({
      userName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',

    })
    const errorMessage = ref(false);

    const onSubmit = async () => {
      try {
        // POST request to your backend API
        const response = await api.post('/signup', form.value);
        // Handle success (e.g., navigate to login or dashboard)
        router.push('/');
        console.log('Signup successful:', response.data);
      } catch (error) {
        // Handle error
        errorMessage.value = error.response?.data?.message || 'An error occurred during signup';
      }
    }
    return {
      form,
      onSubmit,
      errorMessage
    }
  },
}
</script>
<style>
.bg {
  background-image: url('src/assets/su.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.signUp {

  width: 350px
}
</style>
