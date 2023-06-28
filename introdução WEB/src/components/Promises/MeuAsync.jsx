import { useEffect } from "react";

const minhaPromessa = new Promise(
    (resolve, reject) => {
        const x = true;
        if (x) resolve({ msg: "Deu bom" })
        else reject({ msg: "Deu certo não meu comparsa" })
    }
)

const MeuAsync = () => {

    useEffect(
        () => {
            
            //getPromessaThen()
            getPromessa()
        },
        []
    )

    function getPromessaThen() {
        minhaPromessa
        .then(
            (data) => {console.log(data.msg)} 
        )
        .catch(
            (data) => {console.log(data.msg)}
        )
    }

    async function getPromessa() {
        try {
            const data = await minhaPromessa
            console.log(data.msg)
        } catch (erro) {
            console.log(erro.msg)
        }
    }


    return (
        <>
            <h1>Testando meu async</h1>
        </>
    )
}

export default MeuAsync