// CardList.tsx
import React from 'react';
import Card from './Card'; // Certifique-se de ajustar o caminho para o componente Card
import img1 from '../../assets/quemsomos/parceiro.png'
import img2 from '../../assets/quemsomos/edit.png'

const CardList: React.FC = () => {
  const styles = {
    list: {
      'padding-top': '10vh',
      display: 'flex', 
      gap: '40vh', 
      justifyContent: 'center'
    },
  }
  return (
    <div style={styles.list}>
      <Card
        imageSrc = {img1}
        paragraphText = "Faça parte da comunidade de parceiros e apoiadores da Encyclo. Tem uma empresa que é apaixonada pela área da educação física como nós? Então, vem crescer com a gente."
        buttonText = "Seja nosso parceiro"
      />
      <Card
        imageSrc = {img2}
        paragraphText = "Seja um divulgador científico na sua área de interesse e ajude a capacitar profissionais e estudantes da área. Todas as solicitações estão sujeitas a aprovação por parte de nossa frente de produção científica."
        buttonText = "Seja colunista"
      />
    </div>
  );
};

export default CardList;
