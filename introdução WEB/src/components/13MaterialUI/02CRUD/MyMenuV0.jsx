import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';

const MyMenu = () => {
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
                        href="/" 
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            letterSpacing: 3
                        }}
                    >
                        CRUD_v0 - Material UI
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
                        <Button 
                            sx={{
                                color: 'white',
                            }}
                        >
                            Professores
                        </Button>
                        <Button
                            sx={{
                                color: 'white',
                            }}
                        >
                            Alunos
                        </Button>
                        <Button
                            sx={{
                                color: 'white',
                            }}
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