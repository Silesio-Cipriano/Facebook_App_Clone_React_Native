import React from 'react';
import { ButtonHeader } from '../../components/ButtonHeader';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  Logo,
  LeftHeader,
  LogoAndSearch,
  DownHeader,
  Separator,
  MindSpace,
  SubMenus,
  SeparatorBackground,
  SubMenusScroll,
  Scroll
} from './styles';
import { MenuButton } from '../../components/MenuButton';
import { StatusBar } from 'react-native';
import { MenuPerfil } from '../../components/MenuPerfil';
import { InputSimple } from '../../components/InputSimple';
import { SubMenu } from '../../components/SubMenu';
import { StatusCard } from '../../components/StatusCard';
import { PostSimples } from '../../components/PostSimples';

interface Props {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function Home() {
  const data = [
    'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    , 'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    , 'https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    , 'https://images.pexels.com/photos/3484061/pexels-photo-3484061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  ]
  const statusData = data;

  const perfilData = [
    'https://avatars.githubusercontent.com/u/68440141?v=4',
    'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ]

  const userName = [
    'Cipriano Silesio',
    'Ethan Hedimerx',
    'Helena da Sifa',
    'Muanazamo Zacarias',
    'Leuderio Cipriano'
  ]

  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={"transparent"}
      />
      <Header>
        <LogoAndSearch>

          <Logo>facebook</Logo>
          <LeftHeader>
            <ButtonHeader iconName='search' />
            <ButtonHeader iconName='message-circle' />
          </LeftHeader>
        </LogoAndSearch>
        <DownHeader>
          <MenuButton
            iconName='home'
            selected
          />

          <MenuButton
            iconName='airplay'
          />
          <MenuButton
            iconName='shopping-bag'
          />

          <MenuButton
            iconName='users'
          />

          <MenuButton
            iconName='bell'
          />
          <MenuPerfil

            linkImage='https://avatars.githubusercontent.com/u/68440141?v=4'
            tamanho='sim'
          />
        </DownHeader>
      </Header>
      <Separator />
      <Scroll>

        <MindSpace>
          <MenuPerfil

            linkImage='https://avatars.githubusercontent.com/u/68440141?v=4'

          />
          <InputSimple />
        </MindSpace>
        <Separator />

        <SubMenus>
          <SubMenu
            iconName='video'
            title="Live"
            color="red"
          />

          <SubMenu
            iconName='image'
            title="Photo"
            color="green"

          />

          <SubMenu
            iconName='command'
            title="Room"
            color="yellow"

          />
        </SubMenus>

        <SeparatorBackground />
        <SubMenusScroll
        >
          <StatusCard
            imageBackground={statusData[3]}
            imagePerfil={perfilData[0]}
            title={userName[0]}
          />

          <StatusCard
            imageBackground={statusData[0]}
            imagePerfil={perfilData[1]}
            title={userName[1]}

          />
          <StatusCard
            imageBackground={statusData[1]}
            imagePerfil={perfilData[2]}
            title={userName[2]}


          />
          <StatusCard
            imageBackground={statusData[2]}
            imagePerfil={perfilData[3]}
            title={userName[3]}


          />
          <StatusCard
            imageBackground={statusData[0]}
            imagePerfil={perfilData[4]}
            title={userName[4]}


          />
        </SubMenusScroll>

        <SeparatorBackground />
        <PostSimples
          imagePost={data[0]}
          userName={userName[0]}
          date="Thu at 10:05 AM"
          imagePerfil={perfilData[0]}

        />
        <SeparatorBackground />

        <PostSimples
          imagePost={data[1]}
          userName={userName[1]}
          date="Thu at 10:05 AM"
          imagePerfil={perfilData[1]}

        />
        <SeparatorBackground />

        <PostSimples
          imagePost={data[2]}
          userName={userName[2]}
          date="Thu at 10:05 AM"
          imagePerfil={perfilData[2]}


        />
        <SeparatorBackground />

        <PostSimples
          imagePost={data[3]}
          userName={userName[3]}
          date="Thu at 10:05 AM"
          imagePerfil={perfilData[3]}


        />
        <SeparatorBackground />

      </Scroll>

    </Container>
  );
}