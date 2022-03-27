import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ButtonBack, Card, Container, Header, ItemImg, ItemName, ItemText, ItemValuesView } from './styles';
import { useTheme } from 'styled-components';
import { getStoreById } from '../../services/api';
import StoreDetails from './StoreDetails';
const BeersDetail = ({ visible, onClose, data, }) => {

  const theme = useTheme();

  return (
    <Modal animationType='slide' visible={visible} onRequestClose={() => onClose()}>

      {data &&
        <Container>


          <Header>
            <ItemImg
              source={{ uri: data.photoUrl }}
              resizeMode='contain'
            />
            <ButtonBack onPress={() => onClose()}>
              <Icon name="arrow-back-ios" size={30} color="#f2a951" />
            </ButtonBack>

          </Header>

          <Card>
            <ItemName>{data && data.name}</ItemName>
            <ItemValuesView>
              <ItemText>Preço: {data.price.toFixed(2)}</ItemText>
              <ItemText> | </ItemText>
              <Icon name="star" size={17} color={theme.background} />
              <ItemText> {data.evaluation.toFixed(1)}</ItemText>
             
            </ItemValuesView>

            <StoreDetails id={data.storeId}/>
          </Card>
        </Container>
      }

    </Modal>
  );
}

export default BeersDetail;