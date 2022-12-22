import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-width: 4px;
  border-color: ${({theme }) => theme.colors.secondary.main};
  border-radius: 4px;

  padding: 10px;
  margin: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.primary.onMain};
`;

export const SubTitle = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary.onMain};
`;
