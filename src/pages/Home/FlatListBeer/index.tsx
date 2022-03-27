import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Card, Container, ContainerItens, ItemTextView, 
  ItemImage, Title, Value, ItemRateView } from './styles';
import { Beers } from '../../../utils/Beers';
import { useTheme } from 'styled-components';
import { getAllBeers } from '../../../services/api';

//tipagem
export type BeersProps = {
  id: string;
  name: string;
  brand: string;
  price: number;
  evaluation: number;
  photoUrl: string;
  categories: [
    {
        id: string,
        name: string,
        evaluation: number,
    },
];
}


type Props = {
  listBeers: BeersProps[];
  itemSelect(item: BeersProps);
}

const FlatListBeer = ({ listBeers, itemSelect } : Props) => {
  const theme = useTheme();

  return (
    <Container>
      <FlatList
        data={listBeers ? listBeers : Beers}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <ContainerItens>
            <Card onPress={() => itemSelect(item)}>
              <ItemImage                
                source={item.photoUrl ? { uri: item.photoUrl } : require('../../../assets/logo-app.png')}
                resizeMode='contain'
              />

              <ItemRateView>
              <Icon name="star" size={14} color={theme.primaryColor} />
              <Value>{`${item.evaluation.toFixed(1)}`}</Value>
              </ItemRateView>

            </Card>
            
            <Title>{item.name}</Title>

            <ItemTextView>
              <Value>{"R$: " + item.price.toFixed(2)}</Value>
             
            </ItemTextView>
          </ContainerItens>
        )}
      />

    </Container>
  );
}

export default FlatListBeer;