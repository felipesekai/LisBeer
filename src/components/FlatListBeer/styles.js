import styled from 'styled-components/native';
// import { Platform } from 'react-native';
export const Container = styled.View`
/* padding: 5px; */
flex: 1;
`;

export const List = styled.FlatList``;

export const Card = styled.TouchableOpacity`
background-color: #fff;
width: 100px;
height: 100px;
box-shadow: 1px 2px 2px ${Platform.OS === 'ios'? 'rgba(0,0,0,0.28)' : '#000'};
elevation: 5;
border-radius: 15px;
justify-content: center;
align-items: center;
margin-left: 10px;
margin-top: 5px;
margin-bottom: 10px;
`;

export const LogoItem = styled.Image`
width: 50px;
height: 50px;
margin-bottom: 5px;
`;
export const Title = styled.Text`
font-size: 14px;
color: #000;

`;
export const Value = styled.Text`
font-size: 10px;
color: #000;
`;