import styled from 'styled-components/native';

export const Container = styled.View`
padding: 5px;
/* flex: 1; */
height: 125px;
`;

export const List = styled.FlatList``;

export const Card = styled.TouchableOpacity`
flex-direction: row;
background-color: ${props=> props.theme.primaryColor};
width: 210px;
height: 100px;
box-shadow: 1px 2px 2px ${Platform.OS === 'ios'? 'rgba(0,0,0,0.28)' : '#000'};
elevation: 5;
border-radius:15px;
justify-content: center;
align-items: center;
margin-left: 10px;
margin-top: 10px;
`;

export const LogoItem = styled.Image`
width: 40px;
height: 40px;
margin-bottom: 5px;
`;
export const ViewStoreTitle = styled.View`
padding: 10px;
justify-content: center;
align-items: center;
`;
export const Title = styled.Text`
font-size: 14px;
color: #000;
`;