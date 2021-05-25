<template>
  <div>
    <v-row no-gutters>
      <v-tabs
        v-model="tabs"
        fixed-tabs
        class="tab-budget"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab
          href="#mobile-tabs-5-1"
          class="primary--text"
        >
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tabs-slider></v-tabs-slider>
        

        <v-tab
          href="#mobile-tabs-5-2"
          class="primary--text"
        >
          <v-icon>mdi-chart-line</v-icon>
        </v-tab>

        <v-tab
          href="#mobile-tabs-5-3"
          class="primary--text"
        >
          <v-icon>mdi-cash-multiple</v-icon>
        </v-tab>

        <v-tab
          href="#mobile-tabs-5-4"
          class="primary--text"
        >
          <v-icon>mdi-cart-arrow-right</v-icon>
        </v-tab>
      </v-tabs>
    </v-row>
    
        
    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="i in 4"
        :key="i"
        :value="'mobile-tabs-5-' + i"
      >
        <gastos-card
          v-if="i === 1"
        />
        <ingresos-card v-if="i === 3" />
        <v-card
           v-if="i === 2" 
          flat
          min-height="500px"
        >
          <v-card-text style="min-height: 75% !important;" >
            <v-row style="text-align: center;">
              <v-col cols="12">
                <v-progress-circular
                  :rotate="360"
                  :size="200"
                  :width="25"
                  :value="value"
                  color="error"
                >
                  {{ value }}%
                </v-progress-circular>
              </v-col>
            </v-row>            
            
            <v-list
              class="font-list" 
              flat 
            >
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
      </v-tab-item>
    </v-tabs-items>
    <v-fab-transition>
      <v-btn        
        class="v-btn--example"
        color="success"
        absolute
        bottom
        right
        fab
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>

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
}
</script>
<style lang="scss" scoped>
  .tab-budget .v-tab {
    max-width: 25% !important;
    min-width: 25% !important;
    widows: 25% !important;
  }
  .font-list .v-list-item__title {
    font-size: 1.25rem !important;
  }
  
  .font-list .v-list-item__action {
    font-size: 1.25rem !important;
  }
  .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 50px 16px;
  }
</style>