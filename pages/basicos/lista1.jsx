export default function lista1() {
    let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>
            {lista.map((elem, index) => (
                <span>{elem},</span>
            ))}
        </div>
    )
}