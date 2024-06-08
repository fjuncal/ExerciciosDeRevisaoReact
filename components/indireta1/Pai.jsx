import Filho from "@/components/indireta1/Filho";

export default function Pai(props) {

    function falarComigo(param) {
        console.log(param)
    }

    return (
        <div>
            <Filho funcao={falarComigo}/>
        </div>
    )
}