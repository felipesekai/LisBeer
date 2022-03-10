import firebase from '../src/services/FirebaseConnections';

describe('test Autentication', () => {
    it('should that login when email and pass correctly', () => {
        const email = 'sekai@sekai.com'
        const password = '123456'
        var ok = 0
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                ok = 201
            }).finally(() => {
                expect(ok).toBe(201)
            })


    })
    it('should that login fail when password is not correctly', () => {
        const email = 'sekai@sekai.com'
        const password = '12344'
        var ok = 0
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                // console.log(error.code)
                ok = error.code
            })
            .finally(() => {
                expect(ok).toBe("auth/wrong-password")
            })

    })
     it('should that login fail when email is not correctly', () => {
        const email = 'sekai@sekaai.com'
        const password = '123456'
        var ok = 0
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                // console.log(error.code)
                ok = error.code
            })
            .finally(() => {
                expect(ok).toBe("auth/user-not-found")
            })

    })
})