import { Children, cloneElement } from "react"

const Hero = ({nome}) => {
    return(
        <div>
            <h1> I'm Hero: {nome}</h1>
            <img src="https://tm.ibxk.com.br/2022/03/09/09151903947444.jpg?ims=1200x675" alt="bom" 
            style={{width:"240px"}} />
        </div>
    )
}

const Enemy = ({nome}) => {
    return(
        <div>
            <h1> I'm Enemy: {nome}</h1>
            <img src="https://tm.ibxk.com.br/2022/03/09/09151903947444.jpg?ims=1200x675" alt="mau" style={{width:"240px"}}/>
        </div>
    )
}

const Arena = () => {
    return (
        <div>
            <Hero name="Eren yeager" />
            <Enemy name="Ereno yeager" />
        </div>
    )
}

const World = ({children}) => {
    return(
        <>
            {children}
        </>
    )
}

const Arena2 = ({name,children}) => {
    return (
        <div>
            <h1> Meu nome é:   arena {name}</h1>
            {
                Children.map(
                    children, // inicialização
                    (filho) => {
                        return cloneElement(filho,{arena:name})
                    } //função seta
                ) //map
            }
        </div>
    )
}

export {Hero, Enemy, Arena, World, Arena2}