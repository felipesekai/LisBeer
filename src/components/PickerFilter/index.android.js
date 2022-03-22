import React from 'react';
import { View, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from 'styled-components';
import { Container } from './styles';

const PickerFilter = ({selectedBeers, setBeers}) => {
    const theme = useTheme();
    return (
        <Container>
           <Picker
              style={{
                width: '100%', height: 20, color: 'white',
                
              }}
              mode={'dropdown'}

              selectedValue={selectedBeers}
              onValueChange={(itemValue, itemIndex) => setBeers(itemValue)} >
              <Picker.Item value={1} label={'Menor Preço'} />
              <Picker.Item value={2} label={'Maior Preço'} />
              <Picker.Item value={3} label={'Melhor Avaliada'} />
            </Picker>
        </Container>
    );
}

export default PickerFilter;