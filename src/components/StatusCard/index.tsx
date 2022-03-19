import React from 'react';
import { MenuPerfil } from '../MenuPerfil';

import {
  Container,
  Photo,
  Title,
  BorderPerfil,
} from './styles';
interface Props {
  imageBackground: string;
  imagePerfil: string;
  title: string
}
export function StatusCard({ imageBackground, imagePerfil, title }: Props) {
  return (
    <Container>
      <Photo source={{ uri: imageBackground }} />
      <BorderPerfil>
        <MenuPerfil linkImage={imagePerfil} />
      </BorderPerfil>
      <Title>{title}</Title>
    </Container>
  );
}