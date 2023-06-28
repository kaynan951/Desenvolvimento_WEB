const Imagem = ({id}) => {

    return(
        <>
            <img style={{width: "300px"}} src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} alt="pokemon" />
        </>
    ) 
}

export default Imagem