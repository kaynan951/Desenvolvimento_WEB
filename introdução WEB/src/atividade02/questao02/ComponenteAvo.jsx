import PokemonContexto from "./MeuContexto"
import ComponenteFilho from "./ComponenteFilho"

const ComponenteAvo = () => {
    const numero = 1

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avô</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} style= {{width:"200px"}} 
                />

                <ComponenteFilho />
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo