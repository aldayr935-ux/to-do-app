import { useState, useEffect } from 'react'
import { TareasContext } from './TareasContext'

const TIPOS_LISTA = [
  { label: 'Lista de tareas', icono: 'fa-list' },
  { label: 'Lista de compras', icono: 'fa-shopping-cart' },
  { label: 'Checklist de viaje', icono: 'fa-suitcase' },
  { label: 'Lista de películas', icono: 'fa-film' },
  { label: 'Lista de libros', icono: 'fa-book' },
]

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas')
    return guardadas ? JSON.parse(guardadas) : []
  })

  const [tipoLista, setTipoLista] = useState(() => {
    const guardado = localStorage.getItem('tipoLista')
    return guardado ? JSON.parse(guardado) : TIPOS_LISTA[0]
  })

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  useEffect(() => {
    localStorage.setItem('tipoLista', JSON.stringify(tipoLista))
  }, [tipoLista])

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
    <TareasContext.Provider value={{
      tareas,
      agregarTarea,
      eliminarTarea,
      completarTarea,
      tipoLista,
      setTipoLista,
      TIPOS_LISTA
    }}>
      {children}
    </TareasContext.Provider>
  )
}