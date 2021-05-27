<template>
  <div>
    <v-card 
      flat
      style="min-height: 75vh;"
    >
      <v-card-text class="area-graphic">
        <div>
          <v-progress-circular  
            :size="getSize()"
            :rotate="360"
            :width="40"
            :value="value"
            color="success"
          >
            {{ value }}%
          </v-progress-circular>
        </div>
      </v-card-text>
      <v-card-text class="foot-text">
        <v-list class="list-dense">
          <v-subheader>Resumen</v-subheader>
          <template v-for="(item, index) in items">
            <v-list-item :key="index.text">
              <v-list-item-icon>
                <v-icon :color="item.color"  v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-text="item.value"></v-list-item-action>
            </v-list-item>
            
            <v-divider
              v-if="index< items.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
        <v-text-field
          label="Monto"
          value=" "
          autofocus
        >

        </v-text-field>
      </v-card-text>
    </v-card>

  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: null,
      value: 90,
      items: [
        { text: 'Ingresos', icon: 'mdi-cash-multiple', value: 7000, color: 'success' },
        { text: 'Gastos', icon: 'mdi-currency-usd-off', value: 3000, color: 'error' },
        { text: 'Saldo Disponible', icon: 'mdi-flag', value: 4000, color: 'info' },
      ],
    }
  },
  created () {
    this.$api.ejecutar('GEN_SUCURSALES_S_TEST')
    .then((response) => {
      console.log("reponse", response)
    })
    .catch((error) => {
      console.log(error)
    })
    // .finally(() => {
    //   this.$store.commit('ocultarLoading')
    // })
  },
  methods: {
    getSize() {
      console.log(screen.width)
      if (screen.width <= 320) {
        return 150
      } else if (screen.width > 320 && screen.width <= 375) {
        return 225
      } else {
        return 275
      }
      
    }
  }
}
</script>
<style scoped>
.area-graphic {
  display: table;
  min-height: 50vh;
}
.area-graphic div {
  vertical-align: middle;
  display: table-cell;
  text-align: -webkit-center;
}
.list-dense {
  font-size: 1.125rem;
  font-family: Gotham Narrow SSm A,Gotham Narrow SSm B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
  color: #4f6a61;
}
.list-dense .v-list-item__title {
  font-size: 1.125rem;
  font-family: Gotham Narrow SSm A,Gotham Narrow SSm B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif;
  color: #4f6a61;
  font-weight: 500;
}
.list-dense .v-list-item {
  height: 40px;
  min-height: 40px;
  max-height: 40px;
}
.list-dense .v-list-item .v-list-item__icon {
  height: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.foot-text {
  min-height: 25vh;
}
</style>