import styled from 'styled-components/native';

interface Props {
  selected?: boolean,
}

export const Container = styled.View<Props>`
 width: 50px;
 padding:10px;
 border-bottom-width:4px;
 border-bottom-color:${({ theme, selected }) => selected ? theme.colors.primary : "transparent"};
 align-items: center;



`;