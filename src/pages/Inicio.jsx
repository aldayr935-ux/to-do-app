import { useContext } from 'react'
import { TareasContext } from '../context/TareasContext'
import FormularioTarea from '../components/FormularioTarea'
import ListaTareas from '../components/ListaTareas'
import SelectorLista from '../components/SelectorLista'

function Inicio() {
  const { tipoLista } = useContext(TareasContext)

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-2">
        <i className={`fas ${tipoLista.icono} mr-2`}></i>
        {tipoLista.label}
      </h1>
      <SelectorLista />
      <FormularioTarea />
      <ListaTareas />
    </div>
  )
}

export default Inicio