import styled from 'styled-components/native';

export const Container = styled.View`
width: 100%;
margin-right: 15px;
`;
export const Card = styled.View`
background-color: ${props => props.theme.primaryColor};
box-shadow: 1px 2px 1px ${Platform.OS === 'ios' ? 'rgba(0,0,0,0.28)' : '#000'};
elevation: 3;
margin: 2px 2px;
/* border-width: 1px; */
`;
export const CardContainer = styled.View`
width:100%;
`;
export const CardContainerRow = styled.View`
flex-direction: row;
align-items: center;
background-color: ${props => props.theme.primaryColor};
box-shadow: 1px 2px 1px ${Platform.OS === 'ios' ? 'rgba(0,0,0,0.28)' : '#000'};
elevation: 2;

`;
export const ItemTextView = styled.SafeAreaView`
width: 75%;
flex-direction: row;
justify-content: space-between;
`;
export const ItemName = styled.Text`
color: ${props=> props.theme.background};
`;
export const ItemText = styled.Text`
color: ${props=> props.theme.background};
text-align: right;
`;
export const ItemImage = styled.Image`
width: 50px;
height:50px;
margin-right: 10px;

`;

export const RateViewRow = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
height: 100%;
`;

export const RateText = styled.Text`
font-size: 14px;
color: ${props => props.theme.buttonTextColor};

`;