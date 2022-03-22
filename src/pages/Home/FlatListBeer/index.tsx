import React from 'react';
import { View, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Card, Container, ContainerItens, ItemTextView, LogoItem, Title, Value } from './styles';
import { Beers } from '../../../utils/Beers';
import { useTheme } from 'styled-components';

//tipagem
export type BeersProps = {
  id: string;
  name: string;
  brand: string;
  value: number;
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
              <LogoItem
                source={item.photoUrl ? { uri: item.photoUrl } : require('../../../assets/logo-app.png')}
                resizeMode='contain'
              />

            </Card>
            <Title>{item.name}</Title>

            <ItemTextView>
              <Value>{"R$: " + item.value.toFixed(2)}</Value>
              <Icon name="star" size={14} color={theme.primaryColor} />
              <Value>{`${item.evaluation}`}</Value>
            </ItemTextView>
          </ContainerItens>
        )}
      />

    </Container>
  );
}

export default FlatListBeer;