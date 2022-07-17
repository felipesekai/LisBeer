import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Actionsheet, Alert, Button, FormControl, HStack, Input, VStack, Text } from 'native-base';
import FormModel from '../../../components/FormModel';
import InputField from '../../../components/Input';
import Icon from '@expo/vector-icons/MaterialIcons'
import { useTheme } from 'styled-components/native';
import { AuthContext } from '../../../context/auth';


const ASUserEdit = ({ open, close, _setChange }) => {
    const theme = useTheme();

    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(user)
    }, [])

    function handleUserChange() {
        if (verify()) {
            // chamada na api de  mudanças
            _setChange(true);
            close();
            console.log('mudou')
        }
    }


    function verify() {
        if (formData.username === undefined || formData.username === '') {
            setErrors({ ...errors, name: 'name invalid' });
            return false;
        }
        // } if (formData.email === undefined || formData.email === '') {
        //     setErrors({ ...errors, email: 'email invalid' });
        //     return false;
        // }
        return true;
    }


    return (
        <Actionsheet onClose={close} isOpen={open}>
            <Actionsheet.Content>
                <VStack w='full' alignItems='flex-end'>
                    <TouchableOpacity onPress={handleUserChange}
                        style={{ width: 40, height: 40 }} >
                        <Icon name="done" size={35} color={theme.primaryColor} />
                    </TouchableOpacity>
                </VStack>
                {/* <InputField label="Name" name='name' onChangeText={(text) => setFormData(...formData, { name: text })} /> */}
                <FormModel
                    label="Name"
                    name="name" errors={errors}
                    onChangeText={(text) => setFormData({ ...formData, username: text })}
                    value={formData.username ? formData.username : ''} />
                <FormModel
                    label="Email"
                    name="Email"
                    errors={errors}
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                    value={formData.email ? formData.email : ''}
                    editable={false}
                />
            </Actionsheet.Content>
        </Actionsheet >
    )
}



export default ASUserEdit;