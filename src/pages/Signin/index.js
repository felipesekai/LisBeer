import React, { useState, useContext, useReducer } from 'react';
import { Keyboard, Text, TextInput, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import { Container } from './styles';
//estilo universal
import { Background, ButtonLogin, ButtonText, InputStyle, InputTitle, InputView, LinkSignup, LinkText } from '../../styles';
import {AuthContext} from '../../context/auth';
import { initialState, AuthReducer } from '../../reducer/auth.reducer';

const Signin = ({ navigation }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const {signin, loadingAuth} = useContext(AuthContext);

    function onChangeState(type, value) {
        dispatch({type: type, payload: value});
    }
    return (
        <Background>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Container
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    enabled
                >
                    <InputView>
                        <InputTitle>Email</InputTitle>
                        <InputStyle>
                            <TextInput
                                style={{ height: '100%', width: '100%' }}
                                value={state.email}
                                keyboardType="email-address"
                                onChangeText={(text) => onChangeState('setEmail',text)}
                            />

                        </InputStyle>

                        <InputTitle>Senha</InputTitle>
                        <InputStyle>

                            <TextInput
                                style={{ height: '100%', width: '100%' }}
                                value={state.password}
                                keyboardType="numeric"
                                onChangeText={(text) => onChangeState('setPassword',text)}
                                secureTextEntry={true}
                            />
                        </InputStyle>

                    </InputView>

                    <ButtonLogin onPress={() =>signin(state.email,state.password)}>
                    {loadingAuth ? <ActivityIndicator size={22} color={'#fff'}/>: 
                        <ButtonText>Login</ButtonText>}
                       
                    </ButtonLogin>

                    <LinkSignup onPress={() => navigation.navigate('Signup')}>
                        <LinkText>Cadastrar-se</LinkText>
                    </LinkSignup>
                </Container>
            </TouchableWithoutFeedback>
        </Background>
    );
}
export default Signin;