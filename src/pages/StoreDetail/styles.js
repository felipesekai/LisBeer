import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
/* justify-content: center; */
align-items: center;
flex: 1;
background-color: ${props=> props.theme.background};


`;

export const Header = styled.View`
width: 100%;
height:25%;
/* padding: 10px; */
`;

export const ButtonBack = styled.TouchableOpacity`
position: absolute;
top: 15px;
left: 15px;
width: 30px;
height: 30px;
/* background-color: ${props=> props.theme.textColor}; */
`;

export const ItemImg = styled.Image`
width: 100%;
height:120%;

`;

export const Card = styled.View`
height: 100%;
width: 100%;
box-shadow: 1px 3px 1px ${Platform.OS === 'ios' ? 'rgba(0,0,0,0.28)' : "#000"};
elevation: 5;
background-color: ${props=> props.theme.primaryColor};
border-top-left-radius: 25px;
border-top-right-radius: 25px;
/* justify-content: center; */
align-items: center;
`;

export const CardContainer = styled.View`
width: 90%;
margin: 10px 5px;
/* background-color: ${props=> props.theme.secondaryColor}; */

`;
export const ListContainer = styled.KeyboardAvoidingView`
width: 90%;
margin: 10px 5px;
height: 40%;
/* background-color: ${props=> props.theme.secondaryColor}; */

`;


export const ItemName = styled.Text`
font-size: 22px;
font-weight: bold;
margin-top:15px;
color: ${props=> props.theme.buttonTextColor};

`;

export const ViewRow = styled.View`
flex-direction: row;
align-items: center;
/* padding: 10px; */
/* margin-top: 5px; */

`;

export const ItemTextBold = styled.Text`
font-size: 16px;
font-weight: bold;
color: ${props=> props.theme.buttonTextColor};

`;
export const ItemText = styled.Text`
font-size: 16px;
color: ${props=> props.theme.buttonTextColor};

`;