import styled from "styled-components";

export const ContainerGeral = styled.div`
    overflow-x: hidden;
    width: 100vw;
    margin-top: 168px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    
    @media(max-width: 900px){
        margin-top: 115px;
    }
`;
export const WaveImage = styled.img`
    width: 100%;

    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    object-fit: cover; /* Isso ajuda a evitar que a imagem seja deformada */

    @media (max-width: 768px) {
        /* Defina um tamanho apropriado para a imagem em telas menores */
        width: 100%;
        height: 30%;
    }
`;

// Estilos para a barra de navegação
export const NavbarContainer = styled.div`
   
    display: flex;
    align-items: center;
    color: white;
    height: 135px;
    padding: 0 2rem;
    overflow-x: hidden;
    background-color: red;
  
`;

// Estilos para o logo
export const Logo = styled.img`
    width: 18rem; 
    height: auto;
`;

// Estilos para as opções de navegação
export const NavOptions = styled.ul`
    list-style: none;
    display: flex;

    justify-content: flex-end;
    align-items: center;
    gap: 5rem;
    margin: 0;
    padding: 0;
`;

export const NavItem = styled.li`
    color: #FFF;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    & a{
        text-decoration: none; 
        color: white; 
        &:hover {
            text-decoration:underline ; 
            color: #DCEBF4; 
            border-radius: 5px;
          }
    }
   
`;

export const LoginIcon = styled.img`
    width: 10px;
     
    filter: brightness(0) invert(1);
`;



export const MobileMenuIcon = styled.div`
  display: none; /* Esconde o ícone em telas maiores */
  font-size: 2rem;
  cursor: pointer;
  color: white;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: block; /* Mostra o ícone em telas menores (até 768px) */
  }
`;

interface iMobileMenupROPS {
  open: boolean;
}
// Estilos para o menu de hambúrguer
export const MobileMenu = styled.div<iMobileMenupROPS>`
  display: none; /* Esconde o menu em telas maiores */
  flex-direction: column;
  background-color: #333;
  position: absolute;
  top: 100px; /* Altura da barra de navegação */
  right: 0;
  width: 200px;
  padding: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')}; /* Mostra o menu se estiver aberto */
  }
`;

// Estilos para os links do menu de hambúrguer
export const MobileMenuItem = styled(NavItem)`
  font-size: 1.5rem;
`;




// Estilos para o container do conteúdo principal
export const ContentContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    margin: 0 150px;
    @media(max-width: 900px){
        flex-direction: column;
          margin: 0 20px;
    }
`;

export const Textos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

// Estilos para a imagem redonda à direita do texto
export const RoundedImage = styled.img`
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    margin-left: 2rem; /* Ajuste conforme necessário */
    
    @media(max-width: 1100px){
        width: 25rem;
        height: 25rem;
    }
    @media(max-width: 900px){
        width: 20rem;
        height: 20rem;
    }
    @media(max-width: 768px){
        width: 13rem;
        height: 13rem;
    }
    `;

// Estilos para o título e subtítulo
export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: left;

     @media(max-width: 900px){
       font-size: 1.5rem;
         text-align: center;
    }
    @media(max-width: 768px){
        font-size: 1.2rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.5rem;
    text-align: left;

     @media(max-width: 900px){
       font-size: 1.3rem;
         text-align: center;
    }
    @media(max-width: 768px){
        font-size: 1rem;
    }
`;

export const SliderCustom = styled.div`
    margin: 100px auto;
  width: 100%;



`;


export const ContainerLimit = styled.div`
    width: 100%;
background: rgba(220, 235, 244, 0.50);
mix-blend-mode: darken;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
`;
export const ContainerEmail = styled.div`
    width: 92%;
    height: 21.375rem;
    border-radius: 1.5625rem;
    background: #DCEBF4;
    display: flex;
    flex-direction: row;

    @media(max-width: 768px){
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: pink;
    }

`;
export const TitleEmail = styled.div`
    width: 50%;
    display: flex;
     flex-direction: row;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
      width: 80%;
      text-align: center; 
      padding-bottom: 20px;
    }
    
`;
export const Input = styled.div`
   width: 50%;
     display: flex;
     flex-direction: row;
    align-items: center;
    justify-content: center;
`;





export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;

   @media(max-width: 768px){
      width: 90%;
    }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
  align-items: left;
  width: 410px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TituloCard = styled.div`
    color: #000;
    font-family: Montserrat;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const TitleCard = styled.div`
  width: 70%;
  height: 40px;
  border-radius: 20px;
  background: #3e6dbd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextCard = styled.p`
color: #828282;
font-family: Montserrat;
font-size: 1.875rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const TextCard1 = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 1.875rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const ImageCard = styled.img`
  width: 100%;
  border-radius: 2px;
`;

export const Text = styled.div`
  background-color: green;
  width: 100%;
`;

export const Button = styled.button`
width: 10rem;
height: 2.3rem; 
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
 
  border-radius: 1.5625rem;
  background: rgba(217, 217, 217, 0.40);
  cursor: pointer;

  &:hover {
    background: rgba(217, 217, 217, 0.9);
  }
`;


export const ContainerLimit2 = styled.div`
    width: 100%;
    background: #DCEBF4; 
mix-blend-mode: darken;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 0 0;
`;

export const Containeer = styled.div`
    display: flex;
    width: 93%;
    align-items: center;

     @media(max-width: 768px){
      flex-direction: column;
    }
`;

export const TextEnd = styled.p`
   color: #000;
font-family: Poppins;
font-size: 4.375rem;
font-style: normal;
font-weight: 400;
line-height: normal;

 @media(max-width: 768px){
    font-size: 3.5rem;
    }
`;

export const ImageEnd = styled.img`
   width: 60rem;
     @media(max-width: 768px){
      width: 27rem;
    }
`;


export const Rodape = styled.div`
  height: 15rem; 
  width: 100vw;
  background: #0A284E;
  textAlign: center;
  display: flex;
  color: white;
`;


export const Titulo = styled.p`
color: #FFF;
text-align: left;
font-family: Montserrat;
font-size: 1.25rem;
font-style: normal;
font-weight: 800;
line-height: normal;
&:hover {
    color: #DCEBF4;
}
`;


export const Itens = styled.p`
color: #FFF;
text-align: left;
font-family: Montserrat;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
&:hover {
    color: #DCEBF4;
}
`;

export const ImageLogo = styled.img`
 width: 15rem;
  padding: 1rem;

    @media(max-width: 900px){
        width: 18px;

     }
     @media(max-width: 768px){
        width: 15px;

     }
`;

