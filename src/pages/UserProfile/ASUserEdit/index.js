import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actionsheet, Button, FormControl, Input, VStack } from 'native-base';
import FormModel from '../../../components/FormModel';
import InputField from '../../../components/Input';
import Icon from '@expo/vector-icons/MaterialIcons'
import { useTheme } from 'styled-components/native';

// import { Container } from './styles';

const ASUserEdit = ({ open, close }) => {
    const theme = useTheme();

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    function handleUserChange() {
        if (verify()) {
            // chamada na api de  mudanças
        }
    }


    function verify() {
        if (formData.name === undefined || formData.name === '') {
            setErrors({ ...errors, name: 'Invalid' });
            return false;
        } if (formData.email === undefined || formData.email === '') {
            setErrors({ ...errors, email: 'Invalid' });
            return false;
        }
        return true;
    }

    return (
        <Actionsheet onClose={close} isOpen={open}>
            <Actionsheet.Content>
                <VStack w='full' alignItems='flex-end'>
                    <TouchableOpacity style={{ width: 40, height: 40 }} >
                        <Icon name="done" size={35} color={theme.primaryColor} />
                    </TouchableOpacity>
                </VStack>
                {/* <InputField label="Name" name='name' onChangeText={(text) => setFormData(...formData, { name: text })} /> */}
                <FormModel label="Name" name="name" errors={errors} onChangeText={(text) => setFormData({ ...formData, name: text })} />
                <FormModel label="Email" name="Email" errors={errors} onChangeText={(text) => setFormData({ ...formData, email: text })} />
            </Actionsheet.Content>
        </Actionsheet >
    );
}

export default ASUserEdit;