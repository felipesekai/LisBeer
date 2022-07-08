import React, { createContext, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMe, SignIn, SignUp } from "../services/api";


const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState({});
    const [loadingAuth, setLoadingAuth] = useState(false);

    // useEffect(() => {
    //         async function getUser(){
    //             await AsyncStorage.getItem('USER').then((user) => {
    //                 setUser(JSON.parse(user));
    //             })
    //         }
    //
    //         getUser();
    // }, [])

    async function signin(email, password) {
        setLoadingAuth(true);
        await SignIn(email, password).then((response) => {
            const authHeader = response.headers

            setAuthToken(authHeader.authorization);

            getMe(authHeader.authorization).then((user) => {
                console.log(user.data)
                setUser(user.data)
            })
        }).finally(() => {
            setLoadingAuth(false);
        })

    }
    async function signup(user) {
        setLoadingAuth(true);
        SignUp(user).then((response) => {
            Alert.alert('Cadastro Realizado!!', 'retornar a tela de login', [
                Text = 'ok',
                onPress = {}
            ])
            console.log(response)
        }).catch((error) => {
            console.log(error.message)
        }).finally(() => { setLoadingAuth(false); })

    }
    async function signOut() {
        await firebase.auth().signOut().then(() => {
            setUser(null);
            deleteUserFromStorage();
        })
    }
    function saveUser(data) {
        setUser(data);
        saveFromStorage(data);
    }

    async function saveFromStorage(user) {
        await AsyncStorage.setItem("USER", JSON.stringify(user));
    }
    async function deleteUserFromStorage() {
        await AsyncStorage.removeItem("USER");
    }
    return (
        <AuthContext.Provider value={{ signin, signup, signOut, setLoadingAuth, loadingAuth, user, setUser, authToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
