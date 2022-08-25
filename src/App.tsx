import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: black;
`;

const Content = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 22px;
  color: white;
`;

const App = () => {
  return (
    <Container>
      <Content>
        <Title>Styled Components</Title>
      </Content>
    </Container>
  );
};

export default App;
