import React, {useState} from 'react';
import { FlatList, View } from 'react-native';
import Categories from '../Categories';

import { Card, Container, Title } from './styles';

const FlatListCategories = ({ categories }) => {
    const [openCategories, setOpenCategories] = useState(false);
    const [categoriesItem, setCategoriesItem] = useState(null);

    function open(categories) {
        setCategoriesItem(categories);
        setOpenCategories(true);
        
    }
    return (
        <Container>

            <Title>Categorias</Title>

            <FlatList
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card onPress={()=>open(item)}>
                        <Title>{item.name}</Title>
                    </Card>
                )}
            />

            <Categories visible={openCategories} onClose={()=>setOpenCategories(false)} data={categoriesItem}/>
        </Container>
    );
}

export default FlatListCategories;