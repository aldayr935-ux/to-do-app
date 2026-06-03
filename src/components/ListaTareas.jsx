import Tarea from './Tarea'

function ListaTareas({ tareas, onEliminar, onCompletar }) {
  if (tareas.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-4">
        No hay tareas todavía. ¡Agrega una!
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {tareas.map(tarea => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          onEliminar={onEliminar}
          onCompletar={onCompletar}
        />
      ))}
    </ul>
  )
}

export default ListaTareas