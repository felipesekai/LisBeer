import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import { Container, Header, BtnSearch, ViewList, SearchInput } from './styles';
import { Background, LinkText, InputStyle, InputTitle } from '../../styles';
import Icon from '@expo/vector-icons/MaterialIcons';
import FlatListBeer from './FlatListBeer';
import FlatListStore from './FlatListStore';

const Home = () => {
  return (
   
      <Background>
         <ScrollView>
        <Header>
          <SearchInput style={{ width: '80%' }}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Buscar"

            />
            <BtnSearch>
              <Icon name="search" size={24} color={'black'} />
            </BtnSearch>
          </SearchInput>
        </Header>


      

          <InputTitle style={{ margin: 10 }} >Em Destaques</InputTitle>

          <FlatListBeer />
          <FlatListBeer />

          <InputTitle style={{ margin: 10 }}>Lojas</InputTitle>
          <FlatListStore/>

          </ScrollView>
      </Background>
   
  );
}

export default Home;