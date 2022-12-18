import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-width: 4px;
  border-color: ${({theme }) => theme.colors.secondary};
  border-radius: 4px;

  padding: 10px;
  margin: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.onPrimary};
`;

export const SubTitle = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.onPrimary};
`;
