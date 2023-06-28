import MinhaCor from "./MeuContexto"

const FuncaoB = () => {
    // Modo Atual
    /**
     * const cores = useContext(MinhaCor) 
     * 
    return (
        <div>
        <h1 style={{backgroundColor: cores.bkgB, paddingBlock: "20px"}}>Funcao B</h1>
        </div>
        )
        */
       
    // Modo Legado
    return (
        <div>
            <MinhaCor.Consumer>
                {
                    (cores) => {
                        return (
                            <h1 style={{backgroundColor: cores.bkgB ,paddingBlock: "20px"}} >Funcao B</h1>
                        )
                    }
                }
            </MinhaCor.Consumer>
        </div>
    )
}

export default FuncaoB 