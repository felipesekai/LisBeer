import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getStoreById } from '../../../services/api';
import FlatListCategories from '../FlatListCategories';
import FlatListOtherItens from '../FlatListOtherItens';

import { ItemText, ItemName, ItemImg, ItemValuesView } from '../styles';
import { Container, TitleOtherItens } from './styles';

const StoreDetails = ({ id, itemCategories }) => {
    const [store, setStore] = useState({});
    const [listBeers, setListBeers] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    useEffect( () => {
        async function getStore(){
            if (id) {
                try {
                    const response = await getStoreById(id);

                    if(response.status === 200){
                        setStore(response.data);
                        setListBeers(response.data.beers);
                        // setListCategories(response.data.beers);
                        // console.log(response.data.beers)
                    }
                }catch (e) {

                }
              
            }
        }
        getStore()
        

    }, [])


    return (
        <Container>
            {store &&
             <View>
             <ItemText>{"Loja : "+store.fantasyName}</ItemText>
             <ItemText>{store.email}</ItemText>
             
             </View>
            }

            <FlatListCategories categories={itemCategories}/>

            <TitleOtherItens>Outros itens da loja</TitleOtherItens>
           <FlatListOtherItens listBeers={listBeers} />
        </Container>
    )
        ;
}

export default StoreDetails;