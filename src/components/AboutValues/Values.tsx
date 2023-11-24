import React from 'react';

const Values: React.FC = () => {
    const styles = {
        component: {
            display: 'flex',
            flexDirection: 'column',
        },
        cardImg:{
            backgroundColor: 'red',
        },
        cardTitle: {
            backgroundColor: 'blue',
        },
        cardSubTitle: {
            backgroundColor: 'pink',
        },
    };
    return(
        <div style={styles.component}>
            <div><h2 style={styles.component}>Nossos valores</h2></div>
            <div>
                <div>
                    <img style={styles.cardImg}></img>
                    <h3 style={styles.cardTitle}>Embasamento científico</h3>
                    <p style={styles.cardSubTitle}>Essa é a base do nosso trabalho, nossa essência. Você pode conferir a referência bibliográfica ao final de cada texto publicado, sem exceção.</p>
                </div>
                <div>
                    <img style={styles.cardImg}></img>
                    <h3 style={styles.cardTitle}>Praticidade</h3>
                    <p style={styles.cardSubTitle}>Queremos fomentar a prática baseada em evidência e aproximar profissionais dedicados e ciência. Trabalhamos incansavelmente para descomplicar esta aproximação cada dia mais.</p>
                </div>
                <div>
                    <img></img>
                    <h3 style={styles.cardTitle}>Embasamento científico</h3>
                    <p style={styles.cardSubTitle}>Acreditamos que o valor do profissional se conquista pela competência do seu trabalho e reconhecimento de seus resultados. Por isso, o nosso trabalho é empoderar e valorizar o seu todos os dias.</p>
                </div>
            </div>
        </div>
    );
};

export default Values;