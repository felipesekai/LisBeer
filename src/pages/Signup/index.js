import React, { useReducer, useContext } from 'react';
import { Keyboard, Text, TextInput, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

import { Container } from './styles';
import { Background, ButtonLogin, ButtonText, InputStyle, InputTitle, InputView, LinkSignup, LinkText } from '../../styles';
import { AuthContext } from'../../context/auth';
import { initialState, AuthReducer } from '../../reducer/auth.reducer';

const Signup = () => {
    
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const { signup, loadingAuth } = useContext(AuthContext);
    const {name, email, password} = state;

    function onChangeState(type, value) {
        dispatch({ type: type, payload: value });
    }

    function handleSignup(){
        if(name ==='' || email==='' || password ===''){
            alert('A campos não preenchidos corretamente');
            return;
        }
        let user = {
            name: name,
            email: email,
            password: password
        }
        signup(user);


    }
    return (
        <Background>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Container
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    enabled
                >
                    <InputView>
                        <InputTitle>Nome</InputTitle>
                        <InputStyle>
                            <TextInput
                                style={{ height: '100%', width: '100%' }}
                                value={state.name}
                                onChangeText={(text) => onChangeState('setName',text)}
                            />

                        </InputStyle>

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

                    <ButtonLogin onPress={handleSignup}>

                        {loadingAuth ? <ActivityIndicator size={22} color={'#fff'}/>: 
                        <ButtonText>Cadastrar</ButtonText>}
                        
                    </ButtonLogin>


                </Container>
            </TouchableWithoutFeedback>
        </Background>
    );

}

export default Signup;