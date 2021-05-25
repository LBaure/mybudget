<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-simple-table class="simple-table-app">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center" width="65%">
                  Ingresos
                </th>
                <th class="text-center" width="35%">
                  Monto
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>
                  <v-layout>
                    Q
                    <v-spacer />
                    {{ item.calories }}
                  </v-layout>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="trow">
                <td>Total:</td>
                <td>
                  <v-layout>
                    Q
                    <v-spacer />
                    9200
                  </v-layout>
                </td>
              </tr>
            </tfoot>
          </template>
        </v-simple-table>
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
      desserts: [
          {
            name: 'Salario Base',
            calories: 7000,
          },
          {
            name: 'Renta Luis',
            calories: 1100,
          },
          {
            name: 'Renta Luisa',
            calories: 1100,
          }          
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
.simple-table-app td, th {
  font-size: 1rem !important;
  font-weight: 500;
}
.trow td {
  font-weight: 700;
  font-size: 1.125rem !important;
  border-top: 1px solid black !important;
  margin-left: 24px !important;
}
</style>