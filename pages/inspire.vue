<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8"> 
      <!-- <div class="text-center">
        <logo />
        <vuetify-logo />
      </div> -->
      <v-card shaped class="letter-global mb-3">
        <v-card-title class="title-card">
          Tu saldo actual
          <v-spacer />
          <v-btn
            icon
            color="primary"

          >
            <v-icon large>mdi-plus</v-icon>
          </v-btn>
        </v-card-title>
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
      <v-card>
        <v-tabs 
          v-model="currentItem"
          centered
          hide-slider
          fixed-tabs          
        >
          <v-tab
            v-for="item in tabs"
            :key="item"
            :href="'#tab-' + item"
            style="text-transform: initial !important;"
          >
            {{ item }}
          </v-tab>
          <!-- <v-tab >Movimientos</v-tab>
          <v-tab style="text-transform: initial !important;">Gastos</v-tab>
          <v-tab style="text-transform: initial !important;">Ingresos</v-tab> -->
        </v-tabs>
        <v-tabs-items v-model="currentItem">
          <v-tab-item value="tab-Movimientos">
            <v-card flat>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="item in expenses"
                    :key="item.title"
                  >
                    <v-list-item-avatar>
                      <v-avatar
                        color="primary"
                        size="56"
                      >
                        <span style="width: 50% !important; color: white !important;">{{ item.date }}</span>
                      </v-avatar>

                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title style="color: blue;" v-text="item.title"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action :style="item.type === 'D' ? 'color: blue;' : 'color: red;'">
                      {{ item.quantity }}
                    </v-list-item-action>
                    
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-Ingresos">
            <v-card flat>
              <v-card-title class="headline">
                An awesome title
              </v-card-title>
              <v-card-text>
                <p>
                  Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
                </p>

                <p>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
                </p>

                <p class="mb-0">
                  Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-Gastos">
            <v-card flat>
              <v-card-title class="headline">
                An even better title
              </v-card-title>
              <v-card-text>
                <p>
                  Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
                </p>

                <p class="mb-0">
                  Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
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

</style>