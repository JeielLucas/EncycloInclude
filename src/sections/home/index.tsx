import { Button, Card, Cards, Containeer, Container, ContainerEmail, ContainerGeral, ContainerLimit, ContainerLimit2, ContentContainer, ImageCard, ImageEnd, ImageLogo, Input, Itens, Rodape, RoundedImage, SliderCustom, Subtitle, TextCard, TextCard1, TextEnd, Textos, Title, TitleCard, TitleEmail, TituloCard, WaveImage } from "./syle"
import imgonda from '../../assets/home/onda 2.png'
import imgredonda from '../../assets/home/img.png'
import imgEnd from '../../assets/home/mockup-pacote 2.png'
import img from '../../assets/home/Rectangle 68.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/home/img2.png'
import img2 from '../../assets/home/img3.png'
import img3 from '../../assets/home/img4.png'
import img4 from '../../assets/home/img5.png'
import img5 from '../../assets/home/img6.png'
import imgrodape from '../../assets/home/onda-curta-b 1 rodape.png'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/home/P1 AZUL ESCURO.png';

import { Header } from "../../components/header"

import styled from "styled-components"
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom"


const patrociniosData = [
    {
        imageUrl: img1,
    },
    {
        imageUrl: img2,
    },
    {
        imageUrl: img3,
    },
    {
        imageUrl: img4,
    },
    {
        imageUrl: img5,
    },
];

const Image = styled.img`
    position:'relative',
    marginTop: '55px',
    width: '280px', 
    height: '280px',
    borderRadius: '10px',
    objectFit: 'cover',
`;

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
    // ... adicione mais objetos JSON se desejar
];



export const Home: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const limitedData = showAll ? data : data.slice(0, 3);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };
    return (
        <ContainerGeral >
            <WaveImage id="inicio" src={imgonda} alt="Imagem de Onda" />
            <Header />

            <ContentContainer>
                <Textos>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
                    <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae mollis sem. Phasellus iaculis venenatis.
                    </Subtitle>
                </Textos>
                <RoundedImage src={imgredonda} alt="Imagem Redonda" />
            </ContentContainer>

            <SliderCustom>
                <Slider {...settings}>
                    {patrociniosData.map((item, index) => (

                        <div key={index}>
                            <Image src={item.imageUrl} alt={`Imagem ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </SliderCustom>


            <ContainerLimit>
                <ContainerEmail>
                    <TitleEmail>
                        <Typography
                            variant="h6"
                            style={{
                                color: '#0A284D',

                                fontSize: '1.5rem',
                                fontStyle: 'normal',
                                fontWeight: 400, // Defina o peso da fonte como bold (negrito)
                                lineHeight: 'normal',
                                padding: smDown ? '0' : '0 11rem',
                            }}
                        >
                            Artigos atualizados
                            semanalmente no conforto
                            da sua <span style={{ fontWeight: 'bold' }}>caixa de entrada</span>

                        </Typography>
                    </TitleEmail>
                    <Input>
                        <input style={{ background: 'white', paddingLeft: '10px', width: '35rem', height: '3rem', border: 0, borderRadius: '1rem' }} type="email" placeholder='E-mail' id="fname" name="fname" />
                    </Input>
                </ContainerEmail>


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
            </ContainerLimit>

            <ContainerLimit2>
                <Containeer>
                    <TextEnd>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </TextEnd>

                    <ImageEnd src={imgEnd} />

                </Containeer>

                <img src={imgrodape} />
            </ContainerLimit2>

            <Rodape>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='left'
                    width='25%'
                    padding='0 40px'
                >

                    <a href="#inicio" style={{ textDecoration: 'none' }}>
                        <Itens>Início</Itens>
                        <hr style={{ width: '100%', borderColor: 'white' }} />
                    </a>

                    <Box>
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
                </Box>
                <Box width='25%' padding='70px 40px'>
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
                <Box
                    width='50%'
                    padding='0 40px'
                    display='flex'
                    gap='20px'
                    justifyContent='right'
                >
                    <Box
                        display='flex'
                        gap='17px'
                        height='45px'
                    >
                        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                            <EmailIcon style={{ color: 'white', fontSize: '38px' }} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon style={{ color: 'white', fontSize: '38px' }} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon style={{ color: 'white', fontSize: '38px' }} />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon style={{ color: 'white', fontSize: '38px' }} />
                        </a>
                    </Box>
                </Box>
            </Rodape>
            <Box bgcolor='#0A284E' alignItems='center' justifyContent='centers' padding='0 25px' height='13rem'>
                <Box >
                    <ImageLogo src={logo} alt="Logo" />
                </Box>

                <Box
                    display='flex'
                    justifyContent='center'
                    color='white'
                    
                >
                    2023 © FERREIRA E EVARISTO PORTAL DE CONTEUDO LTDA | ENCYCLO EDUCACAO FISICA E SAUDE
                </Box>
                <Box
                    display='flex'
                    justifyContent='center'
                    color='white'
                >
                    Todos os direitos reservados. Criado por <strong style={{fontFamily: 'Montserrat', fontWeight: '700', color: '#F25221', paddingLeft: '0.5rem' }}> Include Jr</strong>
                </Box>
            </Box>



        </ContainerGeral>
    )
}