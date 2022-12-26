import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 20px;
  margin-top: 30px;
  justify-content: space-around;
`;
