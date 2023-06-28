import { useDispatch } from "react-redux"
import { incrementar, incrementarValor } from "./slice/idSlice"

const BotaodeIncrementar = () => {

    const despachante = useDispatch()

    return(
        <>
        
            <button onClick={ () => despachante(incrementar()) }>
                ID + 1
            </button>
            
            <button onClick={ () => despachante(incrementarValor(10)) }>
                ID + 10
            </button>

        </>
    ) 
}

export default BotaodeIncrementar