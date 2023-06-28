import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import MyMenu from "./MyMenuV1"

import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"
import CadastrarAluno from "./aluno/CadastrarAluno"
import ListarAluno from "./aluno/ListarAluno"
import ListarAlunoAprovado from "./aluno/ListarAlunoAprovado"
import EditarAluno from "./aluno/EditarAluno"
import Signin2 from "./SignIn2"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenu />
            <Container sx={{mt:5,display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Routes>
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor/>}/>
                    <Route path="listarProfessor" element={<ListarProfessor/>}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>

                    <Route path="login" element={<Signin2/>}/>
                    
                    <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path="listarAluno" element={<ListarAluno/>}/>
                    <Route path="listarAlunoAprovado" element={<ListarAlunoAprovado/>}/>
                    <Route path="editarAluno/:id" element={<EditarAluno/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage