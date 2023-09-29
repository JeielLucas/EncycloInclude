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
    Excelente: string,
    acimaMedia: string,
    media: string,
    abaixoMedia: string,
    fraco: string,
    fonte: string,
) {
    return { idade, Excelente, acimaMedia, media, abaixoMedia, fraco, fonte };
}

const rows = [
    createData('15 - 19', '+ 39', '29 a 38', '23 a 28', '18 a 22', '- 17', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('20 - 29', '+ 36', '29 a 35', '22 a 28', '17 a 21', '- 16', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('30 - 39', '+ 30', '22 a 29', '17 a 21', '12 a 16', '- 11', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('40 - 49', '+ 22', '17 a 21', '13 a 16', '10 a 12', '- 09', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('50 - 59', '+ 21', '13 a 20', '10 a 12', '07 a 09', '- 06', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('60 - 69', '+ 18', '11 a 17', '08 a 10', '05 a 07', '- 04', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),

];


const rowsRiscos = [
    createData('15 - 19', '+ 33', '25 a 32', '18 a 24', '12 a 17', '- 11', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('20 - 29', '+ 30', '21 a 29', '15 a 20', '10 a 14', '- 09', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('30 - 39', '+ 27', '20 a 26', '13 a 19', '08 a 12', '- 07', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('40 - 49', '+ 24', '15 a 23', '11 a 14', '05 a 10', '- 04', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('50 - 59', '+ 21', '11 a 22', '07 a 10', '02 a 06', '- 01', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('60 - 69', '+ 17', '12  a 16', '05 a 11', '02 a 04', '- 01', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),

];



export const ResistenciaMuscBraco: React.FC = () => {
    return (
        <>
            <Typography variant="h6" noWrap component="div" align="center">
                CLASSIFICAÇÃO PARA HOMENS (número de repetições por minuto)
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Idade</TableCell>
                            <TableCell align="left">Excelente</TableCell>
                            <TableCell align="left">Acima da média</TableCell>
                            <TableCell align="left">Média</TableCell>
                            <TableCell align="left">Abaixo da média</TableCell>
                            <TableCell align="left">Fraco</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.idade}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.idade} </TableCell>
                                <TableCell component="th" scope="row">{row.Excelente} </TableCell>
                                <TableCell align="left">{row.acimaMedia}</TableCell>
                                <TableCell align="left">{row.media}</TableCell>
                                <TableCell align="left">{row.abaixoMedia}</TableCell>
                                <TableCell align="left">{row.fraco}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                CLASSIFICAÇÃO PARA MULHERES (número de repetições por minuto)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Idade</TableCell>
                            <TableCell align="left">Excelente</TableCell>
                            <TableCell align="left">Acima da média</TableCell>
                            <TableCell align="left">Média</TableCell>
                            <TableCell align="left">Abaixo da média</TableCell>
                            <TableCell align="left">Fraco</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsRiscos.map((row) => (
                            <TableRow
                                key={row.idade}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.idade} </TableCell>
                                <TableCell component="th" scope="row">{row.Excelente} </TableCell>
                                <TableCell align="left">{row.acimaMedia}</TableCell>
                                <TableCell align="left">{row.media}</TableCell>
                                <TableCell align="left">{row.abaixoMedia}</TableCell>
                                <TableCell align="left">{row.fraco}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}