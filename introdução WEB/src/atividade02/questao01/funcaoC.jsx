import { useContext } from "react"
import FuncaoD from "./funcaoD"
import MinhaCor from "./MeuContexto"

const FuncaoC = () => {
    // Modo Legado
    /**
     * return (
        <div>
            <MinhaCor.Consumer>
                {
                    (cores) => {
                        return (
                            <h1 style={{backgroundColor: cores.bkgC ,paddingBlock: "20px"}} >Funcao C</h1>
                        )
                    }
                }
            </MinhaCor.Consumer>
        </div>
    )
     */

    // Modo Atual
    const cores = useContext(MinhaCor)      
    // ou podemos descontruir, ficando assim ->
    // const {bkgC} = useContext(MinhaCor)
    // porém quebrando esse objeto inteiro, tiramos o objeto do h1, ficando somente o bkgC ->
    // <h1 style={{backgroundColor: bkgC, paddingBlock: "20px"}}>Funcao C</h1>

    return (
        <div>
            <h1 style={{backgroundColor: cores.bkgC, paddingBlock: "20px"}}>Funcao C</h1>
            <FuncaoD/>
        </div>
    )
}

export default FuncaoC