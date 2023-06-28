import FilhoA from "./FilhoA"
import FilhoB from "./FilhoB"
import FilhoC from "./FilhoC"

const Pai = () => {
    
const vec = [1, 2, 3, 4, 5]

    return (
        <div>

            <FilhoA vec={vec} />
            <FilhoB vec={vec} />
            <FilhoC vec={vec} />

            <h1>Cálculo Vetor</h1>

            <h3>Maior: </h3>
            <h3>Menor: </h3>
            <h3>Média: </h3>

        </div>
    )
}

export default Pai