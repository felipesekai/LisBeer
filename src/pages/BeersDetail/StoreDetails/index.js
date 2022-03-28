import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getStoreById } from '../../../services/api';
import FlatListCategories from '../FlatListCategories';
import FlatListOtherItens from '../FlatListOtherItens';

import { ItemText, ItemName, ItemImg, RateViewRow,  } from '../styles';
import { Container, TitleOtherItens, StoreContent, Title } from './styles';

const StoreDetails = ({ id, itemCategories }) => {
    const [store, setStore] = useState({});
    const [listBeers, setListBeers] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    useEffect(() => {
        async function getStore() {
            if (id) {
                try {
                    const response = await getStoreById(id);

                    if (response.status === 200) {
                        setStore(response.data);
                        setListBeers(response.data.beers);
                        // setListCategories(response.data.beers);
                        // console.log(response.data.beers)
                    }
                } catch (e) {
                        alert("Tivemos algum problema para carregar os dados")
                }

            }
        }
        getStore()


    }, [])


    return (
        <Container>
            <FlatListCategories categories={itemCategories} />
            {store &&
                <StoreContent>
                    <Title>{store.fantasyName}</Title>
                    <ItemText>{store.email}</ItemText>
                </StoreContent>
            }



            <TitleOtherItens>Outros itens da loja</TitleOtherItens>
            <FlatListOtherItens listBeers={listBeers} />
        </Container>
    )
        ;
}

export default StoreDetails;