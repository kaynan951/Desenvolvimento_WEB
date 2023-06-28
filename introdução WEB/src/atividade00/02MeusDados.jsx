import React from "react";

const MeusDados = ({nome,curso,facul}) => {
    return (
        <div>
            <h1>Meu nome é: {nome} </h1>
            <h1>Meu curso é: {curso} </h1>
            <h1>Minha faculdade é: {facul} </h1>
        </div>
    )
}

export default MeusDados