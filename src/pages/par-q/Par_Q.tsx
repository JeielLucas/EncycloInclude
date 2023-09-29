import { Container } from '@mui/material';
import React, { useState } from 'react';
import { AnswerOption, Question, QuestionText } from './style';


const PARQQuestions = [
  'Alguma vez um médico lhe disse que você possui um problema do coração e lhe recomendou que só fizesse atividade física sob supervisão médica?',
  'Você sente dor no peito, causada pela prática de atividade física?',
  'Você sentiu dor no peito no último mês?',
  'Você tende a perder a consciência ou cair, como resultado de tonteira ou desmaio?',
  'Você tem algum problema ósseo ou muscular que poderia ser agravado com a prática de atividade física?',
  'Algum médico já lhe recomendou o uso de medicamentos para a sua pressão arterial, para circulação ou coração?',
  'Você tem consciência, através da sua própria experiência ou aconselhamento médico, de alguma outra razão física que impeça sua prática de atividade física sem supervisão médica?',
];

export const Par_Q: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(new Array(PARQQuestions.length).fill(''));

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const shouldSeeDoctor = answers.includes('Sim');

  return (
    <Container>
      <h1>PAR-Q</h1>
      {PARQQuestions.map((question, index) => (
        <Question key={index}>
          <QuestionText>{question}</QuestionText>
          <AnswerOption
            value={answers[index]}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          >
            <option value="">Default</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </AnswerOption>
        </Question>
      ))}
      {shouldSeeDoctor && <p>Recomendado consultar um médico antes de iniciar o programa.</p>}
    </Container>
  );
};


