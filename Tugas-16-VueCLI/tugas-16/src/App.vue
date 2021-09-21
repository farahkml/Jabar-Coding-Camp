<template>
<v-app>

<v-navigation-drawer app>
    <v-list>
      <v-list-item v-if="!guest">
        <v-list-item-avatar>
            <v-img :src="require('./assets/foto-farah.jpg')"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>Farah Kamila</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <div class="pa-2" v-if="guest">
        <v-btn block color="primary" class="mb-1" >
            <v-icon left>mdi-lock</v-icon>
            Login
        </v-btn>
        <v-btn block color="success">
            <v-icon left>mdi-account</v-icon>
            Register
        </v-btn>
      </div>

<v-divider></v-divider>

    <v-list-item 
      v-for="(item, index) in menus" 
      :key="`menu-${index}`" 
      :to="item.route"
      >
      <v-list-item-icon>
      <v-icon left>{{item.icon}}</v-icon>  
      </v-list-item-icon> 

      <v-list-item-content>
      <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    </v-list>
    <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" dark @click="logout">
          <v-icon left>mdi-lock</v-icon>
            logout
          </v-btn>
        </div>
    </template>
</v-navigation-drawer>

  <v-app-bar app color="success" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>FarahKamila</v-toolbar-title>
      <v-spacer></v-spacer>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->

  <v-main>
  <!-- Provides the application the proper gutter -->
  <v-container fluid>
  <!-- If using vue-router -->
  <router-view></router-view>
  </v-container>
  </v-main>
  <v-footer app>
    @farahkml - VueJS
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer : false ,
    menus : [
      { title : 'Home' , icon : 'mdi-home' , route : '/'},
      { title : 'Blogs' , icon : 'mdi-home' , route : '/blogs'},
    ],
    guest : false 
  }),
};
</script>
