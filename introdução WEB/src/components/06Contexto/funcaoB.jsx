import MinhaCor from "./MeuContexto"

const FuncaoB = () => {
    return (
        <div>
            <MinhaCor.Consumer>
                {
                    ({cor,nome}) => {
                        return (
                            <h1 style={{backgroundColor: cor,paddingBlock: "20px"}} >Funcao B, nome da cor: {nome}</h1>
                        )
                    }
                }
            </MinhaCor.Consumer>
        </div>
    )
}

export default FuncaoB 