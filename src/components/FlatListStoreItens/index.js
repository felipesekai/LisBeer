import React from 'react';
import { FlatList, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import {
    Card,
    Container,
    ItemName,
    ItemText, ItemImage, ItemTextView,
    CardContainer,
    CardContainerRow, RateText, RateViewRow
} from './styles';

import { useTheme } from 'styled-components';


function convert(value) {
    return value
        //   .replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
        .replace('.', ',');      // Troca o separador decimal (`.` -> `,`)
}


const FlatListOtherItens = ({ listBeers }) => {

 const theme = useTheme();
    return (
        <Container>
            <FlatList
                data={listBeers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card>
                        <CardContainerRow>
                            <ItemImage
                                source={{ uri: item.photoUrl }}
                                resizeMode='contain'
                            />
                            <CardContainer>
                                <ItemTextView>
                                    <ItemName>{item.name}</ItemName>
                                    <ItemText>R$: {convert(item.price.toFixed(2))}</ItemText>
                                </ItemTextView>

                                <ItemTextView>
                                    <RateViewRow>
                                        <Icon name="star" size={15} color={theme.background} />
                                        <RateText> {item.evaluation.toFixed(1)}</RateText>
                                    </RateViewRow>
                                    {/* <ItemName>{item.evaluation.toFixed(1)}</ItemName> */}
                                    <ItemText>Distance km</ItemText>
                                </ItemTextView>
                            </CardContainer>
                        </CardContainerRow>


                    </Card>
                )}
            />
        </Container>
    );
}

export default FlatListOtherItens;