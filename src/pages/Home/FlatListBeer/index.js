import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { Card, Container, List, LogoItem, Title, Value } from './styles';

const FlatListBeer = ({ listBeers }) => {

  const list = [
    { key: 1, name: 'heiniken', value: 6.75 },
    { key: 2, name: 'heiniken', value: 6.75 },
    { key: 3, name: 'heiniken', value: 6.75 },
    { key: 4, name: 'heiniken', value: 6.75 },
    { key: 5, name: 'heiniken', value: 6.75 },
    { key: 6, name: 'heiniken', value: 6.75 },
    { key: 7, name: 'heiniken', value: 6.75 },

  ]
  return (
    <Container>
      <FlatList
        data={list}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <Card>
            <LogoItem
              source={require('../../../assets/logo-app.png')}
              resizeMode='contain'
            />
            <Title>{item.name}</Title>
            <Value>{"R$: "+item.value}</Value>

          </Card>
        )}
      />

    </Container>
  );
}

const styles = StyleSheet.create({
  card:{
    elevation:5,
  }
})

export default FlatListBeer;