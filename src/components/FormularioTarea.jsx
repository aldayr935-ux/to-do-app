import { useState } from 'react'

function FormularioTarea({ onAgregar }) {
  const [texto, setTexto] = useState('')

  const handleAgregar = () => {
    if (texto.trim() === '') return
    onAgregar(texto)
    setTexto('')
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={texto}
        placeholder="Nueva tarea..."
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAgregar()}
        className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-purple-400 transition"
      />
      <button
        onClick={handleAgregar}
        className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
      >
        Agregar
      </button>
    </div>
  )
}

export default FormularioTarea