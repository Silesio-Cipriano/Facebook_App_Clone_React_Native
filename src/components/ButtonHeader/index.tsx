import React from 'react';
import { Feather } from '@expo/vector-icons'

import {
  Container
} from './styles';

interface Props {
  iconName: React.ComponentProps<typeof Feather>['name']
}


export function ButtonHeader({ iconName }: Props) {
  return (
    <Container>
      <Feather
        name={iconName}
        size={24}
        color="white"
      />
    </Container>
  );
}