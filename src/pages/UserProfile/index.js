import React, { useContext } from 'react';
import { View } from 'react-native';
import { Background, ButtonLogin, ButtonText, Container } from '../../styles';
import { AuthContext } from '../../context/auth';
// import { Container } from './styles';

const UserProfile = () => {
    const { setUser } = useContext(AuthContext);
    function handleLogout() {
        setUser(null);
    }
    return (

        <Background>
            <Container>
                <ButtonLogin onPress={handleLogout}>
                    <ButtonText>
                        Sair
                    </ButtonText>
                </ButtonLogin>
            </Container>

        </Background>
    );
}

export default UserProfile;