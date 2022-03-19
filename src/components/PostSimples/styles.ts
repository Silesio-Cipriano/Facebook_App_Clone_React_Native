import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding:10px 24px;

`;
export const LeftHeader = styled.View`
  flex-direction: row;

`;
export const InfoCard = styled.View`
  margin-left:10px;
`;
export const PosterName = styled.Text`
  color:${({ theme }) => theme.colors.text};
  font-family:${({ theme }) => theme.fonts.roboto_500}; ;
`;
export const DateInfo = styled.Text`
color:${({ theme }) => theme.colors.text};
  font-family:${({ theme }) => theme.fonts.roboto_400}; 
  opacity:0.5;
`;
export const RightHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Photo = styled.Image`
width: 100%;
height: 250px;
`;
export const ActionsButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding:10px 20px;
`;