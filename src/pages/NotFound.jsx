import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '6rem', color: '#6c63ff', margin: '0' }}>404</h1>
      <h2 style={{ color: '#333' }}>Página no encontrada</h2>
      <p style={{ color: '#888', margin: '16px 0' }}>
        La página que buscas no existe o fue movida.
      </p>
      <Link to="/" className="volver">← Volver al inicio</Link>
    </div>
  )
}

export default NotFound