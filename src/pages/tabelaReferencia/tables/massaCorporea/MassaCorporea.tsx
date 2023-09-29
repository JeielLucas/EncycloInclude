import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function createData(
    tipo: string,
    classificacao: string,
    fonte: string,
) {
    return { tipo, classificacao, fonte };
}

const rows = [
    createData('Baixo', 'Menor de 18,5', ''),
    createData('Aceitável ou Ideal', 'De 18,5 a 24,9', ''),
    createData('Obesidade Leve', 'De 25,0 a 29,9', ''),
    createData('Obesidade Moderada', 'De 30,0 a 39,9', ''),
    createData('Obesidade Severa', 'Maior ou Igual a 40,0', ''),
];

function createRisco(
    classificacao: string,
    masculino: string,
    femenino: string,
    fonte: string,
) {
    return { classificacao, masculino, femenino, fonte };
}

const rowsRiscos = [
    createRisco('Risco Baixo', '17,9 a 18,9', '15,0 a 17,9', ''),
    createRisco('Ideal', '19,0 a 24,9', '18,0 a 24,4', ''),
    createRisco('Risco Moderado', '25,0 a 27,7', '24,5 a 27,2', ''),
    createRisco('Risco Elevado', 'Acima de 27,8', 'Acima de 27,3', ''),

];



export const MassaCorporea: React.FC = () => {
    return (
        <>
            <Typography variant="h6" noWrap component="div" align="center">
                I.M.C. – QUANTO A CLASSIFICAÇÃO DO PESO
                (ORGANIZAÇÃO MUNDIAL DE SAÚDE)
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Classificação</TableCell>
                            <TableCell align="left">Resultado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.tipo}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.tipo}</TableCell>
                                <TableCell align="left">{row.classificacao}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                I.M.C.  - QUANTO AOS RISCOS A SAÚDE
                (CORBIN & LINDEY, 1994)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Classificação</TableCell>
                            <TableCell>Masculino</TableCell>
                            <TableCell align="left">Femenino</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsRiscos.map((row) => (
                            <TableRow
                                key={row.classificacao}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.classificacao} </TableCell>
                                <TableCell component="th" scope="row">{row.masculino} </TableCell>
                                <TableCell align="left">{row.femenino}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}