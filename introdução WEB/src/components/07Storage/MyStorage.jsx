const SaveData = () => {

    const saveData = () => {
        const aluno = {
                        matricula: "540864",
                        nome: "Kaynan",
                        curso: "CC"
                    }
        //sessionStorage.setItem(aluno.matricula,JSON.stringify(aluno))
        localStorage.setItem(aluno.matricula,JSON.stringify(aluno))
    }

    return (
        <> 
            <h1>Salvando Dados...</h1>
            
            <button onClick={saveData}>Salvar</button>
        </>
    )
}

const LoadData = () => {
    const loadData = () => {
        const aluno = JSON.parse(localStorage.getItem("540864"))
        return (
            <>
                <h3> Nome: {aluno.nome} </h3>
                <h3> Curso: {aluno.curso} </h3>
            </>
        )
    }

    return (
        <> 
            <h1>Carregando Dados...</h1>
            {loadData()}
        </>

    )
}


export {SaveData, LoadData}