import '../Css01.css'

const Filho = (peso,altura) => 
{
    function CalcularIMC({peso,altura}) {
        return peso/(altura*altura)
    }

    function RenderizaMensagem(CalcularIMC) {
        if(CalcularIMC < 18) {
            return <h3>Abaixo do Peso</h3>

        } else if(CalcularIMC > 25) {
            return <h3>Acima do peso</h3>

        } else 
            return <h3>Peso ideal</h3>
    }

    const imc = CalcularIMC(peso,altura)

// MAIN
    return (
        <div>
            <h1 className='title' > Tabela IMC - Índice de massa corpórea </h1>
            <h1 className='content' >O IMC é: {imc.toFixed(2)} </h1>
            <div className='child'> 
                {RenderizaMensagem(imc)}    
            </div>
                <br />
        </div>
    )
}

export default Filho