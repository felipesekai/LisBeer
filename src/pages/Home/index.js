import React, { useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { Title, Header, BtnSearch, SearchInput, TitleAndFilterView, FilterView, FilterTitle } from './styles';
import { Background, } from '../../styles';
import { Picker } from '@react-native-picker/picker';
import PickerFilter from '../../components/PickerFilter';
import Icon from '@expo/vector-icons/MaterialIcons';
import FlatListBeer from './FlatListBeer';
import FlatListStore from './FlatListStore';
import { BeersPack } from '../../utils/BeersPack';
import { Beers } from '../../utils/Beers';
import BeersDetail from '../BeersDetail';
const Home = () => {
  const [item, setItem] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedFilterBeers, setSelectedFilterBeers] = useState(2);
  const [listBeers, setListBeers] = useState(Beers);

  function openModal(item) {
    if (item) {
      setVisibleModal(true);
      setItem(item);
    }

  }

  function hanldeFilterBeers(value) {
    setSelectedFilterBeers(value)
    if (value === 1) {
      listBeers.sort(lowestPrice)
    }
    if (value === 2) {
      listBeers.sort(biggestPrice)
    }
    if (value === 3) {
      listBeers.sort(bestRate)
    }
  }

  function lowestPrice(a, b) {
    {
      if (a.value < b.value) {
        return -1;
      }
      else if (a.value > b.value) {
        return 1;
      }
      else {
        return 0
      }
    }
  }

  function biggestPrice(a, b) {
    {
      if (a.value > b.value) {
        return -1;
      }
      else if (a.value < b.value) {
        return 1;
      }
      else {
        return 0
      }
    }
  }

  function bestRate(a, b) {
    {
      if (a.evaluation > b.evaluation) {
        return -1;
      }
      else if (a.evaluation < b.evaluation) {
        return 1;
      }
      else {
        return 0
      }
    }
  }

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



        <TitleAndFilterView>
          <Title>Em Destaques</Title>
          
          <PickerFilter selectedBeers={selectedFilterBeers} setBeers={hanldeFilterBeers} />
  
        </TitleAndFilterView>

        <FlatListBeer listBeers={BeersPack} itemSelect={(item) => openModal(item)} />
        <FlatListBeer listBeers={listBeers} itemSelect={(item) => openModal(item)} />


        <Title>Lojas</Title>
        <FlatListStore />

      </ScrollView>
      <BeersDetail visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        data={item} />
    </Background>

  );
}

export default Home;