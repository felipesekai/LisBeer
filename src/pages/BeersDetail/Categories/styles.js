import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
/* align-items: center; */
background-color: ${props => props.theme.background};
`;

export const Header = styled.View`
width: 100%;
height:50px;
/* margin-bottom: 10px; */
flex-direction: row;
align-items: center;
background-color: ${props => props.theme.primaryColor};
`;

export const ContainerList = styled.View`
/* width: 95%; */
margin: 5px 5px;
flex: 1;
/* background-color: ${props => props.theme.primaryColor}; */
`;

export const TitleHeader = styled.Text`
font-size: 20px;
font-weight: bold;
font-family: sans-serif;
color: ${props => props.theme.background};
`;