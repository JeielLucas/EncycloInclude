import styled from 'styled-components';

export const Limit = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 2px solid red;

  @media (max-width: 1800px) {
    max-width: 1400px;
  }

  @media (max-width: 1560px) {
    max-width: 1200px;
  }

  @media (max-width: 1260px) {
    max-width: 1024px;
  }

  @media (max-width: 1100px) {
    max-width: 800px;
  }

  @media (max-width: 960px) {
    max-width: 768px;
  }
`;