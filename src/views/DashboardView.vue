<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-toolbar flat color="rgba(0,0,0,0)">
            <v-toolbar-title>Dashboard</v-toolbar-title>
          </v-toolbar>
          <v-row>
            <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
              <v-card class="mx-auto" align="center" height="140px" color="#26c6da" outlined>
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

      <v-row class="mt-4"> 
         <v-col>
          <v-col>
          <v-card>
            <v-toolbar color="rgba(0,0,0,0)">
              <v-toolbar-title>Therapist</v-toolbar-title>
            </v-toolbar>

            <v-data-table :items="items">
              <template v-slot:header="{ column }">
                {{ column.title.toUpperCase() }}
              </template>
            </v-data-table>

          </v-card>
        </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      cards: [
        { title: 'Appointments', content: '11', icon: 'mdi-calendar' },
        { title: 'Therapists', content: '21', icon: 'fas fa-user-md' },
        { title: 'Patients', content: ' 3', icon: 'fas fa-hospital' },
      ],

      items: [
        {
          id: 1,
          FirstName: 'Vinjero',
          LastName: 'Soko',
          Role: 'Supervisor',
          Appointment: '9:50 - 11:45',
          
        },
        {
          id: 2,
          FirstName: 'Gomezyani',
          LastName: 'Nyasulu',
          Role: 'Trainee_therapist',
          Appointment: '16:20 - 16:45',
          
        },
        {
          id: 3,
          FirstName: 'Wanidofya',
          LastName: 'msiska',
          Role: 'therapist',
          Appointment: '10:00 - 11:45',
          
        },
      
        
      ],
    
    };
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>

