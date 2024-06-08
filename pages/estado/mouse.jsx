import {useState} from "react";

export default function mouse() {
    const [x, setX] = useState(0);
    const [y, sety] = useState(0);

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"

    }

    function quandoMover(ev) {
        setX(ev.clientX);
        sety(ev.clientY);
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo x: {x}</span>
            <span>Eixo y: {y}</span>
        </div>
    )
}