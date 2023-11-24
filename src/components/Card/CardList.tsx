// CardList.tsx
import React from 'react';
import Card from './card'; // Certifique-se de ajustar o caminho para o componente Card

const CardList: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '40vh', justifyContent: 'center' }}>
      <Card
        imageSrc = "https://i0.wp.com/encyclo.com.br/wp-content/uploads/2023/08/mockup-template-of-male-student-in-classroom-using-an-hp-laptop.webp?w=300&ssl=1"
        paragraphText = "Faça parte da comunidade de parceiros e apoiadores da Encyclo. Tem uma empresa que é apaixonada pela área da educação física como nós? Então, vem crescer com a gente."
        buttonText = "Seja nosso parceiro"
      />
      <Card
        imageSrc = "https://i0.wp.com/encyclo.com.br/wp-content/uploads/2023/08/mockup-template-of-male-student-in-classroom-using-an-hp-laptop.webp?w=300&ssl=1"
        paragraphText = "Faça parte da comunidade de parceiros e apoiadores da Encyclo. Tem uma empresa que é apaixonada pela área da educação física como nós? Então, vem crescer com a gente."
        buttonText = "Seja nosso parceiro"
      />
    </div>
  );
};

export default CardList;
