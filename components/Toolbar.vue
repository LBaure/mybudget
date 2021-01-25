<template>
  <div>
    <!-- Lista del menu -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Toolbar pagina -->
    <v-app-bar
      fixed
      app
      elevation="0"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- 
      el boton gira en ambos sentido izquierda y derecha, dependiendo de la variable = true/false
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,

    }
  }
}
</script>