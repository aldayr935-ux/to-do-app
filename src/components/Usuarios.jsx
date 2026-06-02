import { useState, useEffect } from 'react'

function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los datos')
        return res.json()
      })
      .then(data => {
        setUsuarios(data)
        setCargando(false)
      })
      .catch(err => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  if (cargando) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Usuarios</h2>
      <div className="formulario">
        <input
          type="text"
          placeholder="Buscar usuario..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="lista">
        {usuariosFiltrados.map(usuario => (
          <div key={usuario.id} className="tarea">
            <div>
              <strong>{usuario.name}</strong>
              <p>{usuario.email}</p>
              <p>{usuario.website}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Usuarios