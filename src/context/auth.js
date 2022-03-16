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

  async function signin(email, password) {
        setLoadingAuth(true);
       await firebase.auth().signInWithEmailAndPassword(email, password)
            .then( async (userCredential) => {
                let uid = userCredential.user.uid

               await firebase.database().ref('USER').child(uid).once('value', (snapshot) => {
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
   async function signup(user) {
        setLoadingAuth(true);
       await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( async (snapshot) => {
                let uid = snapshot.user.uid;
               await firebase.database().ref('USER').child(uid).set({
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
        <AuthContext.Provider value={{ signin, signup, loadingAuth, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };