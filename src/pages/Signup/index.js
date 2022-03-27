import React, { useReducer, useContext } from 'react';
import { Keyboard, Text, TextInput, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Container } from './styles';
import { Background, ButtonLogin, ButtonText, Input, InputStyle, InputTitle, InputView, LinkSignup, LinkText } from '../../styles';
import { AuthContext } from'../../context/auth';
import { initialState, AuthReducer } from '../../reducers/auth.reducer';
import ArrowButtonBack from '../../components/ArrowButtonBack';

const Signup = ({ navigation }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const { signup, loadingAuth } = useContext(AuthContext);
    const {name, email, password, repeatPassword} = state;

    function onChangeState(type, value) {
        dispatch({ type: type, payload: value });
    }

    function handleSignup(){
        valitadeFields(name)
        if(valitadeFields(name) ||  valitadeFields(email) ||  valitadeFields(password)){
            alert('A campos não preenchidos corretamente');
            return;
        }
        if(password !== repeatPassword){
            return alert('As senhas não conhecidem');
        }
        let user = {
            name: name,
            email: email,
            password: password
        }
        signup(user);


    }

    function valitadeFields(text){
        // console.log(text.match(/^[\t]+|[ \t]+$/))
        
        return text.match(/^[ \t]+$/) !== null || text ===""  ? true : false
    }

    return (
        <Background>
            <ArrowButtonBack goBack={()=> navigation.goBack()}/>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Container
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    enabled
                >
                    <InputView>
                        <InputTitle>Nome:</InputTitle>
                        <InputStyle>
                            <Input                               
                                value={state.name}
                                onChangeText={(text) => onChangeState('setName',text)}
                            />

                        </InputStyle>

                        <InputTitle>Email:</InputTitle>
                        <InputStyle>
                            <Input
                                value={state.email}
                                keyboardType="email-address"
                                onChangeText={(text) => onChangeState('setEmail',text)}
                            />

                        </InputStyle>

                        <InputTitle>Senha:</InputTitle>
                        <InputStyle>

                            <Input
                                value={state.password}
                                keyboardType="numeric"
                                onChangeText={(text) => onChangeState('setPassword',text)}
                                secureTextEntry={true}
                            />
                        </InputStyle>

                        <InputTitle>Repita a Senha:</InputTitle>
                        <InputStyle>

                            <Input
                                value={state.repeatPassword}
                                keyboardType="numeric"
                                onChangeText={(text) => onChangeState('setRepeatPassword',text)}
                                secureTextEntry={true}
                            />
                        </InputStyle>

                    </InputView>

                    <ButtonLogin onPress={handleSignup}>

                        {loadingAuth ? <ActivityIndicator size={22} color={'#fff'}/>: 
                        <ButtonText >Cadastrar</ButtonText>}
                        
                    </ButtonLogin>


                </Container>
            </TouchableWithoutFeedback>
        </Background>
    );

}

export default Signup;