import React, { useState, useContext, useReducer } from 'react';
import { Keyboard, TextInput, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import { Container, Logo } from './styles';
//estilo universal
import { Background, ButtonLogin, ButtonText, InputStyle, InputTitle, InputView, LinkSignup, LinkText } from '../../styles';
import { AuthContext } from '../../context/auth';
import { initialState, AuthReducer } from '../../reducer/auth.reducer';

const Signin = ({ navigation }) => {
    const [authState, dispatch] = useReducer(AuthReducer, initialState);
    const { signin, loadingAuth } = useContext(AuthContext);

    function onChangeState(type, value) {
        dispatch({ type: type, payload: value });
    }

    function handleLogin() {
            if(valitadeFields(authState.password) || valitadeFields(authState.email)){
                alert('Há campos vazios ou nao preenchidos corretamente');
                return;
            }
            signin(authState.email, authState.password)

    }
    
    function valitadeFields(text){
        console.log(text.match(/^[\t]+|[ \t]+$/))
        
        return text.match(/^[ \t]+$/) !== null || text ===""  ? true : false
    }
    return (
        <Background>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Container
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    enabled
                >
                    <Logo
                        source={require('../../assets/logo-app.png')}
                        resizeMode='contain'
                    />

                    <InputView>
                        <InputTitle>Email</InputTitle>
                        <InputStyle>
                            <TextInput
                                style={{ height: '100%', width: '100%' }}
                                value={authState.email}
                                keyboardType="email-address"
                                onChangeText={(text) => onChangeState('setEmail', text)}
                            />

                        </InputStyle>

                        <InputTitle>Senha</InputTitle>
                        <InputStyle>

                            <TextInput
                                style={{ height: '100%', width: '100%' }}
                                value={authState.password}
                                keyboardType="numeric"
                                onChangeText={(text) => onChangeState('setPassword', text)}
                                secureTextEntry={true}
                            />
                        </InputStyle>

                    </InputView>

                    <ButtonLogin
                        onPress={handleLogin}>
                        {loadingAuth ? <ActivityIndicator size={22} color={'#fff'} /> :
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