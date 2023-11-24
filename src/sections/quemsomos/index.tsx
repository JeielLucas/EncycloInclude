import {Containeer, Container, ContainerGeral, ContainerLimit2, ImageLogo, Itens, Rodape, Subtitle, Textos, Title, WaveImage, EscritoNegrito, TitleValues, SubtitleCard} from "./style"
import imgonda from '../../assets/home/onda 2.png'
import imgrodape from '../../assets/home/onda-curta-b 1 rodape.png'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/home/P1 AZUL ESCURO.png';
import Card from '../../components/Card/card';

import { Header } from "../../components/header"


import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import { Limit } from "../../tools/Limit"
import CardList from "../../components/Card/CardList";



export const AboutUs: React.FC = () => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <ContainerGeral style={{ overflowX: 'hidden' }}>
            <WaveImage id="inicio" src={imgonda} alt="Imagem de Onda" />

            <Header />

            <Limit>
            </Limit>




            <Limit>
                    <Containeer>
                        <Textos>
                            <Title>
                                Feito <EscritoNegrito>por</EscritoNegrito> profissionais de educação física
                            </Title>
                            <Subtitle>
                            Trabalhamos para viabilizar que o profissional incorpore o conhecimento científico atualizado em sua atuação do cotidiana, através da prática baseada em evidência, de um jeito prático e simplificado, garantindo eficiência e segurança ao seu trabalho e, principalmente, sem negligenciar as condições distintas de cada aluno.
                            </Subtitle>
                        </Textos>
                    </Containeer>
                </Limit>

            <Limit>
                <Container>
                    <TitleValues>Nossos valores</TitleValues>
                </Container>
            </Limit>

            <ContainerLimit2>
                <CardList
                />

                <img src={imgrodape} />
            </ContainerLimit2>
        
            






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
                                        <Link to="/quem-somos" style={{ textDecoration: 'none' }}>
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