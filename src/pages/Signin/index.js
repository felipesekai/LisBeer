import React, { useState, useContext, useReducer } from 'react';
import { View, Keyboard, TextInput, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import { Container, Logo, ViewContents, ViewLogo } from './styles';
//estilo universal
import { Background, ButtonLogin, ButtonText, InputStyle, InputTitle, InputView, LinkSignup, LinkText } from '../../styles';
import { AuthContext } from '../../context/auth';
import { initialState, AuthReducer } from '../../reducers/auth.reducer';
import { NumberInputField, FormControl, Input, VStack } from 'native-base';

const Signin = ({ navigation }) => {
    const [authState, dispatch] = useReducer(AuthReducer, initialState);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const { signin, loadingAuth } = useContext(AuthContext);

    function onChangeState(type, value) {
        dispatch({ type: type, payload: value });
    }

    function handleLogin() {
        if (valitadeFields()) {
            signin(formData.email, formData.password)
        }


    }

    function valitadeFields() {
        if (formData.email === undefined || formData.email === '') {
            setErrors({ email: 'email required' })
            return false;
        }
        if (formData.password === undefined || formData.password === '') {
            setErrors({ password: 'Campo senha não esta preenchido' })
            return false;
        }
        // console.log(text.match(/^[\t]+|[ \t]+$/))
        return true
    }


    return (
        <Background>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>


                <Container
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    enabled
                >
                    <ViewLogo>
                        <Logo
                            source={require('../../assets/logo-lisbeerx.png')}
                            resizeMode='contain'
                        />
                    </ViewLogo>
                    <ViewContents>

                        <InputView>
                            <FormControl isInvalid={'email' in errors}>
                                <VStack>
                                    <FormControl.Label>
                                        Email
                                    </FormControl.Label>
                                </VStack>
                                <Input
                                    w={'full'}
                                    placeholderTextColor={"#fff"}
                                    placeholder="exemplo@email.com"
                                    keyboardType="email-address"
                                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                                />
                                {'email' in errors && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}

                            </FormControl>
                            <FormControl mt='6' isInvalid={'password' in errors}>
                                <VStack>
                                    <FormControl.Label>
                                        Password
                                    </FormControl.Label>
                                </VStack>
                                <Input
                                    w={'full'}
                                    placeholderTextColor={"#fff"}
                                    placeholder="Informe sua senha..."
                                    keyboardType="numeric"
                                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                                    secureTextEntry={true}
                                />
                                {'password' in errors && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                            </FormControl>

                        </InputView>

                        <ButtonLogin
                            onPress={handleLogin}>
                            {loadingAuth ? <ActivityIndicator size={22} color={'#fff'} /> :
                                <ButtonText>Login</ButtonText>}

                        </ButtonLogin>

                        <LinkSignup onPress={() => navigation.navigate('Signup')}>
                            <LinkText>Cadastrar-se</LinkText>
                        </LinkSignup>

                    </ViewContents>
                </Container>
            </TouchableWithoutFeedback>
        </Background>
    );
}
export default Signin;