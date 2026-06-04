import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TareasProvider } from './context/TareasProvider'
import Inicio from './pages/Inicio'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <TareasProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 flex items-start justify-center px-4 py-8 md:py-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TareasProvider>
  )
}

export default App