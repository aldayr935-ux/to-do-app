import {useState} from 'react'

function FormularioTarea({onAgregar}) {
    const [texto, setTexto] = useState('')

    const handleAgregar = () => {
        if(texto.trim() === '') return
        onAgregar(texto)
        setTexto('')
    }

    return (
        <div className="formulario">
            <input
                type="text"
                value={texto}
                placeholder= "Nueva tarea"
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAgregar()}
            />
            <button onClick={handleAgregar}>Agregar</button>
        </div>
    )
}

export default FormularioTarea
