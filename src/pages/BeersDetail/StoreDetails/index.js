import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getStoreById } from '../../../services/api';

import { ItemText, ItemName, ItemImg, ItemValuesView } from '../styles';
import { Container } from './styles';

const StoreDetails = ({ id }) => {
    const [store, setStore] = useState({});
    useEffect( () => {
        async function getStore(){
            if (id) {
                try {
                    const response = await getStoreById(id);

                    if(response.status === 200){
                        setStore(response.data);
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
           
        </Container>
    )
        ;
}

export default StoreDetails;