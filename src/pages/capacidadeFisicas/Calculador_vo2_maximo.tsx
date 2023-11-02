
import { useState } from 'react';
import { InfoContent, NavigationContainer, NavigationItem } from '../tabelaReferencia/style';

export const Calculador_vo2_maximo = () => {
    const [active1, setActive1] = useState(0);
    const [active2, setActive2] = useState(0);
    const [active3, setActive3] = useState(0);

    const handleTabClick = (index: number) => {
        setActive1(index);
    };
    const handleTabClick2 = (index: number) => {
        setActive2(index);
    };
    const handleTabClick3 = (index: number) => {
        setActive3(index);
    };

    return (
        <>

                TESTES SEM EXERCÍCIO
            <NavigationContainer>
                <NavigationItem onClick={() => handleTabClick(0)}>Avaliador do VO2 máximo sem exercício físico usando o percentual de gordura</NavigationItem>
                <NavigationItem onClick={() => handleTabClick(1)}>Avaliador do VO2 máximo sem exercício físico usando o IMC</NavigationItem>

            </NavigationContainer>

            <InfoContent active={active1 === 0}>

            </InfoContent>

            <InfoContent active={active1 === 1}>

            </InfoContent>

            TESTES DE CAMINHADA OU CORRIDA
            <NavigationContainer>
                <NavigationItem onClick={() => handleTabClick2(0)}>Teste de caminhada ou corrida de 1.600 m para crianças e adolescentes</NavigationItem>
                <NavigationItem onClick={() => handleTabClick2(1)}>Teste de corrida de 1.000 m para crianças de 8 a 13 anos</NavigationItem>
                <NavigationItem onClick={() => handleTabClick2(2)}>Teste de caminhada de 1 milha (1.600 m) para sedentários e idosos</NavigationItem>
                <NavigationItem onClick={() => handleTabClick2(3)}>Teste de caminhada de 1.200 m para idosos, obesos e sedentários</NavigationItem>
                <NavigationItem onClick={() => handleTabClick2(4)}>Teste de caminhada de 3 Km para idosos, obesos, sedentários e pós cirúrgicos</NavigationItem>
                <NavigationItem onClick={() => handleTabClick2(5)}>Teste de corrida de 2.400 m de Cooper para pessoas ativas</NavigationItem>
                <NavigationItem onClick={() => handleTabClick2(6)}>Teste de corrida e/ou caminhada de 12 minutos (Cooper) para atletas e sedentários</NavigationItem>

            </NavigationContainer>
           

            <InfoContent active={active2 === 0}>

            </InfoContent>

            <InfoContent active={active2 === 1}>

            </InfoContent>

            <InfoContent active={active2 === 2}>

            </InfoContent>

            <InfoContent active={active2 === 3}>

            </InfoContent>
            <InfoContent active={active2 === 4}>

            </InfoContent>

            <InfoContent active={active2 === 5}>

            </InfoContent>

            <InfoContent active={active2 === 6}>

            </InfoContent>

            <InfoContent active={active2 === 7}>

            </InfoContent>


            TESTES DE BANCO
            <NavigationContainer>
                <NavigationItem onClick={() => handleTabClick3(0)}>Teste de Banco de Balke para qualquer idade de ambos os sexos com um bom condicionamento físico</NavigationItem>
                <NavigationItem onClick={() => handleTabClick3(1)}>Teste de Banco de Kacth para ambos os sexos em idade universitária</NavigationItem>
                <NavigationItem onClick={() => handleTabClick3(2)}>Teste de Banco de Nagle para ambos os sexos, de 6 a 70 anos que sejam obesos, cardíacos, pós cirúrgico e escolares</NavigationItem>
            </NavigationContainer>
           

            <InfoContent active={active3 === 0}>

            </InfoContent>

            <InfoContent active={active3 === 1}>

            </InfoContent>

            <InfoContent active={active3 === 2}>

            </InfoContent>

            <InfoContent active={active3 === 3}>

            </InfoContent>
            <InfoContent active={active3 === 4}>

            </InfoContent>

            <InfoContent active={active3 === 5}>

            </InfoContent>

            <InfoContent active={active3 === 6}>

            </InfoContent>

            <InfoContent active={active3 === 7}>

            </InfoContent>
        </>

    )
}