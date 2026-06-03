import { useState, useEffect } from 'react'
import FormularioTarea from '../components/FormularioTarea'
import ListaTareas from '../components/ListaTareas'

function Inicio() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas')
    return guardadas ? JSON.parse(guardadas) : []
  })

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = (texto) => {
    const nueva = { id: Date.now(), texto, completada: false }
    setTareas([...tareas, nueva])
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  const completarTarea = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Mi Lista de Tareas
      </h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        onEliminar={eliminarTarea}
        onCompletar={completarTarea}
      />
    </div>
  )
}

export default Inicio