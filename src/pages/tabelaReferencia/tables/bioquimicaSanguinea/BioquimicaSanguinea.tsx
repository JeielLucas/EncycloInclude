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
    name: string,
    glicose: string,
    fonte: string,
) {
    return { name, glicose, fonte };
}

const rows = [
    createData('Normal', 'Até 100 mg/dl', 'Fonte: Ministério da Saúde (1996)'),
    createData('Elevado', '100 - 139 mg/dl', 'Fonte: Ministério da Saúde (1996)'),
    createData('Diabetes', 'Maior de 140 mg/dl', 'Fonte: Ministério da Saúde (1996)'),
];

function createDatTrigliceridios(
    name: string,
    Trigliceridios: string,
    fonte: string,
) {
    return { name, Trigliceridios, fonte };
}

const rowsTriglicerídios = [
    createDatTrigliceridios('Desejável', 'até 200 mg/dl', 'Fonte: Sociedade Brasileira de Cardiologia (1996)'),
    createDatTrigliceridios('Aumentado', 'maior de 200 mg/dl', 'Fonte: Sociedade Brasileira de Cardiologia (1996)'),
];

function createDataCOLESTEROL(
    name: string,
    colesterol: string,
    fonte: string,
) {
    return { name, colesterol, fonte };
}

const rowsCOLESTEROL = [
    createDataCOLESTEROL('Desejável', 'até 200 mg/dl', 'Fonte: Sociedade Brasileira de Cardiologia (1996)'),
    createDataCOLESTEROL('Limiar', 'de 201 até 239 mg/dl', 'Fonte: Sociedade Brasileira de Cardiologia (1996)'),
    createDataCOLESTEROL('Elevado', 'a partir de 240 mg/dl', 'Fonte: Sociedade Brasileira de Cardiologia (1996)'),
];



function createDataLipidios(
    name: string,
    Desejável: string,
    Limítrofe: string,
    Elevado: string,
    fonte: string,
) {
    return { name, Desejável, Limítrofe, Elevado, fonte };
}

const rowsLipidios = [
    createDataLipidios('Colesterol', '<200 mg/dl', '200-239 mg/dl', '240 mg/dl', 'Fonte: Instituto Nacional de Saúde - EUA'),
    createDataLipidios('LDL - colesterol', '<130 mg/dl', '130-159 mg/dl', '160 mg/dl', 'Fonte: Instituto Nacional de Saúde - EUA'),
    createDataLipidios('HDL - colesterol', 'Proteção', 'Padrão normal', 'Risco', 'Fonte: Instituto Nacional de Saúde - EUA'),
    createDataLipidios('Homens', '55 mg/dl', '35-54 mg/dl', '< 35 mg/dl', 'Fonte: Instituto Nacional de Saúde - EUA'),
    createDataLipidios('Mulheres', '65 mg/dl', '45-64 mg/dl', '< 35 mg/dl', 'Fonte: Instituto Nacional de Saúde - EUA'),
    createDataLipidios('Triglicérides', 'Normal', 'Limítrofe', 'Hipertrigliceridemia', 'Fonte: Instituto Nacional de Saúde - EUA'),
    createDataLipidios('', '<250 mg/dl', '250-500 mg/dl', ' > 500 mg/dl', 'Fonte: Instituto Nacional de Saúde - EUA'),
];

export const BioquimicaSanguinea: React.FC = () => {
    return (

        <>
            <Typography variant="h6" noWrap component="div" align="center">
                TABELA DE VALORES DE REFERÊNCIA PARA GLICEMIA
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Classificação</TableCell>
                            <TableCell align="left">Glicose</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.glicose}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                TABELA DE VALORES DE REFERÊNCIA PARA TRIGLICERÍDIOS PLASMÁTICOS
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Classificação</TableCell>
                            <TableCell align="left">Triglicerídios (mg/dl)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsTriglicerídios.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.Trigliceridios}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Typography variant="h6" noWrap component="div" align="center">
                TABELA DE VALORES DE REFERÊNCIA DOS NÍVEIS PLASMÁTICOS DE COLESTEROL
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Classificação</TableCell>
                            <TableCell align="left">Colesterol (mg/dl)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsCOLESTEROL.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.colesterol}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                VALORES DE REFERÊNCIA PARA ADULTOS - LIPÍDIOS E FRAÇÕES (MAIORES DE 20 ANOS)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Lipídios e suas frações</TableCell>
                            <TableCell align="left">Desejável</TableCell>
                            <TableCell align="left">Limítrofe</TableCell>
                            <TableCell align="left">Elevado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsLipidios.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="left">{row.Desejável}</TableCell>
                                <TableCell align="left">{row.Limítrofe}</TableCell>
                                <TableCell align="left">{row.Elevado}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}