function Tarea({ tarea, onEliminar, onCompletar }) {
    return (
    <li className="tarea">
        <span
            className={tarea.completada ? 'completada' : ''}
            onClick={() => onCompletar(tarea.id)}
        >
            {tarea.texto}
        </span>
    <button onClick={() => onEliminar(tarea.id)}>❌</button>
</li>
    )
}

export default Tarea