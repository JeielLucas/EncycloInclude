import { Container } from '@mui/material';
import React, { useState } from 'react';
import { AnswerSelect, Question, QuestionText, RiskLevel, SectionTitle } from './style';

const RiskLevels: { [key: number]: string } = {
    1: "Sem risco",
    2: "Risco abaixo da média",
    3: "Risco médio",
    4: "Risco moderado",
    5: "Risco alto",
    6: "Risco muito alto",
};

export const RiscoCardiaco: React.FC = () => {
    const [age, setAge] = useState('0');
    const [sex, setSex] = useState('0');
    const [weight, setWeight] = useState('0');
    const [activity, setActivity] = useState('0');
    const [smoking, setSmoking] = useState('0');
    const [bloodPressure, setBloodPressure] = useState('0');
    const [familyHistory, setFamilyHistory] = useState('0');
    const [cholesterol, setCholesterol] = useState('0');
    const [riskLevel, setRiskLevel] = useState<number | null>(null);
    const [riskScore, setRiskScore] = useState<number | 0>(0);

    const calculateRisk = () => {
    
        const weightValue = weight === '10' ? '0' : weight;
        const smokingValue = smoking === '10' ? '0' : smoking;

        const newRiskScore = parseInt(age) + parseInt(sex) + parseInt(weightValue) + parseInt(activity) + parseInt(smokingValue) + parseInt(bloodPressure) + parseInt(familyHistory) + parseInt(cholesterol);
        setRiskScore(newRiskScore);

        if (newRiskScore >= 6 && newRiskScore <= 11) setRiskLevel(1);
        else if (newRiskScore >= 12 && newRiskScore <= 17) setRiskLevel(2);
        else if (newRiskScore >= 18 && newRiskScore <= 24) setRiskLevel(3);
        else if (newRiskScore >= 25 && newRiskScore <= 31) setRiskLevel(4);
        else if (newRiskScore >= 32 && newRiskScore <= 40) setRiskLevel(5);
        else setRiskLevel(null);
    };

    return (
        <Container>
            <h1>AVALIAÇÃO DO RISCO CARDÍACO</h1>

            <Question>
                <QuestionText>Idade:</QuestionText>
                <AnswerSelect value={age} onChange={(e) => setAge(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="1">10 a 20 anos</option>
                    <option value="2">21 a 30 anos</option>
                    <option value="3">31 a 40 anos</option>
                    <option value="4">41 a 50 anos</option>
                    <option value="6">51 a 60 anos</option>
                    <option value="7">Acima de 61 anos</option>
                </AnswerSelect>
            </Question>
            <Question>
                <QuestionText>Sexo:</QuestionText>
                <AnswerSelect value={sex} onChange={(e) => setSex(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="1">Feminino c/ menos de 40 anos</option>
                    <option value="2">Feminino de 40 a 50 anos</option>
                    <option value="3">Feminino c/ mais de 50 anos</option>
                    <option value="4">Masculino</option>
                    <option value="6">Masculino de baixa estatura</option>
                    <option value="7">Masculino de baixa estatura e calvo</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Peso:</QuestionText>
                <AnswerSelect value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="10">Inferior a 2,3Kg do peso normal</option>
                    <option value="1">Menos de 2,3 a mais de 2,3Kg do peso normal</option>
                    <option value="2">De 2,4 a 9,0Kg acima do peso normal</option>
                    <option value="3">De 9,1 a 15,9Kg acima do peso normal</option>
                    <option value="5">De 16 a 22,9Kg acima do peso normal</option>
                    <option value="7">Mais de 23Kg acima do peso normal</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Atividade:</QuestionText>
                <AnswerSelect value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="1">Esforço profissional e recreativo intenso</option>
                    <option value="2">Esforço profissional e recreativo moderado</option>
                    <option value="3">Trabalho sedentário e esforço recreativo intenso</option>
                    <option value="5">Trabalho sedentário e esforço recreativo moderado</option>
                    <option value="6">Trabalho sedentário e esforço recreativo leve</option>
                    <option value="8">Ausência completa de qualquer exercício</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Fumante:</QuestionText>
                <AnswerSelect value={smoking} onChange={(e) => setSmoking(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="10">Não fumante</option>
                    <option value="1">Charuto e/ou cachimbo</option>
                    <option value="2">10 cigarros ou menos por dia</option>
                    <option value="4">11 a 20 cigarros por dia</option>
                    <option value="6">21 a 30 cigarros por dia</option>
                    <option value="10">Mais de 31 cigarros por dia</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Pressão:</QuestionText>
                <AnswerSelect value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="1">Sistólica de 100 a 119 mmHg</option>
                    <option value="2">Sistólica de 120 a 139 mmHg</option>
                    <option value="3">Sistólica de 140 a 159 mmHg</option>
                    <option value="4">Sistólica de 160 a 179 mmHg</option>
                    <option value="6">Sistólica de 180 a 199 mmHg</option>
                    <option value="8">Sistólica de 200 mmHg ou mais</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Doenças na família:</QuestionText>
                <AnswerSelect value={familyHistory} onChange={(e) => setFamilyHistory(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="1">Nenhuma história conhecida de cardiopatia</option>
                    <option value="2">1 parente c/ doença cardiaca e mais de 60 anos</option>
                    <option value="3">2 parentes c/ doença cardiaca e mais de 60 anos</option>
                    <option value="4">1 parente c/ doença cardiaca e menos de 60 anos</option>
                    <option value="6">2 parentes c/ doença cardiaca e menos de 60 anos</option>
                    <option value="7">3 parentes c/ doença cardiaca e menos de 60 anos</option>
                </AnswerSelect>
            </Question>

            <Question>
                <QuestionText>Colesterol:</QuestionText>
                <AnswerSelect value={cholesterol} onChange={(e) => setCholesterol(e.target.value)}>
                <option disabled value="0">Selecione uma opção</option>
                    <option value="1">Abaixo de 180 ou a dieta não contém gorduras animais</option>
                    <option value="2">De 181 a 205 ou a dieta contém 10% de gorduras animais</option>
                    <option value="3">De 206 a 230 ou a dieta contém 20% de gorduras animais</option>
                    <option value="4">De 231 a 255 ou a dieta contém 30% de gorduras animais</option>
                    <option value="5">De 256 a 280 ou a dieta contém 40% de gorduras animais</option>
                    <option value="7">Acima de 281 ou a dieta contém 50% de gorduras animais</option>
                </AnswerSelect>
            </Question>






            <SectionTitle>Fatores de Risco</SectionTitle>
            {/* Adicione outras perguntas e respostas aqui */}
            <button onClick={calculateRisk}>Calcular Risco</button>
            {riskLevel !== null && (
                <>
                    <p>
                        Total: {riskScore}
                    </p>
                    <RiskLevel>
                        Risco: {riskLevel} - {RiskLevels[riskLevel]}
                    </RiskLevel>
                </>
            )}
        </Container>
    );
};