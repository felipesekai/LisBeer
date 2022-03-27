import React from 'react';
import { FlatList, View, Image} from 'react-native';

import { Card, Container, ItemName, ItemPrice, ItemImage, ItemTextView } from './styles';

const FlatListOtherItens = ({ listBeers }) => {
    return (
        <Container>
            <FlatList
                data={listBeers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card>
                        <ItemImage
                        source={{ uri: item.photoUrl }}
                        resizeMode='contain'
                        />
                        <ItemTextView>
                        <ItemName>{item.name}</ItemName>
                        <ItemPrice>{item.price.toFixed(2)}</ItemPrice>
                        </ItemTextView>
                       
                    </Card>
                )}
            />
        </Container>
    );
}

export default FlatListOtherItens;