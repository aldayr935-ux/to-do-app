import { useContext } from 'react'
import { TareasContext } from '../context/TareasContext'

function SelectorLista() {
    const { tipoLista, setTipoLista, TIPOS_LISTA } = useContext(TareasContext)

  return (
    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 justify-center mb-6">
  {TIPOS_LISTA.map(tipo => (
    <button
      key={tipo.label}
      onClick={() => setTipoLista(tipo)}
      className={`px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border w-full md:w-auto
        ${tipoLista.label === tipo.label
          ? 'bg-white text-blue-700 border-blue-500 shadow-lg shadow-blue-200 -translate-y-1'
          : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 hover:-translate-y-0.5'
        }`}
    >
      <i className={`fas ${tipo.icono} mr-2`}></i>
      {tipo.label}
    </button>
  ))}
</div>
  )
}

export default SelectorLista