import React from 'react';
import { View } from 'react-native';
import { Alert, HStack, VStack, Text } from 'native-base';

// import { Container } from './styles';

const AlertSuccess = () => {
    return <Alert w={'full'} variant='subtle' status='success' position='absolute' bottom='0'>
        <VStack space={2} flexShrink={1} w={'full'}>
            <HStack flexShrink={1} space={2} alignItems='center' justifyContent='space-between'>
                <HStack flexShrink={1} space={2} alignItems='center'>
                    <Alert.Icon />
                    <Text color='coolGray.800' > Alteração feita com sucesso!!! </Text>
                </HStack>
            </HStack>
        </VStack>
    </Alert>;
}

export default AlertSuccess;