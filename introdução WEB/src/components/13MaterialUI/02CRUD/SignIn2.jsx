import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const Signin2 = () => {

    const navigate = useNavigate()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
 
      function handleSubmit(event) {
        event.preventDefault()
        axios.post("http://localhost:3005/users/autenticacao", password, username)
        .then (
            (response)=> {
                if (response.data.res === "true") {
                    // Salvando o token no localStorage 
                    localStorage.setItem("res", response.data.res) 
                    // redirecionando para a página de listagem de alunos como pede a questão
                    navigate("/listarAluno")
                } else 
                    alert("Usuário ou senha inválidos!")
            }
        )
        .catch (error=>console.log(error))
    }

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'espace-between',
                    alignItems: 'center',
                    marginTop: 8
                }}
                
                component="form"
                onSubmit={handleSubmit}
                >
                <Typography
                    variant="h5"
                    component="h1"
                    >
                    Sign In
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    autoFocus
                    
                    label="Username"
                    id="username"
                    name="username"
                    type="text"
                    onChange={handleUsername}
                    />

                <TextField
                    required
                    margin="normal"
                    fullWidth

                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={handlePassword}
                    />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    
                    >
                    Entrar
                </Button>

            </Box>
        </Container>
    )

}

export default Signin2