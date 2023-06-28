import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const ListarAluno = () => {

    const [alunos,setAlunos] = useState([])

    useEffect(
        ()=>{
            axios.get("http://localhost:3005/alunos/listar")
            .then(
                (response)=>{
                    setAlunos(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    // função para deletar um aluno pelo id, onde o id é passado como parâmetro e a função é chamada no botão de excluir
    function deleteAlunoById(id) {
        if(window.confirm("Deseja Excluir?")){
            axios.delete(`http://localhost:3005/alunos/remover/${id}`)
            .then((response)=>{
                const resultado = alunos.filter(alu => alu._id != id)
                setAlunos(resultado)
            })
            .catch(error=>console.log(error))
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Alunos
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            {/* NESSE TRECHO ABAIXO FAZEMOS UMA LOGICA COM OPERADOR TERNÁRIO PARA ALTERARMOS A COR PARA VERMELHO DOS NOMES DOS ALUNOS CUJO SEU IRA É MENOR QUE O CÁLCULO DA MÉDIA DE TODOS OS ALUNOS.

                                            A LOGICA APLICADA PRA CALCULAR A MEDIA DOS ALUNOS FOI A MESMA UTILIZADA UM POUCO MAIS ABAIXO.
                                            
                                            E POR FIM, COMPARAMOS O IRA DO ALUNO ATUAL COM O RESULTADO DA MÉDIA DE TODOS OS ALUNOS. SE O IRA DO ALUNO ATUAL FOR MENOR QUE A MÉDIA DE TODOS OS ALUNOS, ENTÃO A COR DO NOME DO ALUNO ATUAL SERÁ VERMELHO, CASO CONTRÁRIO, SERÁ PRETO.
                                            */}
                                            <StyledTableCell
                                                sx={{
                                                    color: aluno.ira < (alunos.reduce((acc,aluno)=>acc+parseFloat(aluno.ira),0)/alunos.length).toFixed(1) ? "red" : "black"
                                                 }}
                                            >{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton aria-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                    {/*  
                        O CÁLCULO DA MÉDIA DE TODOS OS ALUNOS É FEITO COM O MÉTODO REDUCE() QUE RECEBE UMA FUNÇÃO DE CALLBACK E UM VALOR INICIAL, PRIMORDIALMENTE VERIFICAMOS SE O TAMANHO DO VETOR É MAIOR QUE ZERO, SE FOR, ENTÃO CALCULAMOS A MÉDIA DE TODOS OS ALUNOS, CASO CONTRÁRIO, RETORNAMOS ZERO. PARA CALCULAR A MÉDIA, COMO JA FALAMOS MAIS ACIMA, USAMOS O MÉTODO REDUCE(). A FUNÇÃO DE CALLBACK RECEBE DOIS PARÂMETROS, O PRIMEIRO É O ACUMULADOR E O SEGUNDO É O VALOR ATUAL. O VALOR INICIAL É O VALOR INICIAL DO ACUMULADOR. ESSE MÉTODO PERCORRE TODOS OS ELEMENTOS DO ARRAY E VAI ACUMULANDO O VALOR RETORNADO PELA FUNÇÃO DE CALLBACK NO ACUMULADOR.

                        NESSE CASO, O VALOR INICIAL DO ACUMULADOR É ZERO E A FUNÇÃO DE CALLBACK RETORNA A SOMA DO ACUMULADOR COM O IRA DO ALUNO ATUAL. NO FINAL, O MÉTODO REDUCE() RETORNA A SOMA DE TODOS OS IRA DOS ALUNOS. PARA CALCULAR A MÉDIA, DIVIDIMOS A SOMA DOS IRA DOS ALUNOS PELA QUANTIDADE DE ALUNOS. PARA SABER A QUANTIDADE DE ALUNOS, USAMOS A PROPRIEDADE LENGTH DO ARRAY DE ALUNOS.

                        O MÉTODO TOFIXED(1) É USADO PARA RETORNAR APENAS UMA CASA DECIMAL.
                    */}
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={3} align="right">Média Geral:</TableCell>
                            <TableCell align="left">
                                {
                                    alunos.length > 0 ?
                                    (alunos.reduce((acc,aluno)=>acc+parseFloat(aluno.ira),0)/alunos.length).toFixed(1)
                                    :
                                    0
                                }
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                            
                </Table>
            </TableContainer>
        </>

    )
}
// Deixar a cor da linha vermelha caso o IRA seja menor que a média de todos os alunos


const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default ListarAluno