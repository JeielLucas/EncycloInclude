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

    articulacao: string,
    movimento: string,
    grau: string,

    fonte: string,
) {
    return { articulacao, movimento, grau, fonte };
}

const rows = [
    createData('Ombro', 'Flexão', '0 a 180', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 60', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 180', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 70', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('Cotovelo', 'Flexão', '0 a 150', 'Fonte:  Leighton, 1987'),
    createData('Antebraço', 'Pronação', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('', 'Supinação', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('Punho', 'Extensão', '0 a 70', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio radial', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio ulnar', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('Quadril', 'Flexão', '0 a 120', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Adução', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('Joelho', 'Flexão', '0 a 135', 'Fonte:  Leighton, 1987'),
    createData('Tornozelo', 'Flexão dorsal', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão Plantar', '0 a 50', 'Fonte:  Leighton, 1987'),
    createData('', 'Inversão', '0 a 35', 'Fonte:  Leighton, 1987'),
    createData('', 'Eversão', '0 a 15', 'Fonte:  Leighton, 1987'),
    createData('Coluna Cervical', 'Flexão', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('Coluna Torácica', 'Extensão', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '0 a 60', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('Coluna Lombar', 'Extensão', '0 a 25', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '0 a 45', 'Fonte:  Leighton, 1987'),

];

const rows2 = [
    createData('Ombro', 'Flexão', '0 a 150', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 50', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 180', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('Cotovelo', 'Flexão', '0 a 140', 'Fonte:  Leighton, 1987'),
    createData('Antebraço', 'Pronação', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('', 'Supinação', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('Punho', 'Extensão', '0 a 60', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '0 a 60', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio radial', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio ulnar', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('Quadril', 'Flexão', '0 a 100', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 40', 'Fonte:  Leighton, 1987'),
    createData('', 'Adução', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 40', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 50', 'Fonte:  Leighton, 1987'),
    createData('Joelho', 'Flexão', '0 a 150', 'Fonte:  Leighton, 1987'),
    createData('Tornozelo', 'Flexão dorsal', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão Plantar', '0 a 40', 'Fonte:  Leighton, 1987'),
    createData('', 'Inversão', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('', 'Eversão', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('Coluna Cervical', 'Flexão', '0 a 60', 'Fonte:  Leighton, 1987'),
    createData('Coluna Torácica', 'Extensão', '0 a 75', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '-', 'Fonte:  Leighton, 1987'),
    createData('Coluna Lombar', 'Extensão', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '-', 'Fonte:  Leighton, 1987'),

];

const rows3 = [
    createData('Ombro', 'Flexão', '0 a 180', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 54', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 180', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 70', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('Cotovelo', 'Flexão', '0 a 154', 'Fonte:  Leighton, 1987'),
    createData('Antebraço', 'Pronação', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('', 'Supinação', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('Punho', 'Extensão', '0 a 70', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio radial', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio ulnar', '0 a 35', 'Fonte:  Leighton, 1987'),
    createData('Quadril', 'Flexão', '0 a 125', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 10', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Adução', '0 a 10', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('Joelho', 'Flexão', '0 a 140', 'Fonte:  Leighton, 1987'),
    createData('Tornozelo', 'Flexão dorsal', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão Plantar', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Inversão', '0 a 35', 'Fonte:  Leighton, 1987'),
    createData('', 'Eversão', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('Coluna Cervical', 'Flexão', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('Coluna Torácica', 'Extensão', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '-', 'Fonte:  Leighton, 1987'),
    createData('Coluna Lombar', 'Extensão', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '-', 'Fonte:  Leighton, 1987')

];
const rows4 = [
    createData('Ombro', 'Flexão', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 180', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 55', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('Cotovelo', 'Flexão', '0 a 150', 'Fonte:  Leighton, 1987'),
    createData('Antebraço', 'Pronação', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('', 'Supinação', '0 a 90', 'Fonte:  Leighton, 1987'),
    createData('Punho', 'Extensão', '0 a 70', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '0 a 80', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio radial', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Desvio ulnar', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('Quadril', 'Flexão', '0 a 135', 'Fonte:  Leighton, 1987'),
    createData('', 'Extensão', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('', 'Abdução', '0 a 50', 'Fonte:  Leighton, 1987'),
    createData('', 'Adução', '0 a 30', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação lateral', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação medial', '0 a 35', 'Fonte:  Leighton, 1987'),
    createData('Joelho', 'Flexão', '0 a 135', 'Fonte:  Leighton, 1987'),
    createData('Tornozelo', 'Flexão dorsal', '0 a 20', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão Plantar', '0 a 50', 'Fonte:  Leighton, 1987'),
    createData('', 'Inversão', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Eversão', '-', 'Fonte:  Leighton, 1987'),
    createData('Coluna Cervical', 'Flexão', '-', 'Fonte:  Leighton, 1987'),
    createData('Coluna Torácica', 'Extensão', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '0 a 45', 'Fonte:  Leighton, 1987'),
    createData('', 'Rotação', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão', '-', 'Fonte:  Leighton, 1987'),
    createData('Coluna Lombar', 'Extensão', '-', 'Fonte:  Leighton, 1987'),
    createData('', 'Flexão lateral', '-', 'Fonte:  Leighton, 1987')

];


function createData1(

    articulacao: string,
    movimento: string,
    baixo: string,
    abaixoMedia: string,
    media: string,
    acimaMedia: string,
    alta: string,

    fonte: string,
) {
    return { articulacao, movimento, baixo, abaixoMedia, media, acimaMedia, alta, fonte };
}
const rows5 = [
    createData1('Ombro', 'Flexão/extensão', '< 207', '207 - 223', '224 - 242', '243 - 259', '> 259', 'Fonte:  Leighton, 1987'),
    createData1('', 'Abdução/adução', '< 158', '158 - 171', '172 - 186', '187 - 200', '> 200', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 154', '154 - 171', '172 - 192', '193 - 210', '> 210', 'Fonte:  Leighton, 1987'),
    createData1('Cotovelo', 'Flexão', '< 133', '133 - 143', '144 - 156', '157 - 167', '> 167', 'Fonte:  Leighton, 1987'),
    createData1('Antebraço', 'Pronação/supinação', '< 151', '151 - 170', '171 - 191', '192 - 211', '> 211', 'Fonte:  Leighton, 1987'),
    createData1('Punho', 'Extensão/flexão', '< 112', '112 - 131', '132 - 152', '153 - 172', '> 172', 'Fonte:  Leighton, 1987'),
    createData1('', 'Desvio radial/ulnar', '< 64', '64 - 77', '78 - 92', '92 - 105', '> 105', 'Fonte:  Leighton, 1987'),
    createData1('Quadril', 'Flexão/extensão', '< 50', '50 - 67', '66 - 88', '89 - 106', '> 106', 'Fonte:  Leighton, 1987'),
    createData1('', 'Abdução/adução', '< 41', '41 - 50', '51 - 61', '61 - 71', '> 71', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 59', '59 - 78', '79 - 99', '100 - 119', '> 119', 'Fonte:  Leighton, 1987'),
    createData1('Joelho', 'Flexão/extensão', '< 122', '122 - 133', '134 - 146', '147 - 157', '> 157', 'Fonte:  Leighton, 1987'),
    createData1('Tornozelo', 'Flexão dorsal/Plantar', '< 48', '48 - 58', '59 - 71', '72 - 82', '> 82', 'Fonte:  Leighton, 1987'),
    createData1('', 'Inversão/eversão', '< 30', '30 - 41', '42 - 56', '57 - 68', '> 68', 'Fonte:  Leighton, 1987'),
    createData1('Coluna Cervical', 'Extensão/flexão', '< 107', '107 - 128', '129 - 142', '143 - 160', '> 160', 'Fonte:  Leighton, 1987'),
    createData1('', 'Flexão lateral', '< 74', '74 - 89', '90 - 106', '107 - 122', '> 122', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 141', '141 - 160', '161 - 181', '182 - 201', '> 201', 'Fonte:  Leighton, 1987'),
    createData1('Tronco', 'Extensão/flexão', '< 45', '45 - 62', '63 - 83', '84 - 101', '> 101', 'Fonte:  Leighton, 1987'),
    createData1('', 'Flexão lateral', '< 74', '74 - 89', '90 - 106', '107 - 122', '> 122', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 108', '108 - 126', '127 - 147', '148 - 166', '> 166', 'Fonte:  Leighton, 1987'),

];
const rows6 = [
    createData1('Ombro', 'Flexão/extensão', '< 226', '226 - 242', '243 - 261', '262 - 278', '> 278', 'Fonte:  Leighton, 1987'),
    createData1('', 'Abdução/adução', '< 167', '167 - 180', '181 - 195', '196 - 209', '> 209', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 189', '189 - 206', '207 - 227', '228 - 245', '> 245', 'Fonte:  Leighton, 1987'),
    createData1('Cotovelo', 'Flexão', '< 133', '133 - 143', '144 - 156', '157 - 167', '> 167', 'Fonte:  Leighton, 1987'),
    createData1('Antebraço', 'Pronação/supinação', '< 160', '160 - 179', '180 - 200', '201 - 220', '> 229', 'Fonte:  Leighton, 1987'),
    createData1('Punho', 'Extensão/flexão', '< 136', '136 - 155', '156 - 176', '177 - 196', '> 196', 'Fonte:  Leighton, 1987'),
    createData1('', 'Desvio radial/ulnar', '< 75', '75 - 88', '89 - 101', '102 - 117', '> 117', 'Fonte:  Leighton, 1987'),
    createData1('Quadril', 'Flexão/extensão', '< 82', '82 - 99', '100 - 120', '121 - 138', '> 138', 'Fonte:  Leighton, 1987'),
    createData1('', 'Abdução/adução', '< 45', '45 - 54', '55 - 65', '65 - 75', '> 75', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 90', '90 - 109', '110 - 130', '131 - 150', '> 150', 'Fonte:  Leighton, 1987'),
    createData1('Joelho', 'Flexão/extensão', '< 134', '134 - 144', '145 - 157', '158 - 168', '> 168', 'Fonte:  Leighton, 1987'),
    createData1('Tornozelo', 'Flexão dorsal/Plantar', '< 56', '56 - 66', '67 - 79', '80 - 90', '> 90', 'Fonte:  Leighton, 1987'),
    createData1('', 'Inversão/eversão', '< 39', '39 - 50', '51 - 65', '66 - 77', '> 77', 'Fonte:  Leighton, 1987'),
    createData1('Coluna Cervical', 'Extensão/flexão', '< 125', '125 - 141', '142 - 160', '161 - 177', '> 177', 'Fonte:  Leighton, 1987'),
    createData1('', 'Flexão lateral', '< 84', '84 - 99', '100 - 116', '117 - 132', '> 132', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 158', '158 - 177', '178 - 198', '199 - 218', '> 219', 'Fonte:  Leighton, 1987'),
    createData1('Tronco', 'Extensão/flexão', '< 30', '30 - 47', '48 - 68', '69 - 86', '> 86', 'Fonte:  Leighton, 1987'),
    createData1('', 'Flexão lateral', '< 104', '104 - 119', '120 - 136', '137 - 152', '> 152', 'Fonte:  Leighton, 1987'),
    createData1('', 'Rotação', '< 134', '134 - 152', '153 - 173', '174 - 192', '> 192', 'Fonte:  Leighton, 1987'),

];






export const FlexibilidadeAngular: React.FC = () => {
    return (
        <>
            <Typography variant="h6" noWrap component="div" align="center">
                Tabela da American Academy of Orthopaedic Surgenos
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>

                            <TableCell >Articulação</TableCell>
                            <TableCell align="left">Movimento</TableCell>
                            <TableCell align="left">Graus de Amplitude</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.movimento}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.articulacao} </TableCell>
                                <TableCell component="th" scope="row">{row.movimento} </TableCell>
                                <TableCell align="left">{row.grau}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                Tabela da American Medical Association
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>

                            <TableCell >Articulação</TableCell>
                            <TableCell align="left">Movimento</TableCell>
                            <TableCell align="left">Graus de Amplitude</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <TableRow
                                key={row.movimento}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.articulacao} </TableCell>
                                <TableCell component="th" scope="row">{row.movimento} </TableCell>
                                <TableCell align="left">{row.grau}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                Tabela de Hoppenfeld
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>

                            <TableCell >Articulação</TableCell>
                            <TableCell align="left">Movimento</TableCell>
                            <TableCell align="left">Graus de Amplitude</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows3.map((row) => (
                            <TableRow
                                key={row.movimento}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.articulacao} </TableCell>
                                <TableCell component="th" scope="row">{row.movimento} </TableCell>
                                <TableCell align="left">{row.grau}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                Tabela de Kendall & McCreary
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>

                            <TableCell >Articulação</TableCell>
                            <TableCell align="left">Movimento</TableCell>
                            <TableCell align="left">Graus de Amplitude</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows4.map((row) => (
                            <TableRow
                                key={row.movimento}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.articulacao} </TableCell>
                                <TableCell component="th" scope="row">{row.movimento} </TableCell>
                                <TableCell align="left">{row.grau}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>




            <Typography variant="h6" noWrap component="div" align="center">
                Tabela de Leighton - Para Homens (Amplitude total de uma ação articular em graus)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>

                            <TableCell >Articulação</TableCell>
                            <TableCell align="left">Movimento</TableCell>
                            <TableCell align="left">Baixo</TableCell>

                            <TableCell >Abaixo da Média</TableCell>
                            <TableCell align="left">Média</TableCell>
                            <TableCell align="left">Acima da Média</TableCell>
                            <TableCell align="left">Alta</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows5.map((row) => (
                            <TableRow
                                key={row.movimento}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.articulacao} </TableCell>
                                <TableCell component="th" scope="row">{row.movimento} </TableCell>
                                <TableCell align="left">{row.baixo}</TableCell>
                                <TableCell align="left">{row.abaixoMedia}</TableCell>
                                <TableCell align="left">{row.media}</TableCell>
                                <TableCell align="left">{row.acimaMedia}</TableCell>
                                <TableCell align="left">{row.alta}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



            <Typography variant="h6" noWrap component="div" align="center">
                Tabela de Leighton - Para Muleres (Amplitude total de uma ação articular em graus)
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>

                            <TableCell >Articulação</TableCell>
                            <TableCell align="left">Movimento</TableCell>
                            <TableCell align="left">Baixo</TableCell>

                            <TableCell >Abaixo da Média</TableCell>
                            <TableCell align="left">Média</TableCell>
                            <TableCell align="left">Acima da Média</TableCell>
                            <TableCell align="left">Alta</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows6.map((row) => (
                            <TableRow
                                key={row.movimento}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.articulacao} </TableCell>
                                <TableCell component="th" scope="row">{row.movimento} </TableCell>
                                <TableCell align="left">{row.baixo}</TableCell>
                                <TableCell align="left">{row.abaixoMedia}</TableCell>
                                <TableCell align="left">{row.media}</TableCell>
                                <TableCell align="left">{row.acimaMedia}</TableCell>
                                <TableCell align="left">{row.alta}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </>
    )
}