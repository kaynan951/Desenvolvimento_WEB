import MinhaCor from "./MeuContexto"

const FuncaoD = () => {
    // Modo Atual
    /**
     * const cores = useContext(MinhaCor)
     * return (
        <div>
            <h1 style={{backgroundColor: cores.bkgD, paddingBlock: "20px"}}>Funcao D</h1>
        </div>
    )
     */

    // Modo Legado
    return (
        <MinhaCor.Consumer>
            {
                (cores) => 
                    <div>
                        <h1 style={{backgroundColor: cores.bkgD, paddingBlock: "20px"}}>Funcao D</h1>
                    </div>
            }
        </MinhaCor.Consumer>
    )
}

export default FuncaoD