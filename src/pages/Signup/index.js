import React, { useReducer, useContext } from 'react';
import { Keyboard, Text, TextInput, Platform, TouchableWithoutFeedback, ActivityIndicator, Alert } from 'react-native';
import { Container } from './styles';
import { Background, ButtonLogin, ButtonText, Input, InputStyle, InputTitle, InputView, LinkSignup, LinkText } from '../../styles';
import { AuthContext } from '../../context/auth';
import { initialState, AuthReducer } from '../../reducers/auth.reducer';
import ArrowButtonBack from '../../components/ArrowButtonBack';
import { SignUp } from '../../services/api';


const Signup = ({ navigation }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const { loadingAuth, setLoadingAuth } = useContext(AuthContext);
    const { name, email, password, repeatPassword } = state;

    function onChangeState(type, value) {
        dispatch({ type: type, payload: value });
    }

    async function handleSignup() {
        valitadeFields(name)
        if (valitadeFields(name) || valitadeFields(email) || valitadeFields(password)) {
            alert('A campos não preenchidos corretamente');
            return;
        }
        if (password !== repeatPassword) {
            return alert('As senhas não conhecidem');
        }
        setLoadingAuth(true);
        const user = {
            username: name,
            email: email,
            password: password
        }

        await SignUp(user)
            .then((response) => {
                response.data.id
                Alert.alert('Cadastro Realizado!!', 'retornar a tela de login', [
                    {
                        text: 'ok',
                        onPress: () => navigation.goBack(),

                    }
                ])
            }).catch(err => {
                alert(err.message)

            }).finally(() => {
                setLoadingAuth(false);
            })


    }

    function valitadeFields(text) {
        // console.log(text.match(/^[\t]+|[ \t]+$/))

        return text.match(/^[ \t]+$/) !== null || text === "" ? true : false
    }

    return (
        <Background>
            <ArrowButtonBack goBack={() => navigation.goBack()} />
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
                                onChangeText={(text) => onChangeState('setName', text)}
                            />

                        </InputStyle>

                        <InputTitle>Email:</InputTitle>
                        <InputStyle>
                            <Input
                                value={state.email}
                                keyboardType="email-address"
                                onChangeText={(text) => onChangeState('setEmail', text)}
                            />

                        </InputStyle>

                        <InputTitle>Senha:</InputTitle>
                        <InputStyle>

                            <Input
                                value={state.password}
                                keyboardType="numeric"
                                onChangeText={(text) => onChangeState('setPassword', text)}
                                secureTextEntry={true}
                            />
                        </InputStyle>

                        <InputTitle>Repita a Senha:</InputTitle>
                        <InputStyle>

                            <Input
                                value={state.repeatPassword}
                                keyboardType="numeric"
                                onChangeText={(text) => onChangeState('setRepeatPassword', text)}
                                secureTextEntry={true}
                            />
                        </InputStyle>

                    </InputView>

                    <ButtonLogin onPress={handleSignup}>

                        {loadingAuth ? <ActivityIndicator size={22} color={'#fff'} /> :
                            <ButtonText >Cadastrar</ButtonText>}

                    </ButtonLogin>


                </Container>
            </TouchableWithoutFeedback>
        </Background>
    );

}

export default Signup;
