import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

interface Props {
  iconName?: React.ComponentProps<typeof Feather>['name'],
  selected?: boolean,
  color?: string;
  imagePost?: string;
  userName: string;
  date: string;
  imagePerfil: string
}

import { MenuPerfil } from '../MenuPerfil';

import {
  Container,
  Header,
  LeftHeader,
  InfoCard,
  PosterName,
  DateInfo,
  RightHeader,
  Photo,
  ActionsButton
} from './styles';
import { SubMenu } from '../SubMenu';

export function PostSimples({ imagePost, userName, date, imagePerfil }: Props) {
  return (
    <Container>
      <Header>
        <LeftHeader>

          <MenuPerfil

            linkImage={imagePerfil}

          />
          <InfoCard>
            <PosterName>
              {userName}
            </PosterName>
            <DateInfo>{date} ◎</DateInfo>
          </InfoCard>
        </LeftHeader>
        <RightHeader>
          <Feather
            name="more-horizontal"
            size={24}
            color="white"
          />
          <Feather
            name="x"
            size={24}
            color="white"
            style={{ marginLeft: 14 }}
          />
        </RightHeader>

      </Header>

      <Photo source={{ uri: imagePost }} />
      <ActionsButton>
        <SubMenu
          iconName='thumbs-up'
          title='Like'
        />
        <SubMenu
          iconName='message-square'
          title='Comment'
        />
        <SubMenu
          iconName='external-link'
          title='Share'
        />
      </ActionsButton>
    </Container>
  );
}