import { useState, useEffect } from "react"

const Contador = () => {
    //let contador = 0
    const [contador, setContador] = useState(0)
    const [ePar, setEPar] = useState(true)

    useEffect(
        () => {
            if(contador %2 === 0) {
                setEPar (true)
            } else 
                setEPar (false)
        }
        ,
        [contador]
    )

const aumentarContador = () => {
    setContador(contador + 1)
    //console.log(contador) 
}


    return(
        <>
            <h1>Contador de Cliques: {contador}</h1>
            <h1>É Par: {ePar + ""} </h1>

            <button
                style={{cursor: "pointer"}}
                onClick={aumentarContador}
            >
                Clique!!!
            </button>
        </>
    )
}

export default Contador