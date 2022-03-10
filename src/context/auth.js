import React, { createContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import firebase from '../services/FirebaseConnections';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext({})

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
            async function getUser(){
                await AsyncStorage.getItem('USER').then((user) => {
                    setUser(JSON.parse(user));
                })
            }

            getUser();
    }, [])

    function signin(email, password) {
        setLoadingAuth(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let uid = userCredential.user.uid

                firebase.database().ref('USER').child(uid).once('value', (snapshot) => {
                    let newUser = {
                        name: snapshot.val().name,
                        email: snapshot.val().email
                    }
                    setUser(newUser);
                    saveFromStorage(newUser);
                })

            })
            .catch((error) => {
                alert(error.message);
            }).finally(() => {
                setLoadingAuth(false);
            })
    }
    function signup(user) {
        setLoadingAuth(true);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((snapshot) => {
                let uid = snapshot.user.uid;
                firebase.database().ref('USER').child(uid).set({
                    name: user.name,
                    email: user.email
                })

                let data = {
                    id: uid,
                    name: user.name,
                    email: user.email
                }
                setUser(data);
                saveFromStorage(data);

            })
            .catch((error) => {
                alert(error.message);
            }).finally(() => {
                setLoadingAuth(false);
            })
    }

    async function saveFromStorage(user) {
        await AsyncStorage.setItem("USER", JSON.stringify(user));
    }
    return (
        <AuthContext.Provider value={{ signin, signup, loadingAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };