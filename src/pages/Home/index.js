import React, {useState, useEffect, useContext} from 'react';
import {View, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import {Title, Header, BtnSearch, SearchInputView, TitleAndFilterView, ContainerList} from './styles';
import {Background,} from '../../styles';
import PickerFilter from '../../components/PickerFilter';
import Icon from '@expo/vector-icons/MaterialIcons';
import FlatListBeer from './FlatListBeer';
import FlatListStore from './FlatListStore';
import {BeersPack} from '../../utils/BeersPack';
import {Beers} from '../../utils/Beers';
import BeersDetail from '../BeersDetail';
import StoreDetail from '../StoreDetail';
import {translate} from '../../locales';
import {useQuery} from "react-query";
import {getAllBeers, getAllStore} from '../../services/api';
import {AuthContext} from "../../context/auth";

const Home = () => {
    const [beersSelected, setBeersSelected] = useState(null);
    const [storageSelected, setStorageSelected] = useState(null);
    const [beersDetailisVisible, setBeersDetailisVisible] = useState(false);
    const [storageDetailisVisible, setStorageDetailisVisible] = useState(false);
    const [selectedFilterBeers, setSelectedFilterBeers] = useState(3);
    const [listBeers, setListBeers] = useState(Beers);
    const [listStores, setListStores] = useState();

    const {authToken} = useContext(AuthContext);


    useEffect(() => {
        getAllBeers(authToken).then((response) => {
            console.log(response.data);
            response.data.length === 0 ? setListBeers(Beers) : setListBeers(response.data);


        }).catch((err) => {
            console.log(err);
        }).finally(() => {

        });

        getStore()

    }, []);

    function getStore() {


        getAllStore(authToken).then((response) => {
            response.data.length === 0 ? setListStores(s) : setListStores(response.data);
        })
            .catch((err) => {
            }).finally(() => {
            //loading
        })
    }

    function openBeersDetail(item) {
        if (item) {
            setBeersDetailisVisible(true);
            setBeersSelected(item);
        }

    }

    function hanldeFilterBeers(value) {
        setSelectedFilterBeers(value)
        if (value === 1) {
            listBeers.sort(lowestPrice)
        }
        if (value === 2) {
            listBeers.sort(biggestPrice)
        }
        if (value === 3) {
            listBeers.sort(bestRate)
        }
    }

    function lowestPrice(a, b) {
        {
            if (a.price < b.price) {
                return -1;
            } else if (a.price > b.price) {
                return 1;
            } else {
                return 0
            }
        }
    }

    function biggestPrice(a, b) {
        {
            if (a.price > b.price) {
                return -1;
            } else if (a.price < b.price) {
                return 1;
            } else {
                return 0
            }
        }
    }

    function bestRate(a, b) {
        // console.log(translate('hello'))
        {
            if (a.evaluation > b.evaluation) {
                return -1;
            } else if (a.evaluation < b.evaluation) {
                return 1;
            } else {
                return 0
            }
        }
    }

    function openStoreDetail(item) {
        if (item) {
            setStorageDetailisVisible(true);
            setStorageSelected(item);
        }

    }

    return (

        < Background>

            <ScrollView>
                <Header>
                    <SearchInputView>
                        <TextInput
                            style={{flex: 1}}
                            placeholder="Buscar"

                        />
                        <BtnSearch>
                            <Icon name="search" size={24} color={'black'}/>
                        </BtnSearch>
                    </SearchInputView>
                </Header>


                <TitleAndFilterView>
                    <Title>Em Destaques</Title>

                    <PickerFilter selectedBeers={selectedFilterBeers} setBeers={hanldeFilterBeers}/>

                </TitleAndFilterView>

                <ContainerList>
                    <FlatListBeer listBeers={BeersPack} itemSelect={(item) => openBeersDetail(item)}/>
                </ContainerList>
                {/* {isFetching? <ActivityIndicator size={30}/> : */}
                <ContainerList>
                    <FlatListBeer listBeers={listBeers} itemSelect={(item) => openBeersDetail(item)}/>
                </ContainerList>

                {/* } */}

                <Title>Lojas</Title>
                <FlatListStore listStores={listStores} itemSelect={(item) => openStoreDetail(item)}/>

            </ScrollView>
            {/* pages */}
            <BeersDetail
                visible={beersDetailisVisible}
                onClose={() => setBeersDetailisVisible(false)}
                data={beersSelected}/>

            <StoreDetail
                visible={storageDetailisVisible}
                onClose={() => setStorageDetailisVisible(false)}
                data={storageSelected}
            />
        </Background>

    );
}

export default Home;
