const initialState = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
}

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'setName':
            return {
                ...state,
                name: action.payload,
            }
        case 'setEmail':
            return {
                ...state,
                email: action.payload,
            }
        case 'setPassword':
            return {
                ...state,
                password: action.payload,
            }
        case 'setRepeatPassword':
            return {
                ...state,
                repeatPassword: action.payload,
            }
        default:
            return state
    }
}

export { initialState, AuthReducer }