import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
import PokemonContexto from "./MeuContexto"

const ComponenteFilho = () => {
    
    const numero = useContext(PokemonContexto)

    return (
        <div>
            <h1>Componente Filho</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`} style= {{width:"400px"}} 
            />
            <ComponenteNeto />
        </div>
    )
}

export default ComponenteFilho