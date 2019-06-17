<template>
  <div class="hello">
    <img
      id="logo"
      src="https://image.flaticon.com/icons/svg/1539/1539422.svg"
    />
    <h1>{{ msg }}</h1>
    <h2>Sistema</h2>
    <ul>
      <li>
        <a href="#" @click="irFactura">Registrar Factura</a>
      </li>
    </ul>
    <h2>Visualizar Información</h2>
    <ul>
      <li>
        <a href="#" @click="irGastos">Información Clientes</a>
      </li>
      <li>
        <a href="#" @click="irInforme">Información Camareros</a>
      </li>
    </ul>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'Bienvenida',
  data () {
    return {
      msg: 'Sistema de facturación "La Mejor Cocina"'
    }
  },
  methods: {
    /**
     * Metodo de navegacion para el modulo de registrar factura
     */
    irFactura () {
      this.$router.push('/registrar-factura')
    },
    /**
     * Metodo de navegacion para el modulo de informe de camareros
     */
    irInforme () {
      this.$router.push('/informe-camareros')
    },
    /**
     * Metodo de navegacion para el modulo de gastos por usuario
     */
    irGastos () {
      this.$router.push('/informe-gastos')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#logo {
  width: 200px;
  height: 200px;
  margin: 20px;
}
.hello {
  text-align: center;
}
</style>
