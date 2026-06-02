import Tarea from './Tarea'

function ListaTareas({ tareas, onEliminar, onCompletar }) {
    if (tareas.length === 0) {
    return <p>No hay tareas todavía. ¡Agrega una!</p>
    }

    return (
    <ul>
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