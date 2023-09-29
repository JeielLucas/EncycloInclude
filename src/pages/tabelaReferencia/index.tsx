import { useState } from 'react';
import { InfoContent, NavigationContainer, NavigationItem } from './style';
import { BioquimicaSanguinea, CinturaQuadril, FlexibilidadeAngular, FlexibilidadeLimiar, MassaCorporea, PressaoArterial, ResistenciaMuscBraco, ResistenciaMuscular } from './tables/index';


const NavigationComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <NavigationContainer>
        <NavigationItem onClick={() => handleTabClick(0)}>Taxas da Bioquímica Sangüínea</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(1)}>Classificação da Pressão Arterial em Adultos</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(2)}>Classificação para o Índice de Massa Corpórea</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(3)}>Classificação da Relação entre Cintura e Quadril</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(4)}>Classificações do Percentual de Gordura na Composição Corporal</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(5)}>Tabelas com os Índices do Consumo de Oxigênio</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(6)}>Avaliação da Flexibilidade - Tabelas de Testes Limiares</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(7)}>Avaliação da Flexibilidade - Tabelas de Testes Angulares</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(8)}>Avaliação da Resistência Muscular Localizada - Tabela do Teste de Abdominal</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(9)}>Avaliação da Resistência Muscular Localizada - Tabela do Teste de Flexão de Braço</NavigationItem>

        {/* Adicione mais itens de navegação aqui */}
      </NavigationContainer>

      <InfoContent active={activeTab === 0}>
        <BioquimicaSanguinea />
      </InfoContent>

      <InfoContent active={activeTab === 1}>
        <PressaoArterial />
      </InfoContent>

      <InfoContent active={activeTab === 2}>
        <MassaCorporea />
      </InfoContent>

      <InfoContent active={activeTab === 3}>
        <CinturaQuadril />
      </InfoContent>


      <InfoContent active={activeTab === 6}>
        <FlexibilidadeLimiar />
      </InfoContent>

      <InfoContent active={activeTab === 7}>
        <FlexibilidadeAngular />
      </InfoContent>


      <InfoContent active={activeTab === 8}>
        <ResistenciaMuscular />
      </InfoContent>

      <InfoContent active={activeTab === 9}>
        <ResistenciaMuscBraco />
      </InfoContent>

    </div>
  );
};

export default NavigationComponent;
