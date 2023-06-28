import Imagem from "./Imagem"
import BotaodeIncrementar from "./BotaoIncrementar"
import BotaodeDecrementar from "./BotaoDecrementar"


const TelaPrincipal = () => {

    return(
        <>
        <h1>TESTE</h1>

            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaodeIncrementar />
                        </td>
                        <td>
                            <BotaodeDecrementar />
                        </td>
                    </tr>
    
                </tbody>
            </table>
        </>
    ) 
}

export default TelaPrincipal