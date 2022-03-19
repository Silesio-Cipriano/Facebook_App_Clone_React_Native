import React from 'react';
import { ImageProps } from 'react-native';

import {
  Container
} from './styles';
//'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFegniGpZt3JOlRMljgISXx84Ti3jiv0LoTQ&usqp=CAU'

interface Props {
  linkImage: string;
  tamanho?: string;
}

export function MenuPerfil({ linkImage, tamanho }: Props) {
  return (
    <Container source={{ uri: linkImage }} tamanho={tamanho}>

    </Container >
  );
}