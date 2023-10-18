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
    sistolica: string,
    diastolica: string,
    classificacao: string,
    reavaliacao: string,
    fonte: string,
) {
    return { sistolica, diastolica, classificacao, reavaliacao, fonte };
}

const rows = [
    createData('<130', '<85', 'Normal', 'Reavaliar em 01 ano', 'Fonte: III Consenso de Hipertensão Arterial - SBC'),
    createData('130 A 139', '90 A 99', 'Normal - Limítrofe', 'Reavaliar em 06 meses', 'Fonte: III Consenso de Hipertensão Arterial - SBC'),
    createData('140 A 159', '85 A 89', 'Hipertensão Leve', 'A cada 02 meses', 'Fonte: III Consenso de Hipertensão Arterial - SBC'),
    createData('160 A 179', '100 A 109', 'Hipertensão Moderada', 'A cada 01 mês', 'Fonte: III Consenso de Hipertensão Arterial - SBC'),
    createData('> OU = 180', '> OU = 110', 'Hipertensão Grave', 'Imediato', 'Fonte: III Consenso de Hipertensão Arterial - SBC'),
    createData('> OU = 140', '> 90', 'Hipertensão Sistólica', 'A cada 02 meses', 'Fonte: III Consenso de Hipertensão Arterial - SBC'),
];

function createDatTrigliceridios(
    Categoria: string,
    sistolica: string,
    diastolica: string,
    fonte: string,
) {
    return { Categoria, sistolica, diastolica, fonte };
}

const rowsPresaoArterial = [
    createDatTrigliceridios('Ótima', '< 120', '< 80', 'Fonte: National Institutes of Health - 1997'),
    createDatTrigliceridios('Normal', '120 - 129', '80 - 84', 'Fonte: National Institutes of Health - 1997'),
    createDatTrigliceridios('Normal Alta', '130 - 139', '85 - 89', 'Fonte: National Institutes of Health - 1997'),
    createDatTrigliceridios('Hipertensão', '', '', 'Fonte: National Institutes of Health - 1997'),
    createDatTrigliceridios('Estágio 1 ( Leve)', '140 - 159', '90 - 99', 'Fonte: National Institutes of Health - 1997'),
    createDatTrigliceridios('Hipertensão', '', '', 'Fonte: National Institutes of Health - 1997'),
    createDatTrigliceridios('Estágio 2 (Moderada)', '160 - 179', '100 - 109', 'Fonte: National Institutes of Health - 1997'),
    createDatTrigliceridios('Estágio 3 (Grave)', 'Maior ou igual a 180', 'Maior ou igual a 110', 'Fonte: National Institutes of Health - 1997'),
    
];

function createDataPressaoSanguinea(
    sistolica: string,
    diastolica: string,
    categoria: string,
    fonte: string,
) {
    return { sistolica, diastolica, categoria, fonte };
}

const PressaoSanguinea = [
    createDataPressaoSanguinea('< 130', '< 85', 'Normal', 'Fonte: Joint Committe on Detection, and Treatment of High Blood Pressure - 1993'),
    createDataPressaoSanguinea('130 - 139', '85 - 89', 'Normal Alta', 'Fonte: Joint Committe on Detection, and Treatment of High Blood Pressure - 1993'),
    createDataPressaoSanguinea('140 - 159', '90 - 99', 'Hipertensão branda (Estágio 1)', 'Fonte: Joint Committe on Detection, and Treatment of High Blood Pressure - 1993'),
    createDataPressaoSanguinea('160 - 179', '100 - 119', 'Hipertensão moderada (Estágio 2)', 'Fonte: Joint Committe on Detection, and Treatment of High Blood Pressure - 1993'),
    createDataPressaoSanguinea('180 - 209', '110 - 119', 'Hipertensão grave (Estágio 3)', 'Fonte: Joint Committe on Detection, and Treatment of High Blood Pressure - 1993'),
    createDataPressaoSanguinea('> ou = 210', '> ou = 120', 'Hipertensão muito grave (Estágio 4)', 'Fonte: Joint Committe on Detection, and Treatment of High Blood Pressure - 1993'),
 
];


export const PressaoArterial: React.FC = () => {
    return (
        <>
            <Typography variant="h6" noWrap component="div" align="center">
                CLASSIFICAÇÃO DA PRESSÃO ARTERIAL EM ADULTOS
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Pressão Sistólica</TableCell>
                            <TableCell align="left">Pressão Diastólica</TableCell>
                            <TableCell align="left">Classificação</TableCell>
                            <TableCell align="left">Reavaliação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.sistolica}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.sistolica}
                                </TableCell>
                                <TableCell align="left">{row.diastolica}</TableCell>
                                <TableCell align="left">{row.classificacao}</TableCell>
                                <TableCell align="left">{row.reavaliacao}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                Classificação da Pressão  Arterial em Adultos maiores de 18 anos
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Pressão Sistólica (mm hg)</TableCell>
                            <TableCell align="left">Pressão Diastólica (mm hg)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsPresaoArterial.map((row) => (
                            <TableRow
                                key={row.Categoria}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.Categoria} </TableCell>
                                <TableCell component="th" scope="row">{row.sistolica} </TableCell>
                                <TableCell align="left">{row.diastolica}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Typography variant="h6" noWrap component="div" align="center">
            Classificação da Pressão Sangüínea para Adultos (Igual ou Superior 18 anos)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Sistólica (mm Hg)</TableCell>
                            <TableCell align="left">Diastólica (mm Hg)</TableCell>
                            <TableCell align="left">Categoria</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {PressaoSanguinea.map((row) => (
                            <TableRow
                                key={row.categoria}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.sistolica}
                                </TableCell>
                                <TableCell align="left">{row.diastolica}</TableCell>
                                <TableCell align="left">{row.categoria}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}