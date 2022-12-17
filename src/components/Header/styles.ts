import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
`;
