import { useEffect, useState } from "react"

const minhaPromise = new Promise(
    (resolve,reject)=>{
    
        setTimeout(
            ()=>{
                const num = Math.floor(Math.random()*10)+1      
                if(num === 1) reject({numero: num, msg: "ERRO DE CONEXÃO"})
                else if(num ===2) reject({numero: num, msg: "ERRO DE DADOS INVÁLIDOS"})
                else resolve({alunos: [
                                        {id:1, nome: "Kaynan", ira: 8.5},
                                        {id:2, nome: "Jeffin", ira: 7.6},
                                        {id:3, nome: "Deivin", ira: 6.7},
                                        ]}) 
            }
            ,
            3000
        )    
    }
)


const MinhaPromise = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(
        ()=>{
            minhaPromise
            .then(
                (response) => {
                    setAlunos(response.alunos)
                    console.log(response.alunos)
                }
            )
            .catch(
                (reject) => {
                    console.log(reject.numero)
                    console.log(reject.msg)
                }
            )
        }
        ,
        []
    )

    return (
        <div>
            {
                alunos.map((aluno) => 
                    <div>
                        <h1>id: {aluno.id } </h1>
                        <h1>nome: {aluno.nome}</h1>
                        <h1>ira: {aluno.ira} </h1>
                        <hr />
                    </div>
                )
            }
        </div>
    )
}

export default MinhaPromise