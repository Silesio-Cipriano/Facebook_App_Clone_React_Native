import React from 'react';
import { Feather } from '@expo/vector-icons'

import {
  Container
} from './styles';
import { useTheme } from 'styled-components';

interface Props {
  iconName: React.ComponentProps<typeof Feather>['name'],
  selected?: boolean,
  color?: string;
}




export function MenuButton({ iconName, selected = false, color }: Props) {
  const theme = useTheme();
  return (
    <Container selected={selected}>
      <Feather
        name={iconName}
        size={20}
        color={selected ? theme.colors.primary : "white"}
      />
    </Container>
  );
}