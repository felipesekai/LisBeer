import React from 'react';
import { View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ButtonBack, Container } from './styles';

const ArrowButtonBack = ({ goBack }) => {
    return (
        <Container>
            <ButtonBack onPress={() => goBack()}>
                <Icon name="arrow-back-ios" size={30} color="black" />
            </ButtonBack>
        </Container>


    );
}

export default ArrowButtonBack;