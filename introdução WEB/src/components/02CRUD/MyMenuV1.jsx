import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom"
import { useState } from "react"
import Signin2 from "./SignIn2"

const MyMenu = () => {

    const [anchorElProfessor,setAnchorElProfessor] = useState(null)
    const [anchorElAluno,setAnchorElAluno] = useState(null)

    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget)
    } 

    const handleCloseAnchorElProfessor = () => {
        setAnchorElProfessor(null)
    }

    const handleOpenAnchorElAluno = (event) => {
        setAnchorElAluno(event.currentTarget)
    } 

    const handleCloseAnchorElAluno = () => {
        setAnchorElAluno(null)
    }

    function dropProfMenu() {
        return (
            <Box>
                <Button
                    sx={{ color: "white", my: 2 }}
                    onClick={handleOpenAnchorElProfessor}
                >
                    Professores
                </Button>
                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseAnchorElProfessor}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElProfessor}
                        component={Link}
                        to="cadastrarProfessor"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                         onClick={handleCloseAnchorElProfessor}
                         component={Link}
                         to="listarProfessor"
                    >
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    function dropAlunoMenu() {
        return (
            <Box>
                <Button
                    sx={{ color: "white", my: 2 }}
                    onClick={handleOpenAnchorElAluno}
                >
                    Alunos
                </Button>
                <Menu
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAnchorElAluno}
                >
                    <MenuItem
                        onClick={handleCloseAnchorElAluno}
                        component={Link}
                        to="cadastrarAluno"
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem
                         onClick={handleCloseAnchorElAluno}
                         component={Link}
                         to="listarAluno"
                    >
                        Listar
                    </MenuItem>
                    {/* criar novo link que leve para uma nova pagina que exiba apenas na tabela os alunos cujo IRA é superior à medias da turma  */}
                    <MenuItem
                            onClick={handleCloseAnchorElAluno}
                            component={Link}
                            to="listarAlunoAprovado"
                    >
                        Listar Alunos Aprovados
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                <AdbIcon
                        sx={{
                            display: 'flex',
                            marginRight: 1
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/login"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            letterSpacing: 3
                        }}
                    >
                        CRUD_v1 - Material UI
                    </Typography>

                    <Box 
                        sx={{
                            display: 'flex',
                            marginLeft: 'auto',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            fontSize: '1.2rem'
                        }}
                    >
                        {dropProfMenu()}
                        {dropAlunoMenu()}
                        
                        <Button
                            sx={{ color: "white", my: 2 }}
                        >
                            Sobre
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default MyMenu