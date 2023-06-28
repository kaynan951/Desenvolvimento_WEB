const Calculadora = () => {

    // primeira forma
    function somar(x,y) {
        return x + y
    }

    // segunda forma
    const subtrair = (x,y) => {
        return x - y
    }

    // terceira forma
    const multiplicar = (x,y) => x * y 
    
    // quarta forma
    const dividir = (x,y) => x / y

    const chamarDividir = (funcaoDeDivisao) => {
        return funcaoDeDivisao(10,5)
    }

    return (
        <div>
            <h1>A soma dos números é: {somar(10,5)} </h1>
            <h1>A subtração dos números é: {subtrair(10,5)} </h1>
            <h1>A multiplicação dos números é: {multiplicar(10,5)} </h1>
            <h1>A divisão dos números é: {chamarDividir(dividir)}</h1>
        </div>
    )
}

export default Calculadora