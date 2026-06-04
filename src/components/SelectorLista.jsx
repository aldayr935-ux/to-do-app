import { useContext } from 'react'
import { TareasContext } from '../context/TareasContext'

function SelectorLista() {
  const { tipoLista, setTipoLista, TIPOS_LISTA } = useContext(TareasContext)

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      {TIPOS_LISTA.map(tipo => (
        <button
          key={tipo.label}
          onClick={() => setTipoLista(tipo)}
          className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border
            ${tipoLista.label === tipo.label
              ? 'bg-white text-purple-600 border-purple-300 shadow-lg shadow-purple-200 -translate-y-1'
              : 'bg-white text-gray-500 border-gray-200 hover:border-purple-300 hover:shadow-md hover:shadow-purple-100 hover:-translate-y-0.5'
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