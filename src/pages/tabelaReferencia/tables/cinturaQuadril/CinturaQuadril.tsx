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
    idade: string,
    baixo: string,
    moderado: string,
    alto: string,
    muitoAlto: string,
    fonte: string,
) {
    return { idade, baixo, moderado, alto, muitoAlto, fonte };
}

const rows = [
    createData('20 A 29', '< 0,83', '0,83 A 0,88', '0,89 A 0,94', '> 0,94', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createData('30 A 39', '< 0,84', '0,84 A 0,91', '0,92 A 0,96', '> 0,96', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createData('40 A 49', '< 0,88', '0,88 A 0,95 ', '0,96 A 1,00  ', '> 1,00', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createData('50 A 59', '< 0,90', '0,90 A 0,96', '0,97 A 1,02 ', '> 1,02', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createData('60 A 69', '< 0,91', '0,91 A 0,98', '0,99 A 1,03', '> 1,03', 'Fonte: Applied Body Composition Assessment, 1996.'),
  
];

function createDataRisco(
    idade: string,
    baixo: string,
    moderado: string,
    alto: string,
    muitoAlto: string,
    fonte: string,
) {
    return { idade, baixo, moderado, alto, muitoAlto, fonte };
}

const rowsRiscos = [
    createDataRisco('20 A 29', '< 0,71', '0,71 A 0,77', '0,76 A 0,83', '> 0,82', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createDataRisco('30 A 39', '< 0,72', '0,72 A 0,78', '0,79 A 0,84', '> 0,84', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createDataRisco('40 A 49', '< 0,73', '0,73 A 0,79 ', '0,80 A 0,87  ', '> 0,87', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createDataRisco('50 A 59', '< 0,74', '0,74 A 0,81', '0,82 A 0,88 ', '> 0,88', 'Fonte: Applied Body Composition Assessment, 1996.'),
    createDataRisco('60 A 69', '< 0,76', '0,76 A 0,83', '0,84 A 0,90', '> 0,90', 'Fonte: Applied Body Composition Assessment, 1996.'),
  
];



export const CinturaQuadril: React.FC = () => {
    return (
        <>
            <Typography variant="h6" noWrap component="div" align="center">
                Tabela da Relação entre  a Cintura e o  Quadril
                CLASSIFICAÇÃO DE RISCOS PARA HOMENS
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Idade</TableCell>
                            <TableCell align="left">Baixo</TableCell>
                            <TableCell align="left">Moderado</TableCell>
                            <TableCell align="left">Alto</TableCell>
                            <TableCell align="left">Muito Alto</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.idade}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                  <TableCell component="th" scope="row">{row.idade} </TableCell>
                                <TableCell component="th" scope="row">{row.baixo} </TableCell>
                                <TableCell align="left">{row.moderado}</TableCell>
                                <TableCell align="left">{row.alto}</TableCell>
                                <TableCell align="left">{row.muitoAlto}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                Tabela da Relação entre  a Cintura e o  Quadril
                CLASSIFICAÇÃO DE RISCOS PARA MULHERES
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                        <TableCell >Idade</TableCell>
                            <TableCell align="left">Baixo</TableCell>
                            <TableCell align="left">Moderado</TableCell>
                            <TableCell align="left">Alto</TableCell>
                            <TableCell align="left">Muito Alto</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsRiscos.map((row) => (
                            <TableRow
                                key={row.idade}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.idade} </TableCell>
                                <TableCell component="th" scope="row">{row.baixo} </TableCell>
                                <TableCell align="left">{row.moderado}</TableCell>
                                <TableCell align="left">{row.alto}</TableCell>
                                <TableCell align="left">{row.muitoAlto}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}