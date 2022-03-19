import React from 'react';
import { Feather } from '@expo/vector-icons'

import { useTheme } from 'styled-components';

interface Props {
  iconName: React.ComponentProps<typeof Feather>['name'],
  color?: string;
  title: string;
}
import {
  Container,
  Title
} from './styles';

export function SubMenu({ iconName, color = "white", title }: Props) {
  return (
    <Container>
      <Feather
        name={iconName}
        size={24}
        color={color}
      />
      <Title>{title}</Title>
    </Container>
  );
}