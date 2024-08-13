<template>
    <v-container>
      <v-row>
          <v-col cols="12" sm="12">
            <v-toolbar flat color="rgba(0,0,0,0)" >
              <v-toobar-title>Dashboard</v-toobar-title>
            </v-toolbar>
            <v-row>
              <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
                <v-card class="mx-auto" align="center" height="140px" color="#26c6da" outlined >

                  <v-icon color="white" size="50">{{ card.icon }}</v-icon>

                  <v-card-title color="#fffff">{{ card.title }}</v-card-title>

                  <v-card-text color="white">
                    {{ card.content }}
                  </v-card-text>

                </v-card>
              </v-col>
           </v-row>
          </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      cards: [
        { title: 'Appointments', content: '11', icon: 'mdi-calendar'},
        { title: 'Therapists', content: '21', icon: 'fas fa-user-md' },
        { title: 'Patients', content: ' 3', icon: 'fas fa-hospital' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>

