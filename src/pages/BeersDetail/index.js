import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ButtonBack, Card, Container, Header, HeaderBeersView, ItemImg, ItemName, ItemText, RateText, RateViewRow, TitleRateViewRow} from './styles';
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
            <HeaderBeersView>
            <TitleRateViewRow>            
            <ItemName>{data && data.name}</ItemName>
            <RateViewRow>              
              <Icon name="star" size={20} color={theme.background} />
              <RateText> {data.evaluation.toFixed(1)}</RateText>
            </RateViewRow>
            </TitleRateViewRow>
            <ItemText>{data.brand}</ItemText>
            <ItemText>Preço: {data.price.toFixed(2)}</ItemText>
            </HeaderBeersView>

            <StoreDetails id={data.storeId} itemCategories={data.categories}/>
          </Card>
        </Container>
      }

    </Modal>
  );
}

export default BeersDetail;