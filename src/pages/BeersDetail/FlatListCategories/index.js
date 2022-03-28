import React from 'react';
import { FlatList, View } from 'react-native';

import { Card, Container, Title } from './styles';

const FlatListCategories = ({ categories }) => {
    // console.log(categories)
    return (
        <Container>

            <Title>Categorias</Title>

            <FlatList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card>
                        <Title>{item.name}</Title>
                    </Card>
                )}
            />
        </Container>
    );
}

export default FlatListCategories;