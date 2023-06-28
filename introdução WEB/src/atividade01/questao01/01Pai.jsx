import Filho from "./01Filho"

const Pai = () => 
{
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
        ]

    return (
        <div>
            <Filho alunos={alunos} />
        </div>
    )
}

export default Pai