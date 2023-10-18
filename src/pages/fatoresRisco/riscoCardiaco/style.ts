import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SectionTitle = styled.h2`
  margin-top: 20px;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const QuestionText = styled.span`
  flex: 1;
  margin-right: 10px;
`;

export const AnswerSelect = styled.select`
  width: 200px;
  height: 30px;
`;

export const RiskLevel = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;
