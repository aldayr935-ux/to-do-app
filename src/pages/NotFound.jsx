import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center py-10">
      <h1 className="text-8xl font-bold text-blue-700">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-2">Página no encontrada</h2>
      <p className="text-gray-400 mt-3">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="inline-block mt-6 text-blue-500 font-semibold hover:underline">
        ← Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound