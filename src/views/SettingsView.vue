<template>
    <v-container>
      <v-card>
        <v-card-title>Settings</v-card-title>
        <v-card-text>
          <!-- Account Settings Section -->
          <v-subheader>Account Settings</v-subheader>
          <v-form>
            <!-- Username Input -->
            <v-text-field
              v-model="settings.username"
              label="Username"
              class="mb-4"
            ></v-text-field>
  
            <!-- Email Input -->
            <v-text-field
              v-model="settings.email"
              label="Email"
              class="mb-4"
            ></v-text-field>
  
            <!-- Change Password Button -->
            <v-btn color="primary" class="mb-4" @click="changePassword">
              Change Password
            </v-btn>
          </v-form>
  
          <!-- Notification Settings Section -->
          <v-subheader>Notification Settings</v-subheader>
          <v-form>
            <!-- Notification Preferences -->
            <v-select
              v-model="settings.notifications"
              :items="notificationOptions"
              label="Notification Preferences"
              class="mb-4"
            ></v-select>
  
            <!-- Enable/Disable Notifications -->
            <v-switch
              v-model="settings.notificationsEnabled"
              label="Enable Notifications"
              class="mb-4"
            ></v-switch>
  
            <!-- Notification Volume Slider -->
            <v-slider
              v-model="settings.volume"
              :max="100"
              label="Notification Volume"
              class="mb-4"
            ></v-slider>
          </v-form>
  
          <!-- Appearance Settings Section -->
          <v-subheader>Appearance Settings</v-subheader>
          <v-form>
            <!-- Dark Mode Toggle -->
            <v-switch
              v-model="settings.darkMode"
              label="Enable Dark Mode"
              class="mb-4"
            ></v-switch>
  
            <!-- Font Size Slider -->
            <v-slider
              v-model="settings.fontSize"
              :min="12"
              :max="24"
              label="Font Size"
              class="mb-4"
            ></v-slider>
          </v-form>
  
          <!-- Logout Section -->
          <v-subheader>Logout</v-subheader>
          <v-btn color="red" class="mb-4" @click="logout">
            Log Out
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        settings: {
          username: 'weston',
          email: 'wordweston@gmail.com',
          notifications: 'All',
          notificationsEnabled: true,
          volume: 75,
          darkMode: false,
          fontSize: 16,
        },
        notificationOptions: ['All', 'Mentions Only', 'None'],
      };
    },
    methods: {
      changePassword() {
        // Handle password change logic here
        alert('Password change initiated.');
      },
      logout() {
        // Handle logout logic here
        alert('Logging out...');
      },
    },
  };
  </script>
  
  <style scoped>
  .mb-4 {
    margin-bottom: 16px;
  }
  </style>
  