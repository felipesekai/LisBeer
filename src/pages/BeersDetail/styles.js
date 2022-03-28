import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
/* justify-content: center; */
align-items: center;
flex: 1;
background-color: ${props => props.theme.background};
`;

export const Header = styled.View`
width: 100%;
height:25%;
padding: 10px;
`;

export const ButtonBack = styled.TouchableOpacity`
position: absolute;
top: 15px;
left: 15px;
width: 30px;
height: 30px;
/* background-color: ${props => props.theme.textColor}; */
`;

export const ItemImg = styled.Image`
width: 100%;
height:100%;

`;

export const Card = styled.View`
height: 100%;
width: 100%;
box-shadow: 1px 3px 1px ${Platform.OS === 'ios' ? 'rgba(0,0,0,0.28)' : "#000"};
elevation: 5;
background-color: ${props => props.theme.primaryColor};
border-top-left-radius: 25px;
border-top-right-radius: 25px;
/* justify-content: center; */
align-items: center;
`;


export const ItemName = styled.Text`
font-size: 20px;
letter-spacing: 1px;
font-weight: bold;
/* margin-top:15px; */
color: ${props => props.theme.buttonTextColor};

`;

export const RateViewRow = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
height: 100%;
/* display: flex; */
/* background-color: #ddd; */
/* padding: 10px; */


`;

export const TitleRateViewRow = styled.View`
flex-direction: row;
align-items: center;
width: 90%;
/* padding: 10px; */
justify-content:space-between;
`;

export const HeaderBeersView = styled.View`
    width: 100%;
    margin: 15px 0 0 30px;
    height: 60px;
`;


export const ItemText = styled.Text`
font-size: 16px;
color: ${props => props.theme.buttonTextColor};

`;
export const RateText = styled.Text`
font-size: 18px;
color: ${props => props.theme.buttonTextColor};

`;


