import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  background-color: #007bff;
  flex-direction: column; /* Inicialmente em coluna */
  
  @media (min-width: 768px) {
    flex-direction: row; /* Em telas maiores, em linha */
  }
`;

export const NavigationItem = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #007bff; /* Adicionei esta linha para manter o texto legível */
  }
`;


export const InfoContent = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;