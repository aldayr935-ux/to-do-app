import { useState, useContext } from 'react'
import { TareasContext } from '../context/TareasContext'

function FormularioTarea() {
  const [texto, setTexto] = useState('')
  const { agregarTarea } = useContext(TareasContext)

  const handleAgregar = () => {
    if (texto.trim() === '') return
    agregarTarea(texto)
    setTexto('')
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={texto}
        placeholder="Nuevo elemento..."
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAgregar()}
        className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-400 transition"
      />
      <button
        onClick={handleAgregar}
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
      >
        Agregar
      </button>
    </div>
  )
}

export default FormularioTarea