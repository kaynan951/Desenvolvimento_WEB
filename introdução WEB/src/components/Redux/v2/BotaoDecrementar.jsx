import { useDispatch } from "react-redux"
import { decrementar } from "./slice/idSlice"

const BotaodeDecrementar = () => {

    const despachante = useDispatch() 

    return(
        <>
        
            <button onClick={ () => despachante(decrementar()) }>
                ID - 1
            </button>

        </>
    ) 
}

export default BotaodeDecrementar