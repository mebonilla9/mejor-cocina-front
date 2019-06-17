import InformeCamareros from './components/InformeCamareros'
import InformeGastos from './components/InformeGastos'
import RegistrarFactura from './components/RegistrarFactura'
import Bienvenida from './components/Bienvenida'

export const routes = [
  {
    path: '/informe-camareros',
    component: InformeCamareros
  },
  {
    path: '/informe-gastos',
    component: InformeGastos
  },
  {
    path: '/registrar-factura',
    component: RegistrarFactura
  },
  {
    path: '/',
    component: Bienvenida
  }
]
