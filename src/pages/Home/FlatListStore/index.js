import React from 'react';
import { View, FlatList } from 'react-native';
import Icon from "@expo/vector-icons/MaterialIcons";
import { Card, Container, List, LogoItem, Title, ViewStoreTitle } from './styles';
import { Props } from '../../../utils/StoreType/storeType';



const FlatListStore = ({ listStores }) => {

  return (
    <Container>
      <FlatList
        data={listStores}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card>           
            <LogoItem
              source={{uri:item.photoUrl }}
              resizeMode='contain'
            />
            <ViewStoreTitle>
            <Title>{item.fantasyName}</Title>
            <Title>{item.email}</Title>
            </ViewStoreTitle>
          </Card>
        )}
      />

    </Container>
  );
}

export default FlatListStore;