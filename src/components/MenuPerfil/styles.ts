import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

interface PropsImage extends ImageProps {
  tamanho?: string;
}

export const Container = styled.Image<PropsImage>`

 width: ${({ tamanho }) => tamanho ? 30 : 40}px;
 height:  ${({ tamanho }) => tamanho ? 30 : 40}px;
 align-items: center;

 border-radius: ${({ tamanho }) => tamanho ? 15 : 20}px;
`;