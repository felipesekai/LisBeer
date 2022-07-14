import React from 'react';
import { View } from 'react-native';
import { FormControl, Input } from 'native-base';


// import { Container } from './styles';

const FormModel = ({ label, name, errors, ...rest }) => {
    return (
        <FormControl isInvalid={name in errors}>
            <FormControl.Label _text={{ fontSize: 'xs', fontWeight: 'medium' }}>
                {label}
            </FormControl.Label>
            <Input
                w={'full'}
                mb='4'
                variant={'outline'}
                p={2}
                {...rest}
            />

        </FormControl>
    );
}

export default FormModel;