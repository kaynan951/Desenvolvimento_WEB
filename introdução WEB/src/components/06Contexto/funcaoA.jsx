import FuncaoB from "./funcaoB"
import FuncaoC from "./funcaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {

    const cor = {cor:"red", nome:"Vermelho"}

    // DRILLING

    return (
        // CONTEXT
        <MinhaCor.Provider value={cor}>
            <div>
                <h1 style={{backgroundColor: cor.cor ,paddingBlock: "20px"}} >Funcao A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    )
}

export default FuncaoA 