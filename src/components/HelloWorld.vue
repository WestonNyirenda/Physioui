<template>
  <div class="NavBar">
    <v-navigation-drawer color="#008F96" >

      <div class="text-center mt-5">
        <v-avatar class="my-5" size="90" >
          <v-img src="../assets/PhysioLogo.png"></v-img>
        </v-avatar>
        <h1 class="teal--text text-lg-h5 font-weight-bold">PhysioCare</h1>
      </div>
      <v-divider></v-divider>
      <v-list class="mt-15" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashbord" value="Dashbord" to="/dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar" title="Appointments" value="Articles" router to="/appointment"></v-list-item>
        <v-list-item prepend-icon="mdi-comment-multiple" title="Treatment" value="Comments" to="/treatment"></v-list-item>
        <v-list-item prepend-icon="mdi-file-document-outline" title="Reports" value="Comments" to="/reports"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Settings" value="Settings" to="/settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="1" >
      <v-app-bar-nav-icon  ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon color="#008F96">mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="#008F96" size="40">mdi-account-circle</v-icon>
      </v-btn>
      
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>
