import React from 'react';
import { Modal, View, Text, TouchableOpacity, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ButtonBack, Card, CardContainer, Container, Header, ItemImg, ItemName, ItemText, ItemTextBold, ListContainer, ViewRow } from './styles';
import { useTheme } from 'styled-components';
import ContactStore from './ContactStore';
import FlatListOtherItens from '../../components/FlatListOtherItens';
import { Beers } from '../../utils/Beers';

const StoreDetail = ({ visible, onClose, data, }) => {

  const theme = useTheme();
 

  return (
    <Modal animationType='slide' visible={visible} onRequestClose={() => onClose()}>

      {data &&
        <Container>

          <Header>
            <ItemImg
              source={{ uri: data.photoUrl }}
            // resizeMode='contain'
            />
            <ButtonBack onPress={() => onClose()}>
              <Icon name="arrow-back-ios" size={30} color="#f2a951" />
            </ButtonBack>

          </Header>

          <Card>
            <ItemName>{data && data.fantasyName}</ItemName>
            <CardContainer>
              <ContactStore  name="Email" data={data.email}/>
              <ContactStore  name="Endereço" data={data.address.street}/>
              <ContactStore  name="Cidade" data={data.address.city}/>                           
            </CardContainer>
            <ListContainer>
            <ItemName>{data && "Itens"}</ItemName>
            <FlatListOtherItens listBeers={Beers}/>

            </ListContainer>
          </Card>
        </Container>
      }

    </Modal>
  );
}

export default StoreDetail;