const Filho = (props) => {
    return (
        <>
            <h1>Componente Filho</h1>
            <h3>Mesada: {props.mesada}</h3>
            <button style={{ cursor: "pointer" }} onClick={
                        () => {
                            props.enviarMensagemPai("Obrigado Pai")
                        }
                    } 
            >
                clicar aqui
            </button>
        </>
    )
}

export default Filho