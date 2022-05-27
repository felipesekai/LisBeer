import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
width: 90%;
height: 100%;
margin-top: 15px;
`;

export const TitleOtherItens = styled.Text`
color: ${props => props.theme.background};
font-size: 16px;
margin-top:10px;
font-weight: bold;
`;

// export const ListContainer = styled.KeyboardAvoidingView`
// width: 100%;
// margin: 10px 5px;
// height: 25%;
// /* background-color: ${props=> props.theme.secondaryColor}; */
// `;

export const Title = styled.Text`
color: ${props => props.theme.background};
font-size: 16px;
margin-top:10px;
font-weight: bold;
`;

export const StoreContent = styled.View`
margin: 10px 0;
`;



