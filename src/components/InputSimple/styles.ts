import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 260px;
  border:1px ${({ theme }) => theme.colors.text};
  border-radius:26px;
  padding:5px 20px;
  font-family: ${({ theme }) => theme.fonts.roboto_500};
  color:${({ theme }) => theme.colors.text};
`;