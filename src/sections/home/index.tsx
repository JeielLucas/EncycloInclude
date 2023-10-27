import { Button, Card, Cards, Containeer, Container, ContainerEmail, ContainerGeral, ContainerLimit, ContainerLimit2, ContentContainer, ImageCard, ImageEnd, ImageLogo, Input, Itens, Rodape, RoundedImage, Subtitle, TextCard, TextCard1, TextEnd, Textos, Title, TitleCard, TitleEmail, TituloCard, WaveImage } from "./syle"
import imgonda from '../../assets/home/onda 2.png'
import imgredonda from '../../assets/home/img.png'
import imgEnd from '../../assets/home/mockup-pacote 2.png'
import img from '../../assets/home/Rectangle 68.png'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../../assets/home/img2.png'
// import img2 from '../../assets/home/img3.png'
// import img3 from '../../assets/home/img4.png'
// import img4 from '../../assets/home/img5.png'
// import img5 from '../../assets/home/img6.png'
import imgrodape from '../../assets/home/onda-curta-b 1 rodape.png'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/home/P1 AZUL ESCURO.png';

import { Header } from "../../components/header"


import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Limit } from "../../tools/Limit"



// const patrociniosData = [
//     {
//         imageUrl: img1,
//     },
//     {
//         imageUrl: img2,
//     },
//     {
//         imageUrl: img3,
//     },
//     {
//         imageUrl: img4,
//     },
//     {
//         imageUrl: img5,
//     },
// ];

// const Image = styled.img`

//     display: block;
//   margin: 0 auto;
//   width: 100%;
// `;

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

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     centerMode: true,

    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //             },
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };
    return (
        <ContainerGeral style={{ overflowX: 'hidden' }}>
            <WaveImage id="inicio" src={imgonda} alt="Imagem de Onda" />

            <Header />

            <Box>
                <Limit>
                    <ContentContainer>
                        <Textos>
                            <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
                            <Subtitle>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae mollis sem. Phasellus iaculis venenatis.
                            </Subtitle>
                        </Textos>
                        <RoundedImage src={imgredonda} alt="Imagem Redonda" />

                    </ContentContainer>
                </Limit>
            </Box>

            {/* <SliderCustom>
                <Slider {...settings}>
                    {patrociniosData.map((item, index) => (
                        <div

                            key={index}>
                            <Image src={item.imageUrl} alt={`Imagem ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </SliderCustom> */}




            <ContainerLimit>
                <Limit>
                    <Box
                   
                     display= 'flex'
                     flexDirection= 'column'
                     justifyContent= 'center'
                     alignItems='center'
                     overflow='hidden'
                    
                    >
                        <ContainerEmail>
                            <TitleEmail>
                                <Typography
                                    variant="h6"
                                    style={{
                                        color: '#0A284D',

                                        fontSize: smDown ? '1.2rem' : '1.5rem',
                                        fontStyle: 'normal',
                                        fontWeight: 400, // Defina o peso da fonte como bold (negrito)
                                        lineHeight: 'normal',
                                        padding: smDown ? '0' : '0 5rem',
                                    }}
                                >
                                    Artigos atualizados
                                    semanalmente no conforto
                                    da sua <span style={{ fontWeight: 'bold' }}>caixa de entrada</span>

                                </Typography>
                            </TitleEmail>
                            <Input>
                                <input style={{ background: 'white', paddingLeft: '10px', width: '80%', height: '3rem', border: 0, borderRadius: '1rem' }} type="email" placeholder='E-mail' id="fname" name="fname" />
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
                    </Box>
                </Limit>
            </ContainerLimit>

            <ContainerLimit2>
                <Limit>
                    <Containeer>
                        <TextEnd>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </TextEnd>

                        <ImageEnd src={imgEnd} />

                    </Containeer>

                </Limit>
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

            {/* <Rodape style={{ overflowX: 'hidden' }}>
                <Limit >
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='left'
                        padding={smDown ? '0 40px' : '0'}
                        bgcolor={'green'}
                        //width={smDown ? '100%' : '50%'}
                    >

                        <a href="#inicio" style={{ textDecoration: 'none' }}>
                            <Itens>Início</Itens>
                            <hr style={{ width: '100%', borderColor: 'white' }} />
                        </a>

                        <Box
                            display='flex'
                            gap={smDown ? 12 : 20}
                            width='100%'

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
                       // width={smDown ? '100%' : '50%'}
                        padding={smDown ? '0' : '0 40px'}
                        display='flex'
                        gap='20px'
                        bgcolor={'pink'}
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
                </Limit>
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
                    sx={{ fontSize: smDown ? 12 : 12 }}
                >
                    Todos os direitos reservados. Criado por <strong style={{ fontFamily: 'Montserrat', fontWeight: '700', color: '#F25221', paddingLeft: '0.5rem' }}> Include Jr</strong>
                </Box>
                </Limit>
            </Box> */}




        </ContainerGeral>
    )
}