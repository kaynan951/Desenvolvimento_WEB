import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell, Box } from "@mui/material"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from "react";
import axios from "axios";

const ListarAlunoAprovado = () => {

    const [alunos,setAlunos] = useState([])

    useEffect(
        ()=>{
            /**
             * calcular a media do IRA dos alunos e preencer o vetor apenas com aqueles que estão acima da média calculada
             */
            axios.get("http://localhost:3005/alunos/listarAlunoAprovado")
            .then(
                (response)=>{
                    const media = response.data.reduce((acc,aluno)=>acc+parseFloat(aluno.ira),0)/response.data.length
                    const resultado = response.data.filter(aluno=>aluno.ira>=media)
                    setAlunos(resultado)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Alunos Aprovados com IRA acima da média
            </Typography>
            
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>                     
                </Table>
            </TableContainer>
        </>

    )
}


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



export default ListarAlunoAprovado