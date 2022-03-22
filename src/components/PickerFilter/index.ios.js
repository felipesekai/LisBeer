import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, View, } from 'react-native';
import { PickerIOS } from '@react-native-picker/picker';
import { useTheme } from 'styled-components';
import { ContainerIos, LinkClose, ModalView, Header, FilterTitle } from './styles';



const PickerFilter = ({ selectedBeers, setBeers }) => {
    const theme = useTheme();
    const [modalPicker, setModalPicker] = useState(false);
    const [itemName, setItemName] = useState('');
    const itensLabel = [
        { key: 1, value: 1, label: 'Menor Preço' },
        { key: 2, value: 2, label: 'Maior Preço' },
        { key: 2, value: 3, label: 'Melhor Avaliada' },

    ];

    useEffect(() => {
        var item = itensLabel.filter(item => item.value === selectedBeers);
        setItemName(item[0].label);
    }, [selectedBeers])

    return (
        <ContainerIos onPress={() => setModalPicker(true)}>

            <FilterTitle>{itemName}</FilterTitle>

            <Modal transparent={true} animationType='slide' visible={modalPicker} onRequestClose={() => setModalPicker(false)}>
                <ModalView>
                    <Header>
                        <TouchableOpacity onPress={() => setModalPicker(false)}>
                            <LinkClose>Fechar</LinkClose>
                        </TouchableOpacity>
                    </Header>
                    <PickerIOS
                        
                        itemStyle={{
                            color: theme.primaryColor,
                        }}
                        selectedValue={selectedBeers}
                        onValueChange={(itemValue, itemIndex) => setBeers(itemValue)} >
                        <PickerIOS.Item value={1} label={'Menor Preço'} />
                        <PickerIOS.Item value={2} label={'Maior Preço'} />
                        <PickerIOS.Item value={3} label={'Melhor Avaliada'} />
                    </PickerIOS>
                </ModalView>
            </Modal>

        </ContainerIos>
    );
}

export default PickerFilter;