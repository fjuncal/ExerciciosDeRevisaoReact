import {useEffect, useState} from "react";
import NumeroDisplay from "@/components/NumeroDisplay";
import {mega} from "@/functions/mega";

export default function megasena() {
    const [numeros, setNumeros] = useState([])
    const [qtd, setQtd] = useState(6)

    useEffect(() => {
        setNumeros(mega(qtd))
    }, []);

    function renderizarNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero}/>
        )
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Mega sena</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
            }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtd} onChange={(e) => setQtd(e.target.value)}/>
                <button onClick={() => setNumeros(mega(qtd))}>Gerar Aposta</button>
            </div>
        </div>
    )
}