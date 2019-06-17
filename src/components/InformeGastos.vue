<template>
  <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col-md-8">
        <button type="button" class="btn btn-primary" @click="volverHome()">Regresar</button>
      </div>
      <div class="col-md-8">
        <div class="table-responsive">
          <table id="tblClientes" class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Gastos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cli in clientes" :key="cli.cliente.idCliente">
                <td>{{ cli.cliente.idCliente }}</td>
                <td>{{ cli.cliente.nombre }}</td>
                <td>
                  {{ cli.cliente.primerApellido }}
                  {{ cli.cliente.segundoApellido }}
                </td>
                <td>{{ cli.gasto }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default {
  mounted() {
    this.montarGastos()
  },
  data() {
    return {
      clientes: []
    }
  },
  methods: {
    volverHome() {
      this.$router.push('/')
    },
    montarGastos() {
      axios
        .get('http://localhost:8080/cocina/api/cliente/consultar/gastos')
        .then(respuesta => {
          this.clientes = respuesta.data.datos
          console.log(respuesta.data.datos)
        })
    }
  }
}
</script>

<style scoped>
#tblClientes {
  margin-top: 30px;
}
</style>
