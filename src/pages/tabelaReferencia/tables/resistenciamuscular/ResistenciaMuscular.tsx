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
    createData('15 - 19', '+ 48', '42 a 47', '38 a 41', '33 a 37', '- 32', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('20 - 29', '+ 43', '37 a 42', '33 a 36', '29 a 32', '- 28', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('30 - 39', '+ 36', '31 a 35', '27 a 30', '22 a 26', '- 21', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('40 - 49', '+ 31', '26 a 30', '22 a 25', '17 a 21', '- 16', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('50 - 59', '+ 26', '22 a 25', '18 a 21', '13 a 17', '- 12', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('60 - 69', '+ 23', '17 a 22', '12 a 16', '07 a 11', '- 06', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),

];


const rowsRiscos = [
    createData('15 - 19', '+ 42', '36 a 41', '32 a 35', '27 a 31', '- 26', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('20 - 29', '+ 36', '31 a 35', '25 a 30', '21 a 24', '- 20', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('30 - 39', '+ 29', '24 a 28', '20 a 23', '15 a 19', '- 14', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('40 - 49', '+ 25', '20 a 24', '15 a 19', '07 a 14', '- 06', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('50 - 59', '+ 19', '12 a 18', '05 a 11', '03 a 04', '- 02', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),
    createData('60 - 69', '+ 16', '12 a 15', '04 a 11', '02 a 03', '- 01', 'Fonte: Pollock, M. L. & Wilmore J. H., 1993'),

];



export const ResistenciaMuscular: React.FC = () => {
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