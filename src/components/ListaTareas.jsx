import { useContext } from 'react'
import { TareasContext } from '../context/TareasContext'
import Tarea from './Tarea'

function ListaTareas() {
  const { tareas } = useContext(TareasContext)

  if (tareas.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-4">
        No hay elementos todavía. ¡Agrega uno!
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {tareas.map(tarea => (
        <Tarea key={tarea.id} tarea={tarea} />
      ))}
    </ul>
  )
}

export default ListaTareas