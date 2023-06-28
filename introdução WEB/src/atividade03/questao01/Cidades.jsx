import { useState, useEffect } from "react"
import "../questao01/meuestilo01.css"

const Cidades = () => {

        const [cidades, setCidades] = useState (
        
        [
            {nome: "Fortaleza", votos: 0},
            {nome: "Quixadá", votos: 0},
            {nome: "Iguatu", votos: 0},
            {nome: "Sobral", votos: 0}
        ]
        )

        const votarNaCidade2 = (nome) => {
            const newCidades = cidades.map(
                    // Maneira 1
                // (item) => {
                //     if(item.nome === nome) return {nome: item.nome, votos: item.votos+1}
                //     return {nome: item.nome, votos: item.votos}
                // }

                    // Maneira 2
                // (item) => {
                //     if(item.nome === nome) return {...item, votos: item.votos+1}
                //     return {...item}
                // }

                    // Maneira 3
                (item) => {
                    if(item.nome === nome) 
                        item.votos += 1
                    return item
                }
            )
            setCidades(newCidades)

        }
    
/**
 * Maneira utilizada em ambientes mais assincronos 

    // const Fortal = () => {
    //     setContadorFortal(contadorFortal + 1)
    //     //console.log(contador) 
    // }
    // const Quixada = () => {
    //     setContadorQuixada(contadorQuixada + 1)
    //     //console.log(contador) 
    // }
    // const Iguatu = () => {
    //     setContadorIguatu(contadorIguatu + 1)
    //     //console.log(contador) 
    // }
    // const Sobral = () => {
    //     setContadorSobral(contadorSobral + 1)
    //     //console.log(contador) 
    // }
*/

    return(
        <div className="body">
            <h1 className="title">Votação de Cidades</h1>
            <div className="row">
                <div className="card Cidades">
                    <h3>{cidades[0].nome} : {cidades[0].votos}</h3>
                    <button className="btn" id="fortal" onClick={ () => votarNaCidade2( "Fortaleza" )} >Votar</button>
                </div>
                
                <div className="card Cidades">
                    <h3>{cidades[1].nome} : {cidades[1].votos} </h3>
                    <button className="btn" onClick={ () => votarNaCidade2( "Quixadá" )} >Votar</button>
                </div>

                <div className="card Cidades">
                    <h3>{cidades[2].nome} : {cidades[2].votos} </h3>
                <button className="btn" onClick={ () => votarNaCidade2( "Iguatu" )} >Votar</button>
                </div>
                
                <div className="card Cidades">
                    <h3>{cidades[3].nome} : {cidades[3].votos}</h3>
                    <button className="btn" onClick={ () => votarNaCidade2( "Sobral" )} >Votar</button>
                </div>
            </div>
            
            <div className="painel"> 
                <h2 id="subName">Cidade(s) mais votada(s): </h2> 
                <h2></h2>
                <h2 id="subName">Cidade(s) menos votada(s): </h2>
                <h2></h2>
            </div>
        </div>
    )
} 

export default Cidades