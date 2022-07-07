import React, { createContext, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import firebase from '../services/FirebaseConnections';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getMe, SignIn, SignUp} from "../services/api";
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
        const responsee = await SignIn(email, password).then((response) => {
            const authHeader = response.headers



            setAuthToken(authHeader.authorization);
            console.log(authHeader.authorization);


            getMe(authHeader.authorization).then((user) => {
                console.log(user.data)
                setUser(user.data)
            })
        }).finally(() => {
            setLoadingAuth(false);
        })
       // await firebase.auth().signInWithEmailAndPassword(email, password)
       //      .then( async (userCredential) => {
       //          let uid = userCredential.user.uid
       //
       //         await firebase.database().ref('USER').child(uid).once('value', (snapshot) => {
       //              let newUser = {
       //                  name: snapshot.val().name,
       //                  email: snapshot.val().email
       //              }
       //              setUser(newUser);
       //              saveFromStorage(newUser);
       //          })
       //
       //      })
       //      .catch((error) => {
       //          alert(error.message);
       //      }).finally(() => {
       //          setLoadingAuth(false);
       //      })
    }
   async function signup(user) {
        setLoadingAuth(true);
        SignUp(user).then((response)=>{
            console.log(response)
        }).catch((error) => {
            console.log(error.message)
        }).finally(() => {setLoadingAuth(false);})
       // await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
       //      .then( async (snapshot) => {
       //          let uid = snapshot.user.uid;
       //         await firebase.database().ref('USER').child(uid).set({
       //              name: user.name,
       //              email: user.email
       //          })
       //
       //          let data = {
       //              id: uid,
       //              name: user.name,
       //              email: user.email
       //          }
       //          Alert.alert(
       //              "Usuario Cadastrado com sucesso",
       //              "Click em ok para ir para tela inicial",
       //              [
       //                {
       //                  text: "Cancel",
       //                  onPress: () => console.log("Cancel Pressed"),
       //                  style: "cancel"
       //                },
       //                { text: "OK", onPress: () => saveUser(data) }
       //              ]
       //            );
       //
       //
       //      })
       //      .catch((error) => {
       //          alert(error.message);
       //      }).finally(() => {
       //          setLoadingAuth(false);
       //      })
    }
    async function signOut(){
        await firebase.auth().signOut().then(() => {
            setUser(null);
            deleteUserFromStorage();
        })
    }
    function saveUser(data){
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
        <AuthContext.Provider value={{ signin, signup,signOut, loadingAuth, user, setUser, authToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
