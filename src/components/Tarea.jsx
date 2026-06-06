import { useContext } from 'react'
import { TareasContext } from '../context/TareasContext'

function Tarea({ tarea }) {
  const { eliminarTarea, completarTarea } = useContext(TareasContext)

  return (
    <li className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
      <span
        onClick={() => completarTarea(tarea.id)}
        className={`cursor-pointer text-sm flex-1 ${tarea.completada ? 'line-through text-gray-400' : 'text-gray-700'}`}
      >
        {tarea.texto}
      </span>
      <button
        onClick={() => eliminarTarea(tarea.id)}
        className="ml-3 text-gray-400 hover:text-red-500 transition text-lg"
      >
        ❌
      </button>
    </li>
  )
}

export default Tarea