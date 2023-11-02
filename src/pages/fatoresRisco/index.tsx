import { useState } from 'react';
import { InfoContent, NavigationContainer, NavigationItem } from '../tabelaReferencia/style';
import { RiscoCardiaco } from '../../pages/fatoresRisco/riscoCardiaco/RiscoCardiaco';
import { PressãoArterial } from './pressão Arterial/PressãoArterial';
import { DepedenciaDeCigarro } from './depedenciaCigarro/DepedenciaDeCigarro';
import { Obesidade } from './obesidade/Obesidade';
import { QuestionarioEstresse } from './questionarioEstresse/QuestionarioEstresse';


export const NavigationComponentRiscoCardiacos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <NavigationContainer>
        <NavigationItem onClick={() => handleTabClick(0)}>Risco Cardíaco</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(1)}>Pressão Arterial</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(2)}>Dependência do cigarro</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(3)}>Obesidade - IMC (Índice de Massa Corporal)</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(4)}>Questionário de Estresse</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(5)}>Sedentarismo - Índice de Atividade Física</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(6)}>Relação Cintura e Quadril com Risco à Saúde</NavigationItem>
        <NavigationItem onClick={() => handleTabClick(7)}>Relação IMC com Complicadores da Saúde</NavigationItem>
        {/* Adicione mais itens de navegação aqui */}
      </NavigationContainer>

      <InfoContent active={activeTab === 0}>
        <RiscoCardiaco />
      </InfoContent>

      <InfoContent active={activeTab === 1}>
        <PressãoArterial />
      </InfoContent>

      <InfoContent active={activeTab === 2}>
        <DepedenciaDeCigarro />
      </InfoContent>

      <InfoContent active={activeTab === 3}>
        <Obesidade />
      </InfoContent>

      <InfoContent active={activeTab === 4}>
        <QuestionarioEstresse />
      </InfoContent>



    </div>
  );
};


