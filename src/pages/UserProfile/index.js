import React, { useContext, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Background, ButtonLogin, ButtonText, Container } from '../../styles';
import { AuthContext } from '../../context/auth';
import { Text, Image, Avatar, VStack, Center, Heading, Button, useDisclose, Alert, HStack } from 'native-base';
import MateiralIcons from '@expo/vector-icons/MaterialIcons';
import ActionSheetUserEdit from './ActionSheetUserEdit';
import AlertSuccess from '../../components/AlertSuccess';


const UserProfile = () => {
    const { signOut, user } = useContext(AuthContext);
    const [change, setChange] = useState(false);

    useEffect(() => {
        setTimeout(() => setChange(false), 2000)
    }, [change])

    function handleLogout() {
        signOut();
    }

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();


    return (
        <Background>
            <Container>
                <Button onPress={onOpen}
                    position={'absolute'} top={5} right={5}
                    rounded='full'
                >
                    <MateiralIcons name="edit" size={25} />
                    <ActionSheetUserEdit _setChange={(bool) => setChange(bool)} open={isOpen} close={onClose} />
                </Button>

                <Avatar alignSelf="center" size="2xl" source={{
                    uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                }}>S</Avatar>
                <Heading mt={5}>{user ? user.username : 'Mr Caramelo'}</Heading>
                <Text fontSize={['sm', 'md']}>{user ? user.email : 'MrCaramelo@dogdog.com'}</Text>
                <ButtonLogin onPress={handleLogout}>
                    <ButtonText>
                        Sair
                    </ButtonText>
                </ButtonLogin>


            </Container>
            {change && <AlertSuccess />}

        </Background>
    );
}

export default UserProfile;