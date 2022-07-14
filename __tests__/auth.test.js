import { SignIn, SignUp, getMe } from '../src/services/api';

describe('test Autentication login', () => {
    it('should that login when email and pass correctly', () => {
        const email = 'sekai@sekai.com'
        const password = '123'
        var ok = 0
        SignIn(email, password)
            .then(() => {
                ok = 201
                expect(ok).toBe(201)
            })
            .catch(err => {
                ok = 403
            })
            .finally(() => {
                expect(ok).toBe(201)
            })
    });

    it('should that signup is not successful', () => {
        const user = {
            username: 'John',
            email: 'sekai@sekai.com',
            password: '123'
        }

        var ok = 0
        SignUp(user)
            .then(() => {
                ok = 201
                expect(ok).toBe(201)
            })
            .catch(err => {
                ok = 403
            })
            .finally(() => {
                expect(ok).toBe(403)
            })
    })
    //     it('should that login fail when password is not correctly', () => {
    //         const email = 'sekai@sekai.com'
    //         const password = '12344'
    //         var ok = 0
    //         firebase.auth().signInWithEmailAndPassword(email, password)
    //             .catch((error) => {
    //                 // console.log(error.code)
    //                 ok = error.code
    //             })
    //             .finally(() => {
    //                 expect(ok).toBe("auth/wrong-password")
    //             })
    //     })
    //     it('should that login fail when email is not correctly', () => {
    //         const email = 'sekai@sekaai.com'
    //         const password = '123456'
    //         var ok = 0
    //         firebase.auth().signInWithEmailAndPassword(email, password)
    //             .catch((error) => {
    //                 // console.log(error.code)
    //                 ok = error.code
    //             })
    //             .finally(() => {
    //                 expect(ok).toBe("auth/user-not-found")
    //             })
    //     })
    // });

    // describe('teste Autentication Signup', () => {
    //     beforeAll(() => {
    //         jest.setTimeout(10000);
    //     });

    //     it('should signup user when email and password is correctly', async () => {
    //         const email = 'sekai@sekaai.com'
    //         const password = '123456'
    //         let ok = 0
    //         await firebase.auth().createUserWithEmailAndPassword(email, password)
    //             .then(() => {
    //                 ok = 201
    //             }).finally(() => {
    //                 expect(ok).toBe(201)
    //             });

    //     });

    //     it('should return an error message, user already exists', async () => {
    //         const email = 'sekai@sekaai.com'
    //         const password = '123456'

    //         await firebase.auth().createUserWithEmailAndPassword(email, password)
    //             .catch((error) => {
    //                 expect(error.code).toBe('auth/email-already-in-use')

    //             })
    //     });

    //     it('should delete current user', async () => {
    //         const user = await firebase.auth().currentUser.delete().then(
    //             () => {
    //                 console.log("deletou")
    //             })
    //     });

    //     it('should return Password should be at least 6 characters when wrong password', async () => {
    //         const email = 'sekai@sekaai.com'
    //         const password = '1256'

    //         await firebase.auth().createUserWithEmailAndPassword(email, password)
    //             .catch((error) => {
    //                 console.log(error)
    //                 expect(error.message).toBe('Password should be at least 6 characters')
    //             })
    //     });

    //     it('should return The email address is badly formatted when wrong email', async () => {
    //         const email = 'sekai@sekaai,com'
    //         const password = '1256456'

    //         await firebase.auth().createUserWithEmailAndPassword(email, password)
    //             .catch((error) => {
    //                 console.log(error)
    //                 expect(error.message).toBe('The email address is badly formatted.')
    //             })
    //     });

})