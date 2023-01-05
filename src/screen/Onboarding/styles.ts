import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: space-between;
`;

export const Content  = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xxl}px;
`;

export const ContainerInput = styled.View`
  padding: 20px;
`;
