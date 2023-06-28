import { Children, cloneElement } from "react"

/*
const supermercado = ({children,nome}) => {
    return (
        <div>
            <h1> Supermercado {nome}</h1>
            {children}
        </div>
    )
}
*/

/*
//v2
const supermercado = ({children,nome}) => {
    return (
        <div>
            <h1> Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho) => {
                        return (
                            <div>
                                {filho}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}*/

const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1> Supermercado {nome}</h1>
            {
                Children.map(
                    children,
                    (filho) => {
                        return cloneElement(filho,{supermercado:nome})
                    }
                )
            }
        </div>
    )
}

const Legume = ({nome, supermercado}) => {
    return (
        <div>
            <h1> Legume {nome} do Supermercado {supermercado}</h1>

        </div>
    )
}
const Bebida = ({nome, supermercado}) => {
    return (
        <div>
            <h1> Bebida {nome} do Supermercado {supermercado}</h1>

        </div>
    )
}

export {Supermercado,Legume,Bebida}