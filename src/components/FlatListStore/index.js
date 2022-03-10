import React from 'react';
import { View, FlatList } from 'react-native';
import Icon from "@expo/vector-icons/MaterialIcons";
import { Card, Container, List, LogoItem, Title, ViewStoreTitle } from './styles';

const FlatListStore = ({ listBeers }) => {

  const list = [
    { key: 1, name: 'Loja 1', value: 6.75 },
    { key: 2, name: 'Loja 2', value: 6.75 },
    { key: 3, name: 'Loja 3', value: 6.75 },
    { key: 4, name: 'Loja 4', value: 6.75 },
    { key: 5, name: 'Loja 5', value: 6.75 },
    { key: 6, name: 'Loja 6', value: 6.75 },
    { key: 7, name: 'Loja 7', value: 6.75 },

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
            <Icon name="store" size={40} color={'#000000'}/>
            {/* <LogoItem
              source={require('../../assets/logo-app.png')}
              resizeMode='contain'
            /> */}
            <ViewStoreTitle>
            <Title>{item.name}</Title>
            <Title>{item.name}</Title>
            </ViewStoreTitle>
          </Card>
        )}
      />

    </Container>
  );
}

export default FlatListStore;