import styled from 'styled-components/native';

export const Container = styled.View`
 flex-direction: row;
 align-items: center;
 padding:10px;
 
`;


export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_400};
  font-size:12px;
  color:${({ theme }) => theme.colors.text};
  padding:0 10px;
`;