import {useState} from "react";
import NumeroDisplay from "@/components/NumeroDisplay";

export default function contador() {
    const [valor, setValor] = useState(0);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={valor}/>
            <h3>{valor}</h3>
            <button onClick={() => setValor(valor + 1)}>adicionar1</button>
            <button onClick={() => setValor(valor - 1)}>diminuir1</button>

        </div>
    )
}