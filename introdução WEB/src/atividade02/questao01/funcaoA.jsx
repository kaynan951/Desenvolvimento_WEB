import FuncaoB from "./funcaoB"
import FuncaoC from "./funcaoC"
import MinhaCor from "./MeuContexto"

const FuncaoA = () => {

    const cores = {bkgA:"green", bkgB:"red", bkgC:"yellow", bkgD:"blue"}

    // DRILLING

    return (
        // CONTEXT
        <MinhaCor.Provider value={cores}>
            <div>
                <h1 style={{backgroundColor: cores.bkgA ,paddingBlock: "20px"}} >Funcao A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </MinhaCor.Provider>
    )
}

export default FuncaoA 