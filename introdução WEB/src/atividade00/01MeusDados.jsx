import React from "react";

/*
function MeusDados () {
    return(
        <div>
            <h1>Com funCtion</h1>
            <h1>Kaynan Pereira de Sousa</h1>
            <h1>Ciência da Computação</h1>
            <h1>UFC - Universidade Federal do Ceará</h1>
        </div>
    )
}
*/

/*
const MeusDados = () => {
    return (
        <div>
            <h1>Com arrow function e return</h1>
            <h1>Kaynan Pereira de Sousa</h1>
            <h1>Ciência da Computação</h1>
            <h1>UFC - Universidade Federal do Ceará</h1>
        </div>
    )
}
*/

/*
const MeusDados = () => (
    <div>
        <h1>Com arrow function e sem return</h1>
        <h1>Kaynan Pereira de Sousa</h1>
        <h1>Ciência da Computação</h1>
        <h1>UFC - Universidade Federal do Ceará</h1>
    </div>
)
*/


class MeusDados extends React.Component {
    render() {
        return (
            <div>
                <h1>Com Classes</h1>
                <h1>Kaynan Pereira de Sousa</h1>
                <h1>Ciência da Computação</h1>
                <h1>UFC - Universidade Federal do Ceará</h1>
            </div>
        )
    }
}

export default MeusDados
