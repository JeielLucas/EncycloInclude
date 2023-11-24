import { Button, Card, Cards,  Container, ContainerLimit, ImageCard, ImageLogo, Itens, Rodape, TextCard, TextCard1, TitleCard,  TituloCard, WaveImage } from "../home/style"
import imgonda from '../../assets/home/onda 2.png'
import img from '../../assets/home/Rectangle 68.png'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/home/P1 AZUL ESCURO.png';

import { Header } from "../../components/header"


import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Limit } from "../../tools/Limit"
import { ContainerGeral } from "./style";

const data = [
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    {
        title: "Hipertensão",
        image: img,
        titulo: 'Juliana Silva',
        text: "Como a caminhada associada a atividades socioculturais afetam a pressão arterial de indivíduos hipertensos",
    },
    // ... adicione mais objetos JSON se desejar
];

export const Portal: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const limitedData = showAll ? data : data.slice(0, 6);

    return (
        <ContainerGeral style={{ overflowX: 'hidden' }}>
            <WaveImage id="inicio" src={imgonda} alt="Imagem de Onda" />

            <Header />

            <ContainerLimit>
                <Limit>
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        overflow='hidden'
                    >
                        <Container>
                            <Cards>
                                {limitedData.map((item, index) => (
                                    <Card key={index}>
                                        <TitleCard>
                                            <TextCard1>{item.title}</TextCard1>
                                        </TitleCard>
                                        <ImageCard src={item.image} alt="Imagem do cartão" />
                                        <TituloCard>{item.titulo}</TituloCard>
                                        <TextCard>{item.text}</TextCard>
                                    </Card>
                                ))}
                            </Cards>

                            <Button onClick={() => setShowAll(!showAll)}>{showAll ? 'Ver menos' : 'Ver Mais'}</Button>
                        </Container>
                    </Box>
                </Limit>
            </ContainerLimit>


            <Rodape>
                <Box
                    width='100%'
                >
                    <Limit>
                        <Box
                            display={"flex"}
                            flexDirection={smDown ? 'column' : 'row'}
                        >
                            <Box
                                width='100%'
                                display='flex'
                                flexDirection='column'
                                padding={smDown ? '0 10px' : '0'}
                                justifyContent={smDown ? 'center' : 'right'}
                            >
                                <Box>
                                    <a href="#inicio" style={{ textDecoration: 'none' }}>
                                        <Itens>Início</Itens>
                                        {/* <hr style={{ width: '100%', borderColor: 'white' }} /> */}
                                    </a>
                                </Box>

                                <Box
                                    display='flex'
                                    gap={smDown ? 10 : 20}
                                >
                                    <Box  >
                                        <Link to="/portal" style={{ textDecoration: 'none' }}>
                                            <Itens>Portal</Itens>
                                        </Link>
                                        <Link to="/quemsomos" style={{ textDecoration: 'none' }}>
                                            <Itens>Quem somos</Itens>
                                        </Link>
                                        <Link to="/colunistas" style={{ textDecoration: 'none' }}>
                                            <Itens>Colunistas</Itens>
                                        </Link>
                                    </Box>
                                    <Box   >
                                        <Link to="/parceiros" style={{ textDecoration: 'none' }}>
                                            <Itens>Parceiros</Itens>
                                        </Link>
                                        <Link to="/termos-de-uso" style={{ textDecoration: 'none' }}>
                                            <Itens>Termos de uso</Itens>
                                        </Link>
                                        <Link to="/politica-de-privacidade" style={{ textDecoration: 'none' }}>
                                            <Itens>Politica de privacidade</Itens>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                width='100%'
                                display='flex'
                                justifyContent={smDown ? 'center' : 'right'}
                            >
                                <Box
                                    display='flex'
                                    gap='17px'
                                    height='45px'
                                    paddingTop={2}
                                >
                                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                                        <EmailIcon style={{ color: 'white', fontSize: smDown ? '30px' : '32px' }} />
                                    </a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon style={{ color: 'white', fontSize: smDown ? '30px' : '32px' }} />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon style={{ color: 'white', fontSize: smDown ? '30px' : '32px' }} />
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon style={{ color: 'white', fontSize: smDown ? '30px' : '32px' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Limit>
                </Box>
            </Rodape>

            <Box bgcolor='#0A284E' alignItems='center' justifyContent='center' paddingBottom='8px'>
                <Limit >
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent={smDown ? 'center' : 'left'}
                    >
                        <ImageLogo src={logo} alt="Logo" />
                    </Box>

                    <Box
                        display='flex'
                        alignItems='center'
                        textAlign='center'
                        justifyContent='center'
                        color='white'
                        sx={{ fontSize: smDown ? 10 : 11 }}
                    >
                        2023 © FERREIRA E EVARISTO PORTAL DE CONTEUDO LTDA | ENCYCLO EDUCACAO FISICA E SAUDE
                    </Box>
                    <Box
                        display='flex'
                        justifyContent='center'
                        color='white'
                        textAlign='center'
                        padding={smDown ? '0 10px' : '0'}
                        sx={{ fontSize: 12 }}
                    >
                        Todos os direitos reservados. Criado por <strong style={{ fontFamily: 'Montserrat', fontWeight: '700', color: '#F25221', paddingLeft: '0.5rem' }}> Include Jr</strong>
                    </Box>
                </Limit>
            </Box>
        </ContainerGeral>
    )
}