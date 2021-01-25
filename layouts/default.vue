<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app     
    >
      <template v-slot:prepend>
        <v-img 
          src="images/budget.jpg"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          style="max-height: 64px !important;"
        >
        <v-list-item two-line dark>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Luis Baure</v-list-item-title>
            <v-list-item-subtitle>Ver perfil</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </v-img>
      </template>

      <v-divider></v-divider>
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
    <v-app-bar
      fixed
      app
      elevation="0"      
      color="white"
      height="86"
    >
      <!-- 
        src="/images/budget.jpg"
        height="64"
        <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          style="height: 64px !important;"
        ></v-img>
      </template> -->
      <v-btn
        color="primary"
        icon
        text
        @click.stop="drawer = !drawer" 
      >
        <v-icon v-html="'mdi-sort-variant'" />
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      
      <!-- <div class="px-lg pt-xl mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">Monday 18 junuary 21</div>
      </div> -->
      <v-toolbar-title class="toolbar">
        <div class="title" >{{ title }}</div>
        <div class="subtitle"> {{ saludo }}</div>
      </v-toolbar-title>      
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Mi perfil',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Configuraciones',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Hola, Luis Baure',
      saludo: '¿Que tal tu día?'
    }
  }
}
</script>
<style lang="scss" scoped>
  .toolbar {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif !important;
    color: #1976d2 !important;    
    line-height: 12px !important;  
  }
  .toolbar .title {
    font-size: 1.5rem;
  }
  .toolbar .subtitle {
    font-size: 1rem;
  }
</style>