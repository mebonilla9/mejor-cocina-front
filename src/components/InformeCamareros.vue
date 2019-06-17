<template>
  <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col-md-8">
        <button type="button" class="btn btn-primary" @click="volverHome()">
          Regresar
        </button>
      </div>
      <div class="col-md-8">
        <div class="table-responsive">
          <table id="tblCamareros" class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Mes</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cam in camareros" :key="cam.camarero.idCamarero">
                <td>{{ cam.camarero.idCamarero }}</td>
                <td>{{ cam.camarero.nombre }}</td>
                <td>
                  {{ cam.camarero.primerApellido }}
                  {{ cam.camarero.segundoApellido }}
                </td>
                <td>{{ cam.fecha }}</td>
                <td>{{ cam.total }}</td>
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
  mounted () {
    this.montarInforme()
  },
  data () {
    return {
      camareros: []
    }
  },
  methods: {
    volverHome () {
      this.$router.push('/')
    },
    montarInforme () {
      axios
        .get('http://localhost:8080/cocina/api/camarero/consultar/informe')
        .then(respuesta => {
          this.camareros = respuesta.data.datos
          console.log(respuesta.data.datos)
        })
    }
  }
}
</script>

<style scoped>
#tblCamareros {
  margin-top: 30px;
}
</style>
