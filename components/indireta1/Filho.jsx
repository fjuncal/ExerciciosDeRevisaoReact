export default function Filho(props) {
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={() => props.funcao("Passei no ENEM!")} className="btn">Buscar</button>
            <button onClick={props.funcao} className="btn">Buscar</button>
        </div>
    )
}