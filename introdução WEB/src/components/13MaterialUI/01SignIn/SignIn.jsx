import { Box, Button, Container, Link, TextField, Typography } from "@mui/material"

const Signin = () => {
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
                    
                    label="Endereço de e-mail"
                    id="email"
                    name="email"
                    type="email"
                />

                <TextField 
                    required
                    margin="normal"
                    fullWidth
                    
                    label="Endereço de e-mail"
                    id="password"
                    name="password"
                    type="password"
                />

                <Button>
                    Entrar
                </Button>

                <Link>
                    Esqueceu sua senha?
                </Link>

                <Link>
                    Não tem uma conta? Registre-se
                </Link>


            </Box>
        </Container>
    )
        
}

export default Signin