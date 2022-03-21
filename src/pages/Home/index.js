import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import { Title, Header, BtnSearch,  SearchInput } from './styles';
import { Background,} from '../../styles';
import Icon from '@expo/vector-icons/MaterialIcons';
import FlatListBeer from './FlatListBeer';
import FlatListStore from './FlatListStore';
import { BeersPack } from '../../utils/BeersPack';
import { Beers } from '../../utils/Beers';

const Home = () => {
  return (

    <Background>
      <ScrollView>
        <Header>
          <SearchInput>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Buscar"

            />
            <BtnSearch>
              <Icon name="search" size={24} color={'black'} />
            </BtnSearch>
          </SearchInput>
        </Header>




        <Title>Em Destaques</Title>
        <FlatListBeer listBeers={BeersPack} />
        <FlatListBeer listBeers={Beers} />
        

        <Title>Lojas</Title>
        <FlatListStore />

      </ScrollView>
    </Background>

  );
}

export default Home;