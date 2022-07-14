import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ButtonBack, Card, Container, Header, HeaderBeersView, ItemImg, ItemName, ItemText, RateText, RateViewRow, TitleRateViewRow } from './styles';
import { useTheme } from 'styled-components';
import { getStoreById } from '../../services/api';
import StoreDetails from './StoreDetails';
import { Actionsheet, Center, Image, ScrollView } from 'native-base'
const BeersDetail = ({ visible, onClose, data, }) => {

  const theme = useTheme();

  function convert(value) {
    return value
      //   .replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
      .replace('.', ',');      // Troca o separador decimal (`.` -> `,`)
  }
  return (
    <Center flex={1} px="5">

      <Actionsheet isOpen={visible} onClose={onClose}

      >
        {data &&

          <Image
            flex={1}
            w={'100%'}
            h={'30%'}
            source={{ uri: data.photoUrl }}
            resizeMode='contain'
            alt="Alternate Text"
          />}
        {data &&
          <Actionsheet.Content bg={'primary.600'} justifyContent='space-between'>
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
                <ItemText>R$: {convert(data.price.toFixed(2))}</ItemText>
              </HeaderBeersView>

              <StoreDetails id={data.storeId} itemCategories={data.categories} beerId={data.id} />

            </Card>


          </Actionsheet.Content>
        }
      </Actionsheet>
    </Center>
    // <Modal animationType='slide' visible={visible} onRequestClose={() => onClose()}>



    // </Modal>
  );
}

export default BeersDetail;