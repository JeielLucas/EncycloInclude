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

    classificacao: string,
    faixa1: string,
    faixa2: string,
    faixa3: string,
    faixa4: string,
    faixa5: string,

    fonte: string,
) {
    return { classificacao, faixa1, faixa2, faixa3, faixa4, faixa5, fonte };
}

const rows = [
    createData('Alta', '48', '45,5', '43', '40,5', '38', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),
    createData('Média ', '33- 45,5', '30,5 - 43 ', '28 – 40,5', '25,5 - 38', '23 – 35,5', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),
    createData('Abaixo da Média', '25,5 – 30,5', '23 - 28', '20 – 25,5', '18 - 23 ', '23 – 35,5', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),
    createData('Baixa', '< 23', '< 20', '< 18', '< 15', '< 12,5', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),

];


const rowsRiscos = [
    createData('Alta', '56', '53,5', '51', '48,5', '45,5', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),
    createData('Média ', '40,5 – 53,5', '38 -51', '35,5 – 48,5', '33 – 45,5', '30,5 - 43', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),
    createData('Abaixo da Média', '33 - 38', '30,5 – 35,5', '28 - 33', '25,5 – 30,5', '23 - 28 ', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),
    createData('Baixa', '< 30,5', '< 28', '< 25,5', '< 23', '< 20', 'Fonte: Programa de Condicionamento Físico da ACMS – Manole – 1999 pág. 37'),

];


function createData1(

    classificacao: string,
    faixa1: string,
    faixa2: string,
    faixa3: string,
    faixa4: string,
    faixa5: string,
    faixa6: string,
    fonte: string,
) {
    return { classificacao, faixa1, faixa2, faixa3, faixa4, faixa5, faixa6, fonte };
}


const rows1 = [
    createData1('Excelente', '> 39', '> 40', '> 38', '> 35', '> 35', '> 33', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Acima da Média', '34 - 38', '34 - 39', '33 - 37', '29 - 34', '28 - 34', '25 - 32', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Média', '29 - 33', '30 - 33', '28 - 32', '24 - 28', '24 - 27', '20 - 24', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Abaixo da Média', '24 - 28', '25 - 29', '23 - 27', '18 - 23', '16 - 23', '15 - 19', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Ruim', '< 23', '< 24', '< 22', '< 17', '< 15', '< 14', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),

];

const rows2 = [
    createData1('Excelente', '> 43', '> 41', '> 41', '> 38', '> 39', '> 35', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Acima da Média', '38 - 42', '37 - 40', '36 - 40', '34 - 37', '33 - 38', '31 - 34', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Média', '34 - 37', '33 - 36', '32 - 35', '30 - 33', '30 - 32', '27 - 30', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Abaixo da Média', '29 - 33', '28 - 32', '27 - 31', '25 - 29', '25 - 29', '23 - 26', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
    createData1('Ruim', '< 28', '< 27', '< 26', '< 24', '< 24', '< 22', 'Fonte: Canadian Standardized Teste of Fitness (CSTF)'),
];


function createData2(

    classificacao: string,
    faixa1: string,
    fonte: string,
) {
    return { classificacao, faixa1, fonte };
}

const rows3 = [
    createData2('Excelente', '22 ou mais', 'Fonte:Pollock, M. L. & Wilmore J. H., 1993'),
    createData2('Bom', 'Entre 19 - 21', 'Fonte:Pollock, M. L. & Wilmore J. H., 1993'),
    createData2('Médio', 'Entre 14 - 18', 'Fonte:Pollock, M. L. & Wilmore J. H., 1993'),
    createData2('Regular', 'Entre 12 - 13', 'Fonte:Pollock, M. L. & Wilmore J. H., 1993'),
    createData2('Fraco', '11 ou menos', 'Fonte:Pollock, M. L. & Wilmore J. H., 1993'),

];




export const FlexibilidadeLimiar: React.FC = () => {
    return (
        <>
            <Typography variant="h6" noWrap component="div" align="center">
                Sentar e Alcançar Modificado - Masculino - sem banco (em Centímetros)
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>

                            <TableCell >Classificação</TableCell>
                            <TableCell align="left">20 - 29</TableCell>
                            <TableCell align="left">30 - 39</TableCell>
                            <TableCell align="left">40 - 49</TableCell>
                            <TableCell align="left">50 – 59</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.classificacao}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.classificacao} </TableCell>
                                <TableCell component="th" scope="row">{row.faixa1} </TableCell>
                                <TableCell align="left">{row.faixa2}</TableCell>
                                <TableCell align="left">{row.faixa3}</TableCell>
                                <TableCell align="left">{row.faixa4}</TableCell>
                                <TableCell align="left">{row.faixa5}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                Sentar e Alcançar Modificado - Feminino  -  sem banco (em Centímetros)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Classificação</TableCell>
                            <TableCell align="left">20 - 29</TableCell>
                            <TableCell align="left">30 - 39</TableCell>
                            <TableCell align="left">40 - 49</TableCell>
                            <TableCell align="left">50 – 59</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsRiscos.map((row) => (
                            <TableRow
                                key={row.classificacao}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.classificacao} </TableCell>
                                <TableCell component="th" scope="row">{row.faixa1} </TableCell>
                                <TableCell align="left">{row.faixa2}</TableCell>
                                <TableCell align="left">{row.faixa3}</TableCell>
                                <TableCell align="left">{row.faixa4}</TableCell>
                                <TableCell align="left">{row.faixa5}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




            <Typography variant="h6" noWrap component="div" align="center">
                Sentar e Alcançar  - Masculino - com banco (em Centímetros)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Classificação</TableCell>
                            <TableCell align="left">20 - 29</TableCell>
                            <TableCell align="left">30 - 39</TableCell>
                            <TableCell align="left">40 - 49</TableCell>
                            <TableCell align="left">50 – 59</TableCell>
                            <TableCell align="left">60 – 69</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows1.map((row) => (
                            <TableRow
                                key={row.classificacao}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.classificacao} </TableCell>
                                <TableCell component="th" scope="row">{row.faixa1} </TableCell>
                                <TableCell align="left">{row.faixa2}</TableCell>
                                <TableCell align="left">{row.faixa3}</TableCell>
                                <TableCell align="left">{row.faixa4}</TableCell>
                                <TableCell align="left">{row.faixa5}</TableCell>
                                <TableCell align="left">{row.faixa6}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h6" noWrap component="div" align="center">
                Sentar e Alcançar -  Feminino - com banco (em Centímetros)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Classificação</TableCell>
                            <TableCell align="left">20 - 29</TableCell>
                            <TableCell align="left">30 - 39</TableCell>
                            <TableCell align="left">40 - 49</TableCell>
                            <TableCell align="left">50 – 59</TableCell>
                            <TableCell align="left">60 – 69</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <TableRow
                                key={row.classificacao}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.classificacao} </TableCell>
                                <TableCell component="th" scope="row">{row.faixa1} </TableCell>
                                <TableCell align="left">{row.faixa2}</TableCell>
                                <TableCell align="left">{row.faixa3}</TableCell>
                                <TableCell align="left">{row.faixa4}</TableCell>
                                <TableCell align="left">{row.faixa5}</TableCell>
                                <TableCell align="left">{row.faixa6}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h6" noWrap component="div" align="center">
            Sentar e Alcançar - com banco (em Centímetros) - Masculino e Feminino
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Classificação</TableCell>
                            <TableCell align="left">Faixa</TableCell>
    
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows3.map((row) => (
                            <TableRow
                                key={row.classificacao}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.classificacao} </TableCell>
                                <TableCell component="th" scope="row">{row.faixa1} </TableCell>
                        
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}