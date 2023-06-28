import Imagem from "./Imagem"
import BotaodeIncrementar from "./BotaoIncrementar"
import BotaodeDecrementar from "./BotaoDecrementar"
import { useState } from "react"


const TelaPrincipal = () => {

    const [id, setID] = useState(1)

    const incrementar = () => {
        setID( (prev) => prev+1 )
    }

    const decrementar = () => {
        setID( (prev) => (prev-1) < 1 ? 1:prev -1 ) // op. ternário 
    }


    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem id={id} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaodeIncrementar incrementar ={incrementar} />
                        </td>
                        <td>
                            <BotaodeDecrementar decrementar ={decrementar} />
                        </td>
                    </tr>
    
                </tbody>
            </table>
        </>
    ) 
}

export default TelaPrincipal