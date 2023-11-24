import React from 'react';

interface CardProps {
  imageSrc: string;
  paragraphText: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, paragraphText, buttonText }) => {
  const styles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      'align-items': 'center',
      background: 'linear-gradient(to bottom, #0A284E, #183673)',
      height: '30%',
      width: '30%',
      'border-radius': '1.5625rem',
    },
    cardImage: {
        'padding-top': '5vh',
      width: '20vh',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        'align-items': 'center',
        'margin-bottom': '5vh',
    },
    cardParagraph: {
      fontFamily: 'Poppins',
      width: '54%',
      'text-align': 'center',
      color: '#ffffff',
      fontSize: '1rem',
    },
    cardButton: {
        width: '20rem',
        border: 'none',
        height: '3rem',
        backgroundColor: '#6B9FF8',
        color: '#0A284D',
        'font-family': 'Poppins',
        'font-size': '1.5rem',
        'font-weight': '500',
        'border-radius': '1.5625rem',
    },
  };

  return (
    <div style={styles.card}>
      <img src={imageSrc} style={styles.cardImage} alt="Imagem do Card" />
      <div style={styles.cardContent}>
        <p style={styles.cardParagraph}>{paragraphText}</p>
        <button style={styles.cardButton}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
