import styled from 'styled-components/native';

export const Container = styled.View`
 margin-right:10px;
 width: 120px;
  height: 180px;
 margin-bottom:20px;

`;

export const Photo = styled.Image`
  width: 120px;
  height: 180px;
  border-radius:10px;
`;
export const Title = styled.Text`
  color:${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.roboto_500};
  margin-top:-40px;
  text-align: center;
`;

export const BorderPerfil = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 45px;
 height: 45px;
 align-items: center;
  justify-content: center;
 border-radius:22.5px;

 position: absolute;
 margin:10px 5px;

`;