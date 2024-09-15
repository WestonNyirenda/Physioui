<template>
    <div>
      <v-img class="mx-auto my-6" max-width="228" src="../assets/PhysioLogo.png"></v-img>
  
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="430" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field
            density="compact"
            :readonly="loading"
            :rules="[required]"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            ></v-text-field>
  
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password
    
            <a
                class="text-caption text-decoration-none text-blue"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
            >
                Forgot login password?</a>
            </div>
  
            <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            :readonly="loading"
            :rules="[required]"
            density="compact"
            placeholder="Enter your password"
            
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            ></v-text-field>
    
        
    
            <v-btn
            :loading="loading"
            class="mb-8"
            color="success"
            size="large"
            variant="elevated"
            type="submit"
            block
            
            >
            Log In
            </v-btn>
    </v-form>
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>

<script>
    export default {
    data: () => ({
        visible: false,
        email: null,
        password: null,
        loading: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), this.$router.push({name:  'home'}), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
    
</script>