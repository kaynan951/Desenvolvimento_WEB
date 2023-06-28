import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const PokemonAxios = () => {

    const [nome, setNome] = useState("")
    const [img1, setImg1] = useState("")
    const [img2, setImg2] = useState("")
    const [id, setID] = useState(1)

    useEffect (
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)  // PROMESSA
            .then(                                                // DEU CERTO, FAÇA
                (response) => {
                    setNome(response.data.name)
                    setImg1(response.data.sprites.front_default)
                    setImg2(response.data.sprites.back_default)
                }
            )
            .catch((error)=>console.log(error))                   // VIX, DEU ERRO
        }
        ,
        [id]

    )

    return (
        <div style={{marginLeft: "auto", marginRight: "auto", width: "700px"}}>
            <table border={"8px"}>
                <tbody>
                    <tr>
                        <td colSpan={2} style={{textAlign: "center"}}>
                            Nome: {nome}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={img1} alt="Pókemon" style={{width:"300px"}}/>
                        </td>
                        <td>
                            <img src={img2} alt="Pókemon" style={{width:"300px"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=> setID((prev) => prev+1)} > ID + 1</button>
                        </td>
                        <td>
                            <button onClick={()=> setID((prev) => (prev-1) < 1 ? 1:prev -1 )}> ID - 1</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default PokemonAxios