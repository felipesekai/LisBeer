import styled from 'styled-components/native';
export const Container = styled.View`
/* padding: 5px; */
flex: 1;
`;

export const List = styled.FlatList``;

export const Card = styled.TouchableOpacity`
background-color: ${props=> props.theme.background};
width: 150px;
height: 150px;
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
width: 60px;
height: 60px;
margin-bottom: 5px;
`;
export const Title = styled.Text`
font-size: 14px;
color:${props=> props.theme.primaryColor};
text-align: center;

`;
export const Value = styled.Text`
font-size: 10px;
margin-right: 3px;
color: ${props=> props.theme.primaryColor};

`;