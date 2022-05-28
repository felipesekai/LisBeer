import React from 'react';
import { Modal } from 'react-native';
import ArrowButtonBack from '../../../components/ArrowButtonBack';
import { useTheme } from 'styled-components';
import { Container, ContainerList, Header, TitleHeader } from './styles';
import FlatListOtherItens from '../../../components/FlatListOtherItens';
import { Beers } from '../../../utils/Beers';

const Categories = ({ visible, onClose, data }) => {

    const theme = useTheme();

    return (
        <Modal animationType='slide' visible={visible} onRequestClose={() => onClose()}>
            {data &&
                <Container>
                    <Header>
                        <ArrowButtonBack margintop={'0px'} goBack={() => onClose()} color={theme.background} />
                        <TitleHeader>{data.name}</TitleHeader>
                    </Header>
                    <ContainerList>
                        <FlatListOtherItens listBeers={Beers} />
                    </ContainerList>

                </Container>
            }

        </Modal>
    );
}

export default Categories;