import styled from 'styled-components/native';
export const Container = styled.View`
/* padding: 5px; */
justify-content: center;
align-items: center;
flex: 1;
`;
export const ContainerItens = styled.View`
padding: 5px;
width: 100px;
margin-left: 10px;
margin-top: 5px;
/* margin-bottom: 5px; */
/* justify-content: center;
align-items: center; */
`;

export const List = styled.FlatList``;

export const Card = styled.TouchableOpacity`
background-color: ${props=> props.theme.background};
width: 100px;
height: 100px;
box-shadow: 1px 2px 2px ${Platform.OS === 'ios'? 'rgba(0,0,0,0.28)' : '#000'};
elevation: 5;
/* padding: 5px; */
border-radius: 15px;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`;

export const LogoItem = styled.Image`
width: 100%;
height:100%;
margin-bottom: 5px;
`;
export const Title = styled.Text`
font-size: 14px;
color:${props=> props.theme.primaryColor};
/* text-align: center; */

`;
export const ItemTextView = styled.View`
flex-direction: row;
margin-top: 2px;
width: 100%;
justify-content: flex-start;
`;
export const Value = styled.Text`
font-size: 10px;
margin-right: 3px;
color: ${props=> props.theme.primaryColor};

`;