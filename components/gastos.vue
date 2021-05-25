<template>
  <div>
    <v-card 
      flat
    >
      <v-card-text class="area-graphic">
        <v-row>
          <v-col cols="12">
            <v-progress-circular  
              :size="getSize()"
              :rotate="360"
              :width="40"
              :value="value"
              color="success"
            >
              {{ value }}%
            </v-progress-circular>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-list>
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
/* .list-resume {
  position: fixed !important;
  bottom: 5% !important;
  width: 100% !important;

} */
.area-graphic {
  justify-content: center;
  text-align: center;
  /* height: 50vh; */
}
.area-graphic .row {
  align-content: center;
  height: 100%;
}
.graphic .progressbar {
  height: 250px;
  width: 250px;
}
</style>