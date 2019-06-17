<template>
  <div class="container-fluid">
    <form @submit.prevent="registrarFactura">
      <div class="row justify-content-md-center">
        <div class="col-md-3">
          <h3>Registrar Factura</h3>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-4 bordeado">
          <!--

          Seccion del cliente

          -->
          <div class="row justify-content-md-center">
            <div class="col-md-9">
              <h4>Informacion de Cliente</h4>
            </div>
          </div>
          <div class="form-group">
            <label for="cboClienteRegistrado">Cliente registrado</label>
            <select
              class="form-control"
              id="cboClienteRegistrado"
              aria-describedby="ayudaClienteReg"
              v-model="factura.idCliente.idCliente"
            >
              <option :value="0">Seleccione...</option>
              <option
                v-for="cli in clientes"
                :key="cli.idCliente"
                :value="cli.idCliente"
              >
                {{ cli.nombre }} {{ cli.primerApellido }}
                {{ cli.segundoApellido }}
              </option>
            </select>
            <small id="ayudaClienteReg" class="form-text text-muted"
              >Seleccione un cliente registrado en la aplicación.</small
            >
          </div>
          <div id="datosCliente" v-if="factura.idCliente.idCliente <= 0">
            <div class="form-group">
              <label for="txtNombreCliente">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="txtNombreCliente"
                aria-describedby="ayudaNombreCli"
                placeholder="Ingrese un nombre"
                required
                v-model="factura.idCliente.nombre"
              />
              <small id="ayudaNombreCli" class="form-text text-muted"
                >Primer y segundo nombre del cliente.</small
              >
            </div>
            <div class="form-group">
              <label for="txtPrimerApellidoCliente">Primer Apellido</label>
              <input
                type="text"
                class="form-control"
                id="txtPrimerApellidoCliente"
                aria-describedby="ayudaPrimerApellidoCli"
                placeholder="Ingrese un primer apellido"
                required
                v-model="factura.idCliente.primerApellido"
              />
              <small id="ayudaPrimerApellidoCli" class="form-text text-muted"
                >Primer apellido del cliente.</small
              >
            </div>
            <div class="form-group">
              <label for="txtSegundoApellidoCliente">Segundo Apellido</label>
              <input
                type="text"
                class="form-control"
                id="txtSegundoApellidoCliente"
                aria-describedby="ayudaSegundoApellidoCli"
                placeholder="Ingrese un segundo apellido"
                required
                v-model="factura.idCliente.segundoApellido"
              />
              <small id="ayudaSegundoApellidoCli" class="form-text text-muted"
                >Segundo apellido del cliente.</small
              >
            </div>
            <div class="form-group">
              <label for="txtObservacionesCliente">Observaciones</label>
              <input
                type="text"
                class="form-control"
                id="txtObservacionesCliente"
                aria-describedby="ayudaObservacionesCli"
                placeholder="Observacion, Observacion, Observacion"
                required
                v-model="factura.idCliente.observaciones"
              />
              <small id="ayudaObservacionesCli" class="form-text text-muted"
                >Observaciones del usuario, "Agregarlas separadas por
                ','"</small
              >
            </div>
          </div>
        </div>
        <!--

          Seccion del camarero

        -->
        <div class="col-md-4">
          <div class="row justify-content-md-center">
            <div class="col-md-10">
              <h4>Informacion de Camarero</h4>
            </div>
          </div>
          <div class="form-group">
            <label for="cboCamareroRegistrado">Camarero registrado</label>
            <select
              class="form-control"
              id="cboCamareroRegistrado"
              aria-describedby="ayudaCamareroReg"
              v-model="factura.idCamarero.idCamarero"
            >
              <option :value="0">Seleccione...</option>
              <option
                v-for="cam in camareros"
                :key="cam.idCamarero"
                :value="cam.idCamarero"
              >
                {{ cam.nombre }} {{ cam.primerApellido }}
                {{ cam.segundoApellido }}
              </option>
            </select>
            <small id="ayudaCamareroReg" class="form-text text-muted"
              >Seleccione un camarero registrado en la aplicación.</small
            >
          </div>
          <div id="datosCamarero" v-if="factura.idCamarero.idCamarero <= 0">
            <div class="form-group">
              <label for="txtNombreCamarero">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="txtNombreCamarero"
                aria-describedby="ayudaNombreCam"
                placeholder="Ingrese un nombre"
                required
                v-model="factura.idCamarero.nombre"
              />
              <small id="ayudaNombreCam" class="form-text text-muted"
                >Primer y segundo nombre del camarero.</small
              >
            </div>
            <div class="form-group">
              <label for="txtPrimerApellidoCamarero">Primer Apellido</label>
              <input
                type="text"
                class="form-control"
                id="txtPrimerApellidoCamarero"
                aria-describedby="ayudaPrimerApellidoCam"
                placeholder="Ingrese un primer apellido"
                required
                v-model="factura.idCamarero.primerApellido"
              />
              <small id="ayudaPrimerApellidoCam" class="form-text text-muted"
                >Primer apellido del camarero.</small
              >
            </div>
            <div class="form-group">
              <label for="txtSegundoApellidoCamarero">Segundo Apellido</label>
              <input
                type="text"
                class="form-control"
                id="txtSegundoApellidoCamarero"
                aria-describedby="ayudaSegundoApellidoCam"
                placeholder="Ingrese un segundo apellido"
                required
                v-model="factura.idCamarero.segundoApellido"
              />
              <small id="ayudaSegundoApellidoCam" class="form-text text-muted"
                >Segundo nombre del camarero.</small
              >
            </div>
          </div>
        </div>
      </div>
      <!--

        Informacion de las mesas y ordenes

      -->
      <div class="row justify-content-md-center">
        <div class="col-md-4 bordeado">
          <!--

            Seccion de mesas

          -->
          <div class="row justify-content-md-center">
            <div class="col-md-9">
              <h4>Orden del cliente</h4>
            </div>
            <div class="form-group separador">
              <label for="txtPlato">Plato</label>
              <input
                type="text"
                class="form-control"
                id="txtPlato"
                aria-describedby="ayudaPlato"
                placeholder="Nombre plato"
                v-model="plato"
              />
              <small id="ayudaPlato" class="form-text text-muted"
                >Plato ordenado.</small
              >
            </div>
            <div class="form-group separador">
              <label for="txtImporte">Costo</label>
              <input
                type="number"
                class="form-control"
                id="txtImporte"
                aria-describedby="ayudaImporte"
                placeholder="$_______"
                v-model="importe"
              />
              <small id="ayudaImporte" class="form-text text-muted"
                >Valor del plato.</small
              >
            </div>
            <div class="form-group separador">
              <button
                type="button"
                class="btn btn-primary"
                @click="cargarPlato"
              >
                Cargar Plato
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4 bordeado">
          <!--

            Informacion de las ordenes

          -->
          <div class="row justify-content-md-center">
            <div class="col-md-9">
              <h4>Mesa del cliente</h4>
            </div>
            <div class="form-group">
              <label for="cboClienteRegistrado">Mesa</label>
              <select
                class="form-control"
                id="cboClienteRegistrado"
                aria-describedby="ayudaClienteReg"
                v-model="factura.idMesa.idMesa"
              >
                <option :value="0">Seleccione...</option>
                <option
                  v-for="mes in mesas"
                  :key="mes.idMesa"
                  :value="mes.idMesa"
                  >{{ mes.ubicacion }}</option
                >
              </select>
              <small id="ayudaClienteReg" class="form-text text-muted"
                >Seleccione un cliente registrado en la aplicación.</small
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="table-responsive">
            <table id="tblClientes" class="table table-hover">
              <thead>
                <th>Plato</th>
                <th>Costo</th>
              </thead>
              <tbody v-for="detalle in detalles" :key="detalle.plato">
                <td>{{ detalle.plato }}</td>
                <td>{{ detalle.importe }}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div v-if="registrado === 1" class="alert alert-success" role="alert">
          Se ha registrado una nueva factura
        </div>
        <div
          v-else-if="registrado === 0"
          class="alert alert-warning"
          role="alert"
        >
          Debe ingresar por lo menos un plato
        </div>
        <div
          v-else-if="registrado === -1"
          class="alert alert-danger"
          role="alert"
        >
          Error al registrar la factura
        </div>
      </div>
      <div class="separador-extendido">
        <div class="row justify-content-md-center">
          <div class="col-md-6">
            <button type="submit" class="btn btn-success">
              Guardar factura
            </button>
            <button type="button" @click="volverHome()" class="btn btn-danger">
              Regresar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      factura: {
        idCliente: {
          idCliente: 0
        },
        idCamarero: {
          idCamarero: 0
        },
        idMesa: {
          idMesa: 0
        }
      },
      clientes: [],
      camareros: [],
      mesas: [],
      detalles: [],
      plato: '',
      importe: 0,
      registrado: -2
    }
  },
  mounted () {
    this.cargarClientes()
    this.cargarCamareros()
    this.cargarMesas()
  },
  methods: {
    volverHome () {
      this.$router.push('/')
    },
    registrarFactura () {
      debugger
      if (this.detalles.length === 0) {
        this.registrado = 0
        return
      }
      this.factura.idCliente.idCliente =
        this.factura.idCliente.idCliente === 0
          ? null
          : this.factura.idCliente.idCliente

      this.factura.idCamarero.idCamarero =
        this.factura.idCamarero.idCamarero === 0
          ? null
          : this.factura.idCamarero.idCamarero
      axios
        .post('http://localhost:8080/cocina/api/factura/guardar', {
          factura: this.factura,
          detalles: this.detalles
        })
        .then(respuesta => {
          debugger
          this.factura.idCliente.idCliente = 0
          this.factura.idCamarero.idCamarero = 0
          this.factura.idMesa.idMesa = 0
          this.detalles = []
        })
        .catch(error => {
          console.log(error)
        })
    },
    cargarPlato () {
      if (this.plato !== '' && this.importe > 0) {
        this.detalles.push({
          plato: this.plato,
          importe: this.importe
        })
        this.plato = ''
        this.importe = 0
      }
    },
    cargarClientes () {
      axios
        .get('http://localhost:8080/cocina/api/cliente/consultar')
        .then(respuesta => {
          this.clientes = respuesta.data.datos
        })
    },
    cargarCamareros () {
      axios
        .get('http://localhost:8080/cocina/api/camarero/consultar')
        .then(respuesta => {
          this.camareros = respuesta.data.datos
        })
    },
    cargarMesas () {
      axios
        .get('http://localhost:8080/cocina/api/mesa/consultar')
        .then(respuesta => {
          this.mesas = respuesta.data.datos
        })
    }
  }
}
</script>

<style scoped>
.separador {
  margin-bottom: 20px;
}

.separador-extendido {
  margin-bottom: 50px;
}
</style>
