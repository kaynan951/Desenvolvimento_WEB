import { useSelector } from "react-redux"

const Imagem = () => {

    const id = useSelector( (state)=> state.id.value )

    return(
        <>
            <img style={{width: "300px"}} src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} alt="pokemon" />
        </>
    )
}

export default Imagem