<template>
  <div class="ma-0 pa-0">
    <v-row>
      <v-tabs
        v-model="tab"      
        centered
        fixed-tabs
        class="tab-budget"
      >
        <v-tab href="#tab-1">
          <v-icon size="32">mdi-home</v-icon>
        </v-tab>
        <v-tab href="#tab-2">
          <v-icon size="32">mdi-chart-line</v-icon>
        </v-tab>
        <v-tab href="#tab-3">
          <v-icon size="32">mdi-cash-multiple</v-icon>
        </v-tab>
        <v-tab href="#tab-4">
          <v-icon size="32">mdi-cart-arrow-right</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <v-card 
            class="pa-2 ma-2" 
            style="border-radius:12px;"
            elevation="1"
          >
            <v-card-title class="title-card primary--text">
              Tu saldo actual
              <v-spacer />
              <v-btn
                icon
                color="primary"
                style="margin-right: -8px; margin-top: -8px;"
              >
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
            </v-card-title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, exercitationem itaque odio sequi impedit doloribus eligendi cupiditate at dolor, sapiente nam eius officiis ratione? Aliquid rerum impedit enim natus dolore!
          </v-card>
          <v-card>
            
            <v-card-text>
              <v-row>
                <v-col cols="6" sm="6" md="6" xs="6">
                  <v-progress-circular
                  :rotate="-90"
                    :size="100"
                    :width="10"
                    :value="value"
                    color="error"
                  >
                    {{ value }}%
                  </v-progress-circular>
                </v-col> 
                <v-col cols="6" sm="6" md="6" xs="6" class="ma-0 pa-0" style="justify-content: right;">
                  <br>
                  <div class="balance">
                    <div>Saldo Mensual</div>
                    <h5>GTQ 7,000</h5>
                  </div>
                  <div class="expenses">
                    <div>Gastos Realizados</div>
                    <h5>GTQ 6,300</h5>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>

          </v-card>          
        </v-tab-item>
        <v-tab-item value="tab-2">
          <v-card flat>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quod modi, voluptatum dolore facere, dolores non quidem eius impedit repellat, architecto nisi perferendis expedita amet eum necessitatibus qui distinctio laudantium!</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-3">
          <v-card flat>
            <v-card-text>holi</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      tab: null,
      value: '10',
      currentItem: 'tab-Movimientos',
      tabs: [
        'Movimientos', 'Ingresos', 'Gastos'
      ],
      expenses: [
        {
          date: '01 Ene',
          title: 'Deposito',
          quantity: 'GTQ 7,000.00',
          type: 'D'
        },
        {
          date: '01 Ene',
          title: 'Gasto Gasolina',
          quantity: 'GTQ 200.00',
          type: 'G'
        },
        {
          date: '01 Ene',
          title: 'Super',
          quantity: 'GTQ 800.00',
          type: 'G'
        },
        {
          date: '01 Ene',
          title: 'Caja Cabro',
          quantity: 'GTQ 100.00',
          type: 'G'
        }
      ],
      previous: [{
        title: 'Travis Howard',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      }],
    }
  }
}
</script>

<style lang="scss" scoped>
  .letter-global {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif !important;
    color: #1976d2 !important;    
    line-height: 12px !important; 
  }
  .letter-global .title-card {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .letter-global .balance {
    font-size: 1.3rem;
    color: #1976d2 !important;
  }
  .letter-global .expenses {
    font-size: 1.1rem;
    color: #ef5350 !important;
    line-height: 18px;
  }
  .title-card {
    font-size: 1.4rem;
    font-weight: 600;    
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif !important;
    // color: #1976d2 !important;    
  }
  .tab-budget .v-tab {
    max-width: 25% !important;
    min-width: 25% !important;
    widows: 25% !important;

  }

</style>