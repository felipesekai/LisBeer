import React from 'react';
import { View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ButtonBack, Container } from './styles';

const ArrowButtonBack = ({ goBack, color, margintop }) => {
    return (
        <Container>
            <ButtonBack mt={margintop} onPress={() => goBack()}>
                <Icon name="arrow-back-ios" size={30} color={color? color : "#f2a951"} />
            </ButtonBack>
        </Container>


    );
}

export default ArrowButtonBack;