import { useRef } from 'react';
function UserNewForm({onSubmit}) {
    const nombreRef = useRef()
    const generoRef = useRef()
    const metaSemanalRef = useRef()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const nombre = nombreRef.current.value.trim()
        const genero = generoRef.current.value;
        const metaSemanal = metaSemanalRef.current.value;
        if (nombre !== '' && metaSemanal !== '') {
            onSubmit(nombre, genero, metaSemanal)
        }
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Tu nombre</label>
        <input type="text" name="nombre" id="nombre" ref={nombreRef}/>
        <label htmlFor="genre">Tu género</label>
        <select name="genre" id="genre" ref={generoRef}>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="not">Prefiero no decir</option>
        </select>
        <label htmlFor="goal">¿Cuál es tu meta semanal?</label>
        <input type="number" name="goal" id="goal" ref={metaSemanalRef}/>
        <button>Iniciar ahora</button>
    </form>
}
export { UserNewForm }