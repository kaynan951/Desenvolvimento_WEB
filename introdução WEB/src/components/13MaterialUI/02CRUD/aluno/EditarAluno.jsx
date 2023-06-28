import { Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const EditarAluno = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    const [nome, setNome] = useState("") //textfield
    const [curso, setCurso] = useState("") //textfield
    const [ira , setIra] = useState("0.0") //textfield

    //como [] está vazio, o useEffect funciona como um construtor!
    useEffect(
        () => {
            axios.get(`http://localhost:3005/alunos/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setIra(response.data.ira)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = {nome,curso,ira}
        axios.put(`http://localhost:3005/alunos/atualizar/${id}`,aluno)
        .then((response)=>{
            navigate("/listarAluno")
        })
        .catch(error=>console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Aluno Aluno {id}
            </Typography>
            <Box
                sx={{ width: "80%" }}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    value={nome}

                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}

                />
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
                    value={curso}

                    id="curso"
                    name="curso"
                    onChange={(event) => setCurso(event.target.value)}

                />
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label="Ira"
                    type="number"
                    inputProps={{
                        min:0,
                        max:10,
                        step:0.1
                    }}

                    id="ira"
                    name="ira"
                    onChange={(event)=>setIra(parseFloat(event.target.value))}
                />

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default EditarAluno