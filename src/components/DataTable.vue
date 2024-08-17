<template>
    <div class="home">
      <v-row>
        <v-col>
          <v-container fluid>
            <v-card>
              <v-card-title class="d-flex justify-space-between">
                <span>Articles</span>
  
                <v-dialog width="500">
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" text="Add New Article" color="blue"> </v-btn>
                  </template>
  
                  <template v-slot:default="{ isActive }">
                    <v-card>
                      <v-card-title>
                        <span>Enter Article details</span>
                      </v-card-title>
                      <v-container fluid>
                        <v-form>
                          <v-text-field label="Name" v-model="article.name" required></v-text-field>
                          <v-text-field label="Article Body" v-model="article.body" required></v-text-field>
                        </v-form>
                      </v-container>
  
  
                      <v-card-actions>
                        <v-spacer></v-spacer>
  
                        <v-btn color="orange" text="Close" @click="isActive.value = false"></v-btn>
  
                        <v-btn color="green" text="Save" @click="saveArticle"></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
  
              </v-card-title>
              <v-card-text>
                <v-data-table hover items-per-page="5" v-bind:headers="headers" v-bind:items="articles"
                  v-bind:loading="articles_loading">
                  <template v-slot:[`item.actions`]="{ item }">
  
                    <v-dialog  ref="updateDialog" width="500">
                  <template v-slot:activator="{ props }">
                    <v-icon v-bind="props" color="blue" icon="mdi-pencil" @click="editArticle(item.id)"></v-icon>
                  </template>
  
                  <template v-slot:default="{ }">
                    <v-card>
                      <v-card-title>
                        <span>Edit Article details</span>
                      </v-card-title>
                      <v-container fluid>
                        <v-form>
                          <v-text-field label="Name" v-model="editArticles.title" required></v-text-field>
                          <v-text-field label="Article Body" v-model="editArticles.body" required></v-text-field>
                        </v-form>
                      </v-container>
  
  
                      <v-card-actions>
                        <v-spacer></v-spacer>
  
  
                        <v-btn color="green" text="Save" @click="updateArticle(item.id), closeDialog()"></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
                    
  
  
                    <v-icon color="red" icon="mdi-delete" @click="deleteArticle(item.id)"></v-icon>
                  </template> 
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </template>

<script>
    export default {
        name: "DataTable",

        data: () => ({
            therapists:[{
                id: 1,
                first: 'Mercy',
                last: 'Phiri',
                Patient: 'suzyo mhango',
                date : '09:20 AM - 11:00 am'
            }
                

            ]
        })
        
    };
</script>

<style>

</style>