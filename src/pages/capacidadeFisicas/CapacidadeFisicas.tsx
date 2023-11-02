

import { Calculador_vo2_maximo } from './Calculador_vo2_maximo';
import { Calculador_frequencia_cardiaca_maxima } from './Calculador_frequencia_cardiaca_maxima';
import { useState } from 'react';
import { InfoContent, NavigationContainer, NavigationItem } from '../tabelaReferencia/style';

export const CapacidadeFisicas = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
      setActiveTab(index);
    };
    
    return (
        <>

            <NavigationContainer>
                <NavigationItem onClick={() => handleTabClick(0)}>Calculador do Vo2 Máximo</NavigationItem>
                <NavigationItem onClick={() => handleTabClick(1)}>Calculador de Freqüência Cardiaca Máxima e de Treinamento</NavigationItem>

            </NavigationContainer>

            <InfoContent active={activeTab === 0}>
                <Calculador_vo2_maximo />
            </InfoContent>

            <InfoContent active={activeTab === 1}>
                <Calculador_frequencia_cardiaca_maxima />
            </InfoContent>
        </>

    )
}