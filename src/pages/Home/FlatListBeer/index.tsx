import React from 'react';
import { View, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Card, Container, LogoItem, Title, Value } from './styles';
import { Beers } from '../../../utils/Beers';
import { useTheme } from 'styled-components';

//tipagem
export type BeersProps = {
  key: string;
  title: string;
  price: number;
  rate: number;
  img: string;
}

type Props = {
  listBeers: BeersProps[];
}

const FlatListBeer = ({ listBeers }: Props) => {
  const theme = useTheme();

  return (
    <Container>
      <FlatList
        data={listBeers ? listBeers : Beers}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => item.key}
        renderItem={({ item, index }) => (
          <Card>
            <LogoItem
              source={item.img ? { uri: item.img } : require('../../../assets/logo-app.png')}
              resizeMode='contain'
            />
            <Title>{item.title}</Title>

            <View style={{ flexDirection: 'row', marginTop: 2 }}>
              <Value>{"R$: " + item.price.toFixed(2)}</Value>
              <Icon name="star" size={14} color={theme.primaryColor} />
              <Value>{`${item.rate}`}</Value>
            </View>


          </Card>
        )}
      />

    </Container>
  );
}

export default FlatListBeer;