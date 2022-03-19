import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color: ${({ theme }) => theme.colors.background};
  opacity:0.9;
 padding-top:40px;
`;

export const LogoAndSearch = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
 padding:0 24px;

  justify-content: space-between;
`;



export const Logo = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  font-family:${({ theme }) => theme.fonts.roboto_700};
`;

export const LeftHeader = styled.View`
  flex-direction: row;
`;

export const DownHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top:10px;
`;


export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color:  ${({ theme }) => theme.colors.text};;
`;

export const MindSpace = styled.View`
  flex-direction: row;
  padding:0 24px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  margin:20px 0;
`;

export const SubMenus = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding:10px 24px;
`;

export const SeparatorBackground = styled.View`
  height: 15px;
  width: 100%;
background-color: #221D26;
`;

export const SubMenusScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 30, paddingBottom: 0 }
})`
  padding:10px 24px;
  padding-top:30px;
  
`;

export const Scroll = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})`
`;