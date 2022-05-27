import styled from 'styled-components/native';

export const Container = styled.View`
width: 100%;
/* height: 100%; */
/* margin: 15px; */
margin-right: 15px;
`;
export const Card = styled.View`
flex-direction: row;
padding: 10px;
width:100%;
background-color: ${props => props.theme.primaryColor};
box-shadow: 1px 2px 1px ${Platform.OS === 'ios' ? 'rgba(0,0,0,0.28)' : '#000'};
elevation: 3;
margin-bottom: 3px;
`;
export const ItemTextView = styled.SafeAreaView`
width: 85%;
flex-direction: row;
justify-content: space-between;
`;
export const ItemName = styled.Text`
color: ${props=> props.theme.background};
`;
export const ItemPrice = styled.Text`
color: ${props=> props.theme.background};
text-align: right;
`;
export const ItemImage = styled.Image`
width: 20px;
height:20px;
margin-right: 10px;

`;