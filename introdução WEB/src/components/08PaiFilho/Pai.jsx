import Filho from "./Filho"

const Pai = () => {

    const receberMensagemFilho = (mensagem) => {
        alert("Filho falou: "+ mensagem)
    }

    return (
        <>
            <h1>Componente Pai</h1>
            <Filho mesada={600.00} enviarMensagemPai={receberMensagemFilho} />
        </>
    )
}

export default Pai